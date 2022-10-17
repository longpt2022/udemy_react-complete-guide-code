import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
});

// Hàm tính toán thời gian còn lại từ khi đăng nhập
const calculateRemainingTime = expirationTime => {
  console.log(expirationTime);
  // Lấy ra thời gian hiện tại
  const currentTime = new Date().getTime();
  console.log(currentTime);

  // Lấy ra thời gian hết hạn trong tương lai
  const adjExpirationTime = new Date(expirationTime).getTime();
  console.log(adjExpirationTime);

  const remainingDuration = adjExpirationTime - currentTime;
  console.log(remainingDuration);

  return remainingDuration;
};

export const AuthContextProvider = props => {
  const initialToken = localStorage.getItem('token');

  const [token, setToken] = useState(initialToken);

  // JavaScript trick (chuyển sang dạng boolean): check có token hay k
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);

    const remainingTime = calculateRemainingTime(expirationTime);

    setTimeout(logoutHandler, remainingTime);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
