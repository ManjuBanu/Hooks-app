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

    return(
        <div 
        style={{
            textAlign:'center'
        }}>
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
        value={form.username}
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
        />
        <input 
        value={form.email}
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
        />
        <input 
        value={form.password}
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
       </form>
    
       {user && JSON.stringify(user,null,2)}
        </div>
    );
}