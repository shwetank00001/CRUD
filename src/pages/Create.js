import React from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')

    const header = {"HEader" : "header"}

    const nav = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        axios.post('https://641b0e6d1f5d999a445a4c4d.mockapi.io/crud',
        {
            name:name,
            email:email,
            header
        })

        nav('/read')
    }
  return (
    <div className='create'>
        <div>
        <h1>
            CREATE
        </h1>
        <Link to='/read'>
            <button>Click this to show existing data or create a new one.</button>
        </Link>

        </div>

        <form onSubmit={handleSubmit}>
            <label>Name</label><br/>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} /> <br/><br/>

            <label>Email</label><br/>
            <input type='text' value={email}  onChange={(e)=> setEmail(e.target.value)}/> <br/><br/>

            <button>Add data</button>
        </form>

    </div>
  )
}

export default Create