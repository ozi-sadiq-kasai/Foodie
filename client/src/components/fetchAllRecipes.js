import axios from 'axios';

export const fetchRandomMeals = async (count) => {
  try {

    const mealRequests = [];
    for (let i = 0; i < count; i++) {
      mealRequests.push(
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      );
    }

    const responses = await Promise.all(mealRequests);
    const fetchedMeals = responses.map((response) => response.data.meals[0]);

    // Optional: Remove duplicates by `idMeal`
    const uniqueMeals = Array.from(
      new Map(fetchedMeals.map((meal) => [meal.idMeal, meal])).values()
    );
    return uniqueMeals;
    // setMeals(uniqueMeals);
  } catch (err) {
    console.error('Error fetching meals:', err.message);
    // setError('Failed to fetch meals. Please try again later.');
  } 
};
