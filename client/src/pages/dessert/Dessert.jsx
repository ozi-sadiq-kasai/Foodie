import { fetchRecipes } from '../../components/fetchAllRecipes';
import { useState, useEffect } from 'react';
import styles from './../recipe/Recipe.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import SmallNav from '../../components/smallNav/SmallNav.jsx';
import Modal from '../../components/modal/Modal.jsx';
import { ImYoutube2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import axios from 'axios'


const Dessert = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true); // Start loading
        const fetchedBreakfast = await fetchRecipes('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');

        if (!fetchedBreakfast || fetchedBreakfast.length === 0) {
          throw new Error('No meals fetched');
        }
console.log('from meals',meals)
        setMeals(fetchedBreakfast.slice(0, 10)); // Set first 10 meals
      } catch (error) {
        setError(error.message); // Update error state
        console.error('Error fetching meals:', error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    // Call the async function inside useEffect
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className={styles.recipe}>
   <Navbar />
   <SmallNav />
   <h2>Dessert</h2>
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
  )
}

export default Dessert