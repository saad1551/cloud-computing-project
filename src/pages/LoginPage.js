import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container, Title } from '../components/SharedStyles';

const LoginPage = () => {
    return (
        <Container>
            <Title>Login</Title>
            <LoginForm />
        </Container>
    );
};

export default LoginPage;