import Register from './components/register/Register'
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home/Home'
import Login  from './components/login/Login'

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App