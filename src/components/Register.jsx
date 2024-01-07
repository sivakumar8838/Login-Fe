import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Register.css"
import axios from "axios";

function RegisterFrom(){
  const [register, setRegister] = useState({
    username: '',
    name: '',
    password: '',
  });
  
  const handleRegister = async (e) => {
    e.preventDefault();

    const registerBody = {
      username: register.username,
      name: register.name,
      password: register.password,
    };

    try {
      const response = await axios.post("https://login-task-v933.onrender.com/api/users", registerBody);

      console.log('register user... ');
      setRegister({ username: '', name: '', password: '' });
      // const data = response.registerBody;
    } catch (error) {
      console.log(error);
    }
  };

    return(
        <div className="sk">
             <form onSubmit={handleRegister} className="card">
             <p className="heading">Register Form</p>
        <div className="input-div">
          <input 
          className="input"
          placeholder="Email"
            type="email"
            value={register.username}
            onChange={(e) => {
              setRegister({...register, username: e.target.value})
            }}
            required
          />
        </div>
        <div className="input-div">
        <input
        className="input"
            type='name'
            placeholder='Name...'
            value={register.name}
            onChange={(e) => 
            setRegister({ ...register, name: e.target.value })}
            required
          />
         </div>
        <div className="input-div">
          <input
          className="input"
            type='password'
            placeholder='Password...'
            value={register.password}
            onChange={(e) => setRegister({ ...register, password: e.target.value })}
            required
          />
          </div>
        <div className="button-div">
        <button type='submit' className="submit">
       Register
        </button>
        </div>
        <div className="Login">
        Already have an account?
        <Link to='/' className="lo"> Login</Link>
        </div>
      </form>
 
      </div>
     
    )
}

export default RegisterFrom;