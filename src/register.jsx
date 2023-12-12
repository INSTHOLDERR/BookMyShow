import axios from 'axios';
import React, { useState,useEffect } from 'react';
    
function Register(){

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


    const reg = ()=>{
        const response = axios.post('http://localhost:5000/register', {
            username,
            password,
        })
        console.log(response);
        response.then(res=>{
            if(res.status===200){
                alert("Register successful!")
               setUsername('');
               setPassword('');
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }
    

    return(
        <div>
    <h2>Register</h2>
      <div>

        <label>Username:</label>
        <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={reg}>Register</button>
      
    </div>
  );
    
}
export default Register