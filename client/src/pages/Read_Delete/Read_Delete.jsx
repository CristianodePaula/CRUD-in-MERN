import { useState, useEffect } from 'react'
import './read_delete.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function CreateRead() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const readUser = async () => {
      const res = await axios.get("/read")
      setUsers(res.data)
    }
    readUser()
  }, [users])

  function deleteItem(id) {
    try {
      axios.delete("/delete/" + id)
      alert("Usuário deletado com sucesso")
    } catch (err) { }
  }

  return (
    <div className='read_delete'>
      <div className='box_read_delete'>
        <h1>Lista de Usuários</h1>
        <Link to='/create'>
          <button
            type="button"
            className='btnCreate'
          > Novo Usuário </button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Senha</th>
              <th>Alterar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <div className='btn_read_create'>
                    <Link to={`/edit/${user._id}`}>
                      <button
                        type='button'
                        className='btnEdit'
                      > Editar </button>
                    </Link>
                    <button
                      onClick={() => deleteItem(user._id)}
                      type="button"
                      className='btnDelete'
                    > Excluir </button>
                  </div>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}