import Register from './pages/register/Register'
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home/Home'
import Login  from './pages/login/Login'
import Recipe  from './pages/recipe/Recipe'
import Starters from './pages/starters/Starters';

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/explore" element={<Recipe />} />
     <Route path="/starters" element={<Starters />} />
    </Routes>
  )
}

export default App