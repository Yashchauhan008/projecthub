import axios from 'axios';

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};

// Function to save the username to localStorage
export const saveUsername = (username) => {
  localStorage.setItem('username', username);
};

// Function to save the isAdmin status to localStorage
export const saveIsAdmin = (isAdmin) => {
  localStorage.setItem('isAdmin', isAdmin);
};

// Function to retrieve the username from localStorage
export const getUsername = () => {
  return localStorage.getItem('username');
};

// Function to retrieve the isAdmin status from localStorage
export const getIsAdmin = () => {
  return localStorage.getItem('isAdmin');
};

// Middleware function to handle authentication
export const handleAuthentication = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:5000/user/signin', {
      username,
      password,
    });
    const { token, user } = response.data;
    saveUsername(username); // Save the username to localStorage
    saveIsAdmin(user.isAdmin); // Save isAdmin to localStorage
    localStorage.setItem('token', token);
    return { token, user };
  } catch (error) {
    console.log('Login Error:', error);
    throw error;
  }
};
