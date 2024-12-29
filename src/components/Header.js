import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderTitle, ButtonContainer, HeaderButton } from './SharedStyles';

const Header = () => {
  const loggedIn = localStorage.getItem("isLoggedIn");

  return (
    <HeaderContainer>
      <HeaderTitle>YayTube</HeaderTitle>
      <ButtonContainer>
        {loggedIn ? (
          <>
            <Link to="/"><HeaderButton>Main Page</HeaderButton></Link>
            <Link to="/admin"><HeaderButton>Admin Portal</HeaderButton></Link>
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