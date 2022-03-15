import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const display = document.getElementById('overlays');

const Modal = (props) => {
    /* Using react portals with dynamic expressions*/
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, display)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, display)}
    </Fragment>
};

export default Modal;