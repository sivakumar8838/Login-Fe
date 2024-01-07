import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Resetpassword.css'

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [res_mgs, setRes_Mgs] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();

    const data = {
      username: email,
    };

    try {
      const res = await axios.post('https://kitchen-recipe-management-agpb.onrender.com/api/passwordreset/forget-password', data);

      console.log('successfully Reset mail Sent');
      setEmail('');
      const info = res.data;
      setRes_Mgs(`${info.message}`);
    } catch (error) {
      console.log(error);
    }
  };

  const changeNewPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://login-task-v933.onrender.com/api/passwordreset/forget-password/${otp}`,
        { password: newPassword }
      );

      console.log('new Password Change');
      setNewPassword('');
      const info = response.data;
      setRes_Mgs(`${info.message}`);
      navigate('/');
    } catch (error) {
      console.error('Error changing password', error);
    }
  };

  return (
    <div className='sks'>
      <div className='card1'>
        <div>
          <h2 className='heading3'>Reset Password</h2>
         <div className='input-diva'>
          <input
          className='input3'
            type="email"
            placeholder='Email Id:'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          <p className='p'>{res_mgs}</p>
        
          <div className='button-diva'>
           <button onClick={handleSendOTP} className='submit3'>
            Send OTP
            </button>
          </div>
          <div className='login'>
          
          <Link to='/' className='Link'>
          <button>
          <span className='box'>
          Login
          </span>
          </button>
        </Link>
     
          </div>
         
        </div>
        {res_mgs === 'Reset email sent successfully' ? (
          <div className='res'>
            <div className='input-diva1'>
              <input
                className='input4'
                type="password"
                placeholder='Enter the OTP :'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <div className='input-diva1'>
            <input
            className='input4'
            placeholder='New Password :'
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            </div>
            <div className='button-diva1'>
            <button onClick={changeNewPassword} className='submit4'>Submit</button>
            {/* <p>{res_mgs}</p> */}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ResetPassword;
