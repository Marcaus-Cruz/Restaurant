import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  //used to grab meals from db instead of using dummy data
  const [meals, setMeals] = useState([]);
  //when querying for meals
  const [isLoading, setIsLoading] = useState(false);
  //
  const [httpError, setHttpError] = useState(false);

  //get meals from database upon page load
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      //returns promise --> use await
      const response = await fetch(
        "https://react-resty-default-rtdb.firebaseio.com/meals.json"
      );

      //if response is not okay
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

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
      setIsLoading(false);
    }; //fetchMeals

    //call fetch meals upon load, then to return promise, catch an error if any
    fetchMeals()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

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
