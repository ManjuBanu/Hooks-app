import React,{useState} from 'react';

export default function Login(){

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [user,setUser] = useState();


    const handleSubmit = event => { 
        event.preventDefault()
        const userData ={
            username,
            password
        }
        setUser(userData);
        setUsername("");
        setPassword("");
    }
    const styledInput = {
        height:'40px',
        width:'150px',
        background: "white",
        textAlign:'center',
        margin:'10px auto',
        padding:'20px'
    };

return(
    <div 
    style={{
        width:'500px',
        background: "lightblue",
        textAlign:'center',
        margin:'50px auto',
        padding:'20px'
    }}>
    <h2>Login</h2>
   <form
   style={{
   display:'grid',
   alignItems:"center",
   justifyItems:'center'
    }}
    
    onSubmit={handleSubmit}
    > 

    <input 
    style={styledInput}
    value={username}
    type="text"
    placeholder="username"
    onChange={event => setUsername(event.target.value)}
    />
    <input 
    style={styledInput}
    value={password}
    type="password"
    placeholder="password"
    onChange={event => setPassword(event.target.value)}
    />
    <button type="submit">Submit</button>
   </form>

   {user && JSON.stringify(user,null,2)}
    </div>
);
}