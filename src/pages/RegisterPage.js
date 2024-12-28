import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { Container, Title } from '../components/SharedStyles';

const RegisterPage = () => {
    return (
        <Container>
            <Title>Register</Title>
            <RegisterForm />
            <p>
                Already have an account? <Link to="/">Login here</Link>
            </p>
        </Container>
    );
};

export default RegisterPage;