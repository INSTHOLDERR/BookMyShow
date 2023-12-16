import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const reg = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.post('http://localhost:5000/register', {
        username,
        password,
        repassword,
      });

      if (response.status === 200) {
        alert("Register successful!");
        setUsername('');
        setPassword('');
        setRepassword('');
      }
    } catch (error) {
      console.error("Registration failed", error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Navigation</h2>
      <span><Link to={"/"}>Home</Link></span>
      <span><Link to={"/login"}>Login</Link></span>

      <h2>Register</h2>
     
        <label>Username:</label>
        <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
     
        <label>Re-Password:</label>
        <input type="password" id='repassword' value={repassword} onChange={(e) => setRepassword(e.target.value)} />
   
      <button onClick={reg} disabled={loading}>Register</button>
 
    </div>
  );
}

export default Register;
