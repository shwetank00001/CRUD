import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './Update.css';

const Update = () => {
    const [id, setID] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const navigate = useNavigate();

    function handleUpdate() {
        axios.put(`https://641b0e6d1f5d999a445a4c4d.mockapi.io/crud/${id}`, {
            name: name,
            email: email
        })
        .then(() => {
            navigate('/read');
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    React.useEffect(function () {
        setName(localStorage.getItem("name"));
        setID(localStorage.getItem("id"));
        setEmail(localStorage.getItem("email"));
    }, []);

    return (
        <div className='update-container'>
            <h1 className='update-heading'>UPDATE</h1>
            <form className='form-container' onSubmit={handleSubmit}>
                <label htmlFor='name' className='input-label'>Name</label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='input-field'
                />

                <label htmlFor='email' className='input-label'>Email</label>
                <input
                    type="text"
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input-field'
                />

                <button className='update-button' onClick={handleUpdate}>Update</button>
            </form>
            <Link to='/read' className='back-link'>
                <button className='back-button'>Show Existing Data</button>
            </Link>
        </div>
    );
};

export default Update;
