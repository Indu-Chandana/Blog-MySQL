import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from '../context/authContext';

const Login = () => {
    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [err, setError] = useState(null);

    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(input)
            navigate("/");
        } catch (error) {
            setError(error.response.data);
        }
    }
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='username' name='username' onChange={handleChange}/>
                <input type="password" placeholder='password' name='password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login