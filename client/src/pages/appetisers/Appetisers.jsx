import { fetchBreakfastMeals } from '../../components/fetchAllRecipes';
import { useState, useEffect } from 'react';



const Appetisers = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true); // Start loading
        const fetchedBreakfast = await fetchBreakfastMeals();

        if (!fetchedBreakfast || fetchedBreakfast.length === 0) {
          throw new Error("No meals fetched");
        }

        setMeals(fetchedBreakfast.slice(0, 10)); // Set first 10 meals
      } catch (error) {
        setError(error.message); // Update error state
        console.error("Error fetching meals:", error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    // Call the async function inside useEffect
    fetchMeals();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Breakfast Meals</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {meals.map((meal) => (
          <div key={meal.idMeal} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h2>{meal.strMeal}</h2>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{meal.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appetisers;
