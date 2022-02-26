import '../App.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Create() {

  const [user, setUser] = useState("")  
  const { username, email, password } = user

  // CREATE
  function addUser() { 
    const newUser =  {username, email, password}
    axios.post("/create", newUser)
      alert("Usuário cadastrado com sucesso")

    setUser({ username: "", email: "", password: "" }) 
  }

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
     <div className='create_container'> 
      <div className='box_create'>
      <h1>Registrar Usuário</h1>
      <form>
        <label>Usuário</label>
        <input onChange={(e) => onValueChange(e)} name='username' value={username}/>
        <label>Email</label>
        <input onChange={(e) => onValueChange(e)} name='email' value={email}/>
        <label>Senha</label>
        <input onChange={(e) => onValueChange(e)} name='password' value={password}/>
        <Link to={'/'}> <button onClick={addUser}> Registrar </button> </Link>
        <Link to={'/'}> <button type="button" style={{background: 'grey'}}> Voltar </button> </Link>
      </form>
      </div>
    </div>
  )
}
