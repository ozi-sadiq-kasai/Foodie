import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRandomMeals } from '../../components/fetchAllRecipes.js';
import styles from './Recipe.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import SmallNav from '../../components/smallNav/SmallNav.jsx';
import Modal from '../../components/modal/Modal.jsx';
import { ImYoutube2 } from 'react-icons/im';
import { HiOutlineRefresh } from 'react-icons/hi';
import { CiHeart } from 'react-icons/ci';
import axios from 'axios'

const Recipe = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchMeals = async () => {
    try {
      setLoading(true); // Start loading
      const fetchedMeals = await fetchRandomMeals(10); // Fetch 10 random meals
      if (!fetchedMeals || fetchedMeals.length === 0) {
        throw new Error('No meals fetched'); // Handle empty response
      }
      setMeals(fetchedMeals); // Update meals state
      setError(''); // Clear any previous errors
    } catch (error) {
      setError(error.message); // Update error state
      console.error('Error fetching meals:', error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleDetailsClick = (meal) => {
    setSelectedMeal(meal); // Set the selected meal to display in the modal
    setShowModal(true);
    console.log(meal);
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setSelectedMeal(null); // Reset selected meal
  };

  const handleFavouritesClick = async (meal) => {
    setSelectedMeal(meal); // Set the selected meal to display in the modal
    try {
      const response = await axios.post('http://localhost:4000/api/meals', meal);
      console.log('Meal saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving meal:', error.response?.data || error.message);
    }
  };
  
  

  if (loading) return <p>Loading meals...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error state

  return (
    <div className={styles.recipe}>
      <Navbar />
      <SmallNav />
      <button onClick={() => fetchMeals()} className={`${styles.button} btn`}>
        <HiOutlineRefresh />
      </button>
      <div className={styles.content}>
        {meals.map((meal) => (
          <div key={meal.idMeal} className={styles.card}>
            <div className={styles.imageHeader}>
              <img
                src={meal.image}
                alt={meal.header}
                className={`${styles.image} img`}
              />
              <h3>{meal.header}</h3>
            </div>
            <div className={styles.links}>
              <Link to={meal.youtube} target='_blank'>
                <ImYoutube2 color='red' size='48px' />
              </Link>
              <button
                onClick={() => handleDetailsClick(meal)}
                className={`${styles.button} btn`}>
                Details
              </button>
              <Link onClick={() => handleFavouritesClick(meal)}to='/favourite'>
                <CiHeart color='red' size='20px' />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {showModal && <Modal meal={selectedMeal} onClose={handleCloseModal} />}
    </div>
  );
};

export default Recipe;
