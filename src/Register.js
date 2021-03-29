import React,{useState, Component} from 'react';

const initialFormState = {
        username:"",
        email:"",
        password:""
}
export default function Register(){

    const [form,setForm] = useState(initialFormState);

    const [user,setUser] = useState(null);

    const handleChange = event =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        setUser(form);
        setForm(initialFormState);
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
        <div style={{
            width:'500px',
            background: "lightblue",
            textAlign:'center',
            margin:'50px auto',
            padding:'20px'
        }}
        >
        <h2>Register</h2>
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
        value={form.username}
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
        />
        <input 
        style={styledInput}
        value={form.email}
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
        />
        <input 
        style={styledInput}
        value={form.password}
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
        />
        <button  
        type="submit">Submit</button>
       </form>
    
       {user && JSON.stringify(user,null,2)}
        </div>
    );
}