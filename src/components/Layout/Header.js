import { Fragment } from "react";
import headerImage from '../../assets/islandMikesGrill.jpg';
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
        <header className = {classes.header}>
            <h1>Island Mike's Grill</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={headerImage} alt='Ribs on the Rack' />
        </div>
    </Fragment>
};

export default Header;