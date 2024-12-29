import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderTitle, ButtonContainer, HeaderButton } from './SharedStyles';

const Header = () => {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.setItem("isLoggedIn", "false");
      navigate("/login");
    }
  };

  return (
    <HeaderContainer>
      <HeaderTitle>YayTube</HeaderTitle>
      <ButtonContainer>
        {loggedIn ? (
          <>
            <Link to="/"><HeaderButton>Main Page</HeaderButton></Link>
            <Link to="/admin"><HeaderButton>Admin Portal</HeaderButton></Link>
            <HeaderButton onClick={handleLogout}>Logout</HeaderButton>
          </>
        ) : (
          <>
            <Link to="/login"><HeaderButton>Login</HeaderButton></Link>
            <Link to="/register"><HeaderButton>Register</HeaderButton></Link>
          </>
        )}
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;