import classes from './MealsSummary.module.css';

const MealsSummary = () =>{
    return <section className={classes.summary}>
        <h2>Delicious Food!</h2>
        <p>
            Choose your favorite meal from our wide selection of available meals 
            and enjoy a delicious experience.
        </p>
        <p>
            All of our meals are cooked with high-quality ingredients with Island Mike's 
            favorite twist to bring the Island Vibes to you!
        </p>
    </section>
};

export default MealsSummary;