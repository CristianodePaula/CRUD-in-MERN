import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReadDelete from './pages/Read_Delete/Read_Delete'
import Create from './pages/Create/Create'
import Update from './pages/Update/Update'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReadDelete />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

