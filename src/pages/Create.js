import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './Create.css'; 

const Create = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const header = { "Header": "header" };

    const nav = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('https://641b0e6d1f5d999a445a4c4d.mockapi.io/crud', {
            name: name,
            email: email,
            header
        });

        nav('/read');
    }

    return (
        <div className='create-container'>
            <div className='header'>
                <h1>CREATE</h1>
                <Link to='/read'>
                    <button className='back-button'>Show Existing Data</button>
                </Link>
            </div>

            <form className='form-container' onSubmit={handleSubmit}>
                <label className='input-label'>Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='input-field'
                />

                <label className='input-label'>Email</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input-field'
                />

                <button className='add-button'>Add Data</button>
            </form>
        </div>
    );
};

export default Create;
