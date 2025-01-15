import Register from './pages/register/Register'
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home/Home'
import Login  from './pages/login/Login'
import Recipe  from './pages/recipe/Recipe'
import Chicken from './pages/chicken/Chicken';
import Breakfast from './pages/breakfast/Breakfast';
import Dessert from './pages/dessert/Dessert';
import Beef from './pages/beef/Beef';
import Vegetarian from './pages/vegetarian/Vegetarian';

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/random" element={<Recipe />} />
     <Route path="/chicken" element={<Chicken />} />
     <Route path="/vegetarian" element={<Vegetarian />} />
     <Route path="/beef" element={<Beef />} />
     <Route path="/dessert" element={<Dessert />} />
     <Route path="/breakfast" element={<Breakfast />} />
    </Routes>
  )
}

export default App