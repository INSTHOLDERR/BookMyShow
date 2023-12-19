import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "./style/log.css";

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const reg = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log(username);

      const response = await axios.post('http://localhost:3000/register', {
        username,
        password,
        repassword,
      });

      if (response.status === 200) {
        alert("Register successful!");
        setUsername('');
        setPassword('');
        setRepassword('');
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form onSubmit={reg} className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="re-pass">
                  <i className="zmdi zmdi-lock-outline"></i>
                </label>
                <input
                  type="password" id='repassword' value={repassword} onChange={(e) => setRepassword(e.target.value)}
                  placeholder="Repeat your password"
                />
              </div>
              <div className="form-group form-button">
                <button type="submit" id="signup" className="form-submit" disabled={loading}>Register</button>
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src="./images/a.jpg" alt="sign up image" />
            </figure>
            <Link to="/login" replace={true} className="signup-image-link">
              I am already a member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;





