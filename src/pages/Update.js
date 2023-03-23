import React from 'react'
import axios from 'axios';
import {Link ,useNavigate} from 'react-router-dom'


const Update = () => {

  const [id ,setID] = React.useState('')
  const [name ,setName] = React.useState('')
  const [email ,setEmail] = React.useState('')

  const navigate = useNavigate() 
  function handleUpdate(){
  axios.put(`https://641b0e6d1f5d999a445a4c4d.mockapi.io/crud/${id}`,
  {
    name: name,
    email: email
  })
  .then(() => {
    navigate('/read')
  })
}

function handleSubmit(e){
  e.preventDefault()

}

React.useEffect(function(){
  setName(localStorage.getItem("name"))
  setID(localStorage.getItem("id"))
  setEmail(localStorage.getItem("email"))
},[])
  return (
    <div>
        <h1>UPDATE</h1>
        <form onSubmit={handleSubmit}>

          <label htmlFor='name'>Name</label>          <br/>
          <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}  />

          <br/>
          <br/>

          <label htmlFor='email'>Email</label>          <br/>
          <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />

          <button onClick={handleUpdate}>Update</button>
        </form>
        <Link to='/read'>
            <button>Click this to show existing data or create a new one.</button>
        </Link>
    </div>
  )
}

export default Update