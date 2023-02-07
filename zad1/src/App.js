import React, { useState } from "react";
import './App.css';

//Icons
import { SlMenu } from "react-icons/sl";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showMenu, setShowMenu] = useState(false)

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(0);
  const [updatedText, setUpdatedText] = useState("");

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  /* Adds a new item to the list array*/
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  /* Edit an item text after creating it. */
  function editItem(id, newText) {
    // Get the current item
    const currentItem = items.filter((item) => item.id === id);

    // Create a new item with same id
    const newItem = {
      id: currentItem.id,
      value: newText,
    };

    deleteItem(id);

    // Replace item in the item list
    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }

  return (
    <div>
      <header>
        <button type="button" onClick={() => setShowMenu(!showMenu)}>
          <SlMenu />
        </button>
        {showMenu && 
          <nav>
            <ul>
              <li>
                <p>CRUD Operations</p>
                <ul>
                  <li>
                    <a onClick={() => handleMenuClick("create")}>Create</a>
                  </li>
                  <li>
                    <a onClick={() => handleMenuClick("read")}>Read</a>
                  </li>
                  <li>
                    <a onClick={() => handleMenuClick("update")}>Update</a>
                  </li>
                  <li>
                    <a onClick={() => handleMenuClick("delete")}>Delete</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>}
      </header>
      <div className="app">
      {/* 1. Header  */}
      <h1>My Todo List</h1>

      {/* 2. Add new item (input) */}
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      {/* Add (button) */}
      <button onClick={() => addItem()}>Add</button>

      {/* 3. List of todos (unordered list) */}
      <ul className={currentPage === "create" ? "display-none" : null}>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <button
                  className={currentPage === "delete" ? "delete-button" : "display-none"}
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>
              </li>

              {/* {currentPage === "update" && showEdit == item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : null} */}
              <div className={currentPage === "update" ? null : "display-none"}>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                </div>
            </div>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default App;