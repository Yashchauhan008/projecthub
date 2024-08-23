// auth.js

let username = null;

export const setUsername = (name) => {
  username = name;
};

export const getUsername = () => {
  return username;
};
