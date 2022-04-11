import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  //get meals from database upon page load
  useEffect(() => {
    const fetchMeals = async () => {
      //returns promise --> use await
      const response = await fetch(
        "https://react-resty-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].desc,
          price: responseData[key].price,
        });
      } //for loop

      //changing meals state to loaded meals from DB
      setMeals(loadedMeals);
    }; //fetchMeals

    //call fetch meals upon load
    fetchMeals();
  }, []);

  //Helper constant --> map js elements to jsx elements
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>
        <Card>{mealsList}</Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
