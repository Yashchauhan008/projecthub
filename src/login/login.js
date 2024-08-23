import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from "./styles.module.css";
import { handleAuthentication } from '../middeleware/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { token, user } = await handleAuthentication(username, password);

      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 3000,
      });
      setUsername('');
      setPassword('');

      // Check if the user is an admin
      if (user.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/');
      }

      // Store the token in localStorage or use it for authentication
      localStorage.setItem('token', token);
    } catch (error) {
      console.log('Login Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: error.response.data.message || 'Something went wrong',
      });
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleLogin}>
            <h1>Login to Your Account</h1>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;