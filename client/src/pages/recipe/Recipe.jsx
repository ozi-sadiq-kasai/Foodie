import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRandomMeals } from '../../components/fetchAllRecipes.js';
import styles from './Recipe.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import SmallNav from '../../components/smallNav/SmallNav.jsx';
import Modal from '../../components/modal/Modal.jsx';

const Recipe = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [showModal, setShowModal] = useState(false)

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


  const handleDetailsClick = (meal) => {
    setSelectedMeal(meal); // Set the selected meal to display in the modal
    setShowModal(true);
    console.log(meal)
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Close the modal
    setSelectedMeal(null); // Reset selected meal
  };

  if (loading) return <p>Loading meals...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error state

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <SmallNav />
      <button>Refresh</button>
      <div className={styles['wrapper__content']}>
      
        {meals.map((meal) => (
          <div key={meal.idMeal} className={styles['wrapper__card']}>
            <div className={styles['wrapper__header']}>
              <img src={meal.image} alt={meal.header} className={`${styles['wrapper__image']} img`}/>
              <h3>{meal.header}</h3>
            </div>
          <Link to={meal.youtube} target="_blank">Watch on Youtube</Link>
          <button onClick={() => handleDetailsClick(meal)}>Details</button> {/* Show the modal when clicked */}
          </div>
        ))}
      </div>
      {showModal  && (
        <Modal meal={selectedMeal} onClose={handleCloseModal}/>
      )}
    </div>
  );
};

export default Recipe;
