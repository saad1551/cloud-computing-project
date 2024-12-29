import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderTitle, ButtonContainer, HeaderButton } from './SharedStyles';
import { isLoggedIn } from '../utils/auth';

const Header = () => {
  const loggedIn = isLoggedIn();

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