import React, {useState,useEffect, useRef} from 'react';
import axios from 'axios';

import logo from './logo.svg';

export default function FetchData(){

const [results, setResults] = useState([]);
 
const [query , setQuery] =  useState('react hooks')

const [loading,setLoading] = useState(false);

const searchInputRef = useRef();

const [error,setError] = useState(null)

useEffect( () => {
    getResults();

        // .then(res => {
        //     console.log(res.data);
        //     setResults(res.data.hits);
        // })
},
    []
);



const getResults = async () =>{
    setLoading(true);

    try{
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
        setResults(response.data.hits);
    }catch(error){
    setError(error);
    }
    setLoading(false);
}

const handleSearch = event =>{
    event.preventDefault()
    getResults();
}
const handleClearSerach = event =>{
setQuery("");
searchInputRef.current.focus();
}


return(
   <div 
   style={{
    background: "lightPurple",
}}
   className="container max-w-md mx-auto p-4 m-2 bg-purple-lightest-100 shadow-lg rounded">

   <img src={logo} className="App-logo" alt="logo" />

   <h2 style={{
    textAlign: "center",
    color:"green"
    }} 
    className="text-gray-darkest">Hooks News!!!</h2>
   <form onSubmit={handleSearch}
   className="mb-2"
   >
   <input
   className="border p-1 rounded"
   value={query}
    type="text"
    ref={searchInputRef} 
    onChange={event => setQuery(event.target.value)}/>

    <button type="submit"
    className="bg-gray rounded m-1 p-1"
    >Search</button>
    <button type="button" onClick={handleClearSerach}
    className="bg-teal text-white p-1 rounded"
    > Clear</button>
    </form>

{loading ? (
    <div className="font-bold text-orange-dark"> Loading Results...</div>
):(
    <ul className="list-reset leading-normal" >
   {
       results.map(result => (
           <li key={result.objectID} >
           <a href={result.url} className="text-indigo-dark hover:text-indigo-darkest ">{result.title}</a>
           </li>
       ))
   }
   </ul>
)}

{error && <div className="text-red font-bold">{error.message   }</div>}
   
   </div>
)

}