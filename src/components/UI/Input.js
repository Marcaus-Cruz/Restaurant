import classes from './Input.module.css';

const Input = (props) =>{
    return <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* ... = spread operator -- all key value pairs in input are added (id, type, etc)*/}
            <input {...props.input}/>
        </div>
};

export default Input;