import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css"
import axios from "axios";

function LoginForm(){

  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
 
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: loginForm.username,
      password: loginForm.password
    };

    try {
      const response = await axios.post('https://login-task-v933.onrender.com/api/login', { ...data });
      console.log( 'Login user ');
      setLoginForm({ username: '', password: '' });
     navigate('/Home');
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return(
    <div className="sks">
             <form onSubmit={handleLogin} className="longin">
             <p className="heading">Login Form</p>
        <div className="email">
          <input
          className="input1"
            type='email'
            placeholder='Email...'
            value={loginForm.username}
            onChange={(e) =>
              setLoginForm({ ...loginForm, username: e.target.value })
            }
            required
          />
        </div>

        <div className="email">
          <input
          className="input1"
            type='password'
            placeholder='Password...'
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            required
          />
        </div>
         <div className="button1">
        <button className="submits" type='submit' >Login</button>
        </div>

        <div className="Login1">
        <Link to='/rese_password'>
        <button className="button2">
        Forget Password
        </button>
        </Link>
      </div>
        <div className="Register">
        You Not Register?
        <Link to={'/register'} className="re">
        <button>
        <span className="box">
        Register
          </span>
          </button>
          </Link>
        </div>
      </form>
      
    </div>
    
    )
}

export default LoginForm;