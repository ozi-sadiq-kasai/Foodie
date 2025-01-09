import axios from 'axios'

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

    // Remove duplicates by `idMeal`
    const uniqueMeals = Array.from(
      new Map(fetchedMeals.map((meal) => [meal.idMeal, meal])).values()
    );

    // Extract relevant data from each meal
    const mealsWithExtractedData = uniqueMeals.map((meal) => {
      // Extract strMeasure properties that are not null or empty
      const measures = Object.keys(meal)
        .filter(key => key.startsWith('strMeasure') && meal[key]?.trim())
        .map(key => meal[key]);

      // Include the instructions if available
      const instructions = meal.strInstructions?.trim() || "No instructions available.";
      const image = meal.strMealThumb || "No image available.";

      return {
        idMeal: meal.idMeal,
        measures,
        instructions,
        image,
        header: meal.strMeal,
        youtube: meal.strYoutube,
        ingredients: Object.keys(meal)
          .filter(key => key.startsWith('strIngredient') && meal[key]?.trim())
          .map(key => meal[key]),
      };
    });

    return mealsWithExtractedData;
  } catch (err) {
    console.error('Error fetching meals:', err.message);
    throw new Error('Failed to fetch meals. Please try again later.');
  }
};
