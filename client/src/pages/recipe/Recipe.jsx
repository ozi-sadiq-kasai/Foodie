import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRandomMeals } from '../../components/fetchAllRecipes.js';
import styles from './Recipe.module.scss'
import Navbar from '../../components/navbar/Navbar.jsx';
import SmallNav from '../../components/smallNav/SmallNav.jsx';

const Recipe = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true); // Start loading
        const fetchedMeals = await fetchRandomMeals(5); // Await the async function
        if (!fetchedMeals || fetchedMeals.length === 0) {
          throw new Error('No meals fetched');
        }
        setMeals(fetchedMeals); // Set the meals state
        console.log(meals)
      } catch (error) {
        setError(error.message); // Set the error message
        console.error('Error fetching meals:', error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMeals();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) return <p>Loading meals...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error state

  return (
    <div className={styles.wrapper}>
      <Navbar />
     <SmallNav />
      {meals.map((meal) => (
        <div key={meal.idMeal} className={styles['wrapper__content']}>
         <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px' }} />
          <h3>{meal.strMeal}</h3>
          <p>{meal.strInstructions}</p>
          <Link to={meal.strYoutube} target='_blank'> Watch on Youtube</Link> 
          
        </div>
      ))}
    </div>
  );
};

export default Recipe;
