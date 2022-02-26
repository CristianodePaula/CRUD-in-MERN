import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function UpdateDelete() {

  const [ user, setUser ] = useState({ username: '', email: '', password: ''})
  const { username, email, password } = user
  const { id } = useParams()

  // READ ONE
  useEffect(() => {
    loadUser();
  },[])

  const loadUser = async() => {
    const res = await axios.get("/read/" + id)
    setUser(res.data)
  }

  //UPDATE
  const updateUser = async() => {
    axios.put("/update/" + id, user)
      alert("Usuário atualizado com sucesso")
  }

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  
    return (
        <div className='update_container'>
          <div className='box_update'>
            <h1>Editar Usuário</h1>
          <form>
              <label>Usuário</label>
              <input onChange={(e) => onValueChange(e)} name='username' value={username}/>
              <label>Email</label>
              <input onChange={(e) => onValueChange(e)} name='email' value={email}/>
              <label>Senha</label>
              <input onChange={(e) => onValueChange(e)} name='password' value={password}/>
              <Link to={'/'}> <button onClick={() => updateUser()}>Salvar</button> </Link>
              <Link to={'/'}> <button type="button" style={{background: 'grey'}}> Voltar </button> </Link>
            </form>
          </div>
        </div>
    )
}



