import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = (props) => {

  const [form, setForm] = useState ({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  });

  const [error, setError] = useState('');

  let history = useHistory();

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', form)
      .then(res=>{
        localStorage.setItem('token', res.data.payload);
        history.push('/bubbles');
        // console.log(res);
      })
      .catch(err=>{
        console.log(err);
        setError('Username or Password not valid')
      })
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={submitHandler}>
          <label>Username:
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label>Password:
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <button onSubmit={submitHandler}>Login</button>
        </form>
        {error ? <p>{error}</p> : null}
      </div>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.