import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import { Container, Title } from '../components/SharedStyles';

const LoginPage = () => {
    return (
        <Container>
            <Title>Login</Title>
            <LoginForm />
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </Container>
    );
};

export default LoginPage;