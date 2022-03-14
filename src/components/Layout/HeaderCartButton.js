import Cart from './CartIcon.js';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props =>{
    return <button className={classes.button}>
        <span className={classes.icon}>
            <Cart />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>
};

export default HeaderCartButton;