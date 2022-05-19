import { useState, useEffect } from 'react'
import './update.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function UpdateDelete() {

  const [user, setUser] = useState({ username: '', email: '', password: '' })
  const { username, email, password } = user
  const { id } = useParams()

  useEffect(() => {
    const loadUser = async () => {
      const res = await axios.get("/read/" + id)
      setUser(res.data)
    }
    loadUser()
  }, [id])

  const updateUser = async () => {
    try {
      axios.put("/update/" + id, user)
      alert("Usuário atualizado com sucesso")
    } catch (err) { }
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className='update_container'>
      <div className='box_update'>
        <h1>Editar Usuário</h1>
        <form>
          <label>Usuário</label>
          <input
            onChange={(e) => onValueChange(e)}
            name='username'
            value={username}
          />
          <label>Email</label>
          <input
            onChange={(e) => onValueChange(e)}
            name='email'
            value={email}
          />
          <label>Senha</label>
          <input
            onChange={(e) => onValueChange(e)}
            name='password'
            value={password}
          />
          <Link to={'/'}>
            <button onClick={() => updateUser()}>Salvar</button>
          </Link>
          <Link to={'/'}>
            <button
              type="button"
              style={{ background: 'green'}}
            > Voltar </button>
          </Link>
        </form>
      </div>
    </div>
  )
}