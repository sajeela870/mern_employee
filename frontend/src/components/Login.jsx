import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
      navigate('/employees'); // use navigate instead of history.push
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">

    <form onSubmit={handleSubmit} className='col-lg-4'>
      <h4>LOGIN</h4>


        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
 

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
    <button type="submit">Login</button>
    </form>
    </div>
      </div>
    </section>
  );
};

export default Login;
