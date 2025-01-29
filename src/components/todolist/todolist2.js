import "./todolist.scss";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Todolistredo() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    const newUserInput = e.target.value;
    newUserInput.trim();
    setUserInput(newUserInput);
  };

  const handleClickForUse = (e) => {
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
        <Button variant="primary" type="submit" onClick={handleClickForUse}>
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
export default Todolistredo;
