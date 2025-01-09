import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRandomMeals } from '../../components/fetchAllRecipes.js';
import styles from './Recipe.module.scss';
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
        const fetchedMeals = await fetchRandomMeals(10); // Await the async function
        if (!fetchedMeals || fetchedMeals.length === 0) {
          throw new Error('No meals fetched');
        }
        setMeals(fetchedMeals); // Set the meals state
      } catch (error) {
        setError(error.message); // Set the error message
        console.error('Error fetching meals:', error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMeals();
  }, []);

  if (loading) return <p>Loading meals...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error state

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <SmallNav />
      <button>Refresh</button>
      {meals.map((meal) => (
        <div key={meal.idMeal} className={styles['wrapper__content']}>
          <img src={meal.image} alt={meal.header} style={{ width: '100px' }} />
          <h3>{meal.header}</h3>
          <p>{meal.instructions}</p>
          <ul>
            {meal.measures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
          <ul>
            {meal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <Link to={meal.youtube} target="_blank">Watch on Youtube</Link>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
