import { useState } from "react";
import UrlInput from "./Input";
//import TodoItemList from "./TodoItemList";
import classes from "./TodoItem.module.css";

const TodoItem = () => {
  const [shortUrl, setShortUrl] = useState([]);

  const addItemHandler = (enteredText) => {
    setTodo((prevItem) => {
      const updatedItems = [...prevItem];
      updatedItems.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedItems;
    });
    // console.log(Todo)
  };

 


  return (
    <>
      <section className={classes.goals}>
        <UrlInput onAdd={addItemHandler} />
      </section>

      <section className={classes["goal-form"]}>{content}</section>
    </>
  );
};

export default TodoItem;
