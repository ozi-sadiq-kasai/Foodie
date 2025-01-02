import Register from './components/register/Register'
import { Routes, Route } from 'react-router-dom'; 
import Home from './components/home/Home'

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App