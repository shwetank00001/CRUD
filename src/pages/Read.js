import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

import './Read.css';

const Read = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    async function getData() {
        try {
            const response = await axios.get("https://641b0e6d1f5d999a445a4c4d.mockapi.io/crud");
            setData(response.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    React.useEffect(function () {
        getData();
    }, []);

    function handleRemove(item) {
        axios.delete(`https://641b0e6d1f5d999a445a4c4d.mockapi.io/crud/${item.id}`)
            .then(() => {
                getData();
            });
    }

    function toLocal(item) {
        localStorage.setItem("id", item.id);
        localStorage.setItem("name", item.name);
        localStorage.setItem("email", item.email);
    }

    if (loading) {
        return <SyncLoader color='#3498db' />;
    }

    if (error) {
        return <div className='error-message'>Error loading data</div>;
    }

    const ele = data.map(function (item) {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                    <Link to='/update'>
                        <button className='edit-button' onClick={() => toLocal(item)}>Edit</button>
                    </Link>
                </td>
                <td><button className='remove-button' onClick={() => handleRemove(item)}>Remove</button></td>
            </tr>
        );
    });

    return (
        <div className='read-container'>
            <h1 className='read-heading'>Read Data</h1>
            <table className='data-table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {ele}
                </tbody>
            </table>
            <Link to='/' className='create-link'>
                <button className='create-button'>Create a New Field</button>
            </Link>
        </div>
    );
};

export default Read;