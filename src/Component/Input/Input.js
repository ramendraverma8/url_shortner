import React, { useRef, useState} from "react";
import Button from "../UI/Button";
import classes from './Input.module.css'

const UrlInput = (props) => {
  //validity check
  const[isValid, setIsValid] = useState(true);
  
  //Using ref for inputs
  const EnteredInput = useRef(null);

  const formSubmitHandler = (event) =>{
    event.preventDefault()

    if (EnteredInput.current.value.trim().length === 0){
      alert('Please Enter a URL')
      setIsValid(false);
      return
    }
    props.onAdd(EnteredInput.current.value)
    document.getElementById("myForm").reset();

  }

  return (
    <form id = 'myForm' onSubmit ={formSubmitHandler}>
      <div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>
        <label> Type your URL </label>{" "}
        <input ref={EnteredInput} type="text"></input>
      </div>
      <div className={classes.button}>
        <br />
        <Button type='submit'> Shorten </Button>
      </div>
    </form>
  );
};

export default UrlInput;

