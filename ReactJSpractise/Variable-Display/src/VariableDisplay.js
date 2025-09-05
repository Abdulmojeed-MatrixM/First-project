import React, { useState } from 'react';
import './VariableDisplay.css'; // Import CSS

// List component with delete functionality
function ListDisplay({ items, onDelete }) {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
          <button className="delete-btn" onClick={() => onDelete(index)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

function VariableDisplay() {
  // Variables
  let stringVar = "Welcome to React";
  let numberVar = 42;
  let objectVar = { name: "AbduLLah", age: 35, role: "Software Developer" }; 

  // ✅ State variables
  const [booleanVar, setBooleanVar] = useState(true); // For toggling
  const [arrayVar, setArrayVar] = useState(["React", "JSX", "Variables"]); // for dynamic Array
  const [newItem, setNewItem] = useState(""); // for new array item input

  // Conditional statement
  if (Math.random() > 0.5) {
    stringVar = "Welcome to advanced React 🚀";
  }

  // Function returning JSX
  function renderCustomMessage() {
    return <p className="function-msg">This message is coming from a function!</p>;
  }

  // Function to add new array item
  const addItem = () => {
    if (newItem.trim() !== "") {
      setArrayVar([...arrayVar, newItem]);
      setNewItem("");
    }
  };

  // Function to delete an array item
  const deleteItem = (index) => {
    setArrayVar(arrayVar.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">Variable Display</h1>

      {/* String */}
      <h2>String:</h2>
      <p>{stringVar}</p>

      {/* Number */}
      <h2>Number:</h2>
      <p>{numberVar}</p>

      {/* Boolean with toggle button */}
      <h2>Boolean:</h2>
      <p>{booleanVar.toString()}</p>
      <button className="btn" onClick={() => setBooleanVar(!booleanVar)}>
        Toggle Boolean
      </button>

      {/* Array with input, add button, and delete functionality */}
      <h2>Array:</h2>
      <p>{arrayVar.join(", ")}</p>
      <h3>Array as a list:</h3>
      <ListDisplay items={arrayVar} onDelete={deleteItem} />

      <div className="array-input">
        <input
          type="text"
          value={newItem}
          placeholder="Add new item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn" onClick={addItem}>Add Item</button>
      </div>

      {/* Object */}
      <h2>Object:</h2>
      <p><strong>Name:</strong> {objectVar.name}</p>
      <p><strong>Age:</strong> {objectVar.age}</p>
      <p><strong>Role:</strong> {objectVar.role}</p>

      {/* Function call */}
      <h2>Function Output:</h2>
      {renderCustomMessage()}
    </div>
  );
}

export default VariableDisplay;
