import { useEffect, useState } from "react";
import MealItem from "./mealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchMeals();
  }, []);
  
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
}
