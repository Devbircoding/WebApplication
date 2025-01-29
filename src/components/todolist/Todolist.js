import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./todolist.scss";

function Todolist() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [items]);

  const handleInputChange = (e) => {
    const newUserInput = e.target.value;
    newUserInput.trim(); //eliminate empty spaces from extremes
    setUserInput(newUserInput);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newItems;
    if (userInput !== "") {
      newItems = [...items, userInput];
    }
    setItems(newItems);
    setUserInput("");
    const transformed_items = items.map((item) => `<p>${item}</p>`);
  };

  const removeItem = (item) => {
    const itemToBeRemoved = item;

    const newItems = items.filter((item) => {
      if (item !== itemToBeRemoved) {
        return item;
      }
    });
    setItems(newItems);
  };

  return (
    <center className="todolist">
      <h1 id="header">To-Do List</h1>
      <Form className="mainChunk">
        <Form.Group className="mb-3">
          <Form.Control
            value={userInput}
            type="text"
            placeholder="What needs doing?"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Enter
        </Button>
      </Form>
      <div className="checkbox-container">
        {items.map((item, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={item}
            onClick={() => {
              removeItem(item);
            }}
          />
        ))}
      </div>
    </center>
  );
}
export default Todolist;
