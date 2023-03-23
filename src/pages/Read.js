import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {
    const [data, setData] = React.useState([])

    function getData(){
        axios.get("https://641b0e6d1f5d999a445a4c4d.mockapi.io/crud")
        .then((res) =>{
            setData(res.data)
        })
    }

    React.useEffect(function(){
        getData()
    },[])

    function handleRemove(item){
        console.log(item.id)
        axios.delete( `https://641b0e6d1f5d999a445a4c4d.mockapi.io/crud/${item.id}`)
        .then(() => {getData()})
    }

    function toLocal(item){
        localStorage.setItem("id", item.id)
        localStorage.setItem("name", item.name)
        localStorage.setItem("email", item.email)
    }

    const ele = data.map(function(item){
        return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <Link to='/update'>                          
                                <button onClick={() => toLocal(item)}>Edit</button>
                        </Link>
                    </td>
                    <td><button onClick={() => handleRemove(item)}>Remove</button></td>
                </tr>  
        )
    })
  return (
    <div className='read'>
        <h1>READ</h1>
        <table >    
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {ele}
            </tbody>
        </table>
        <Link to='/' >
            <button>Create a new entry  </button>
        </Link>

    </div>
  )
}

export default Read