import Register from './pages/register/Register'
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home/Home'
import Login  from './pages/login/Login'
import Recipe  from './pages/recipe/Recipe'
import Starters from './pages/starters/Starters';
import Appetisers from './pages/appetisers/Appetisers';
import Dessert from './pages/dessert/Dessert';
import Main from './pages/main/Main';
import Side from './pages/side/Side';

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/recipes" element={<Recipe />} />
     <Route path="/starters" element={<Starters />} />
     <Route path="/main" element={<Main />} />
     <Route path="/side" element={<Side />} />
     <Route path="/dessert" element={<Dessert />} />
     <Route path="/appetisers" element={<Appetisers />} />
    </Routes>
  )
}

export default App