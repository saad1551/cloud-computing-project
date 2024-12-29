import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Button, Input } from './SharedStyles';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_USER_URL}/users/register`, {
                username,
                email,
                password
            });
            // check if the response is successful
            if (response.status === 201) {
                toast.success('Registration successful! Please login');
                navigate('/login');
            } else {
                toast.error('Error registering user.');
            }
        } catch (error) {
            toast.error('Error registering user.');
            console.error('Error registering user:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{width: "100%"}}>
            <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
            </Button>
        </form>
    );
};

export default RegistrationForm;