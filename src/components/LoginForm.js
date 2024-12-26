import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Input, Title } from './SharedStyles';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
          navigate('/main');
        } else {
          alert('Please enter username and password.');
        }
    };

    return (
      <form onSubmit={handleSubmit} style={{width: "100%"}}>
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
      </form>
    );
};

export default LoginForm;