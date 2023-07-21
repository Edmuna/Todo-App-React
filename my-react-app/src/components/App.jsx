import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TodoList from "./TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingTodoIndex, setEditingTodoIndex] = useState(-1);
  const [editedTodoValue, setEditedTodoValue] = useState(""); // Lifted state up

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleButtonClick = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  const handleDeleteButton = (id) => {
    const updatedList = todoList.filter((todo, index) => index !== id);
    setTodoList(updatedList);
  };

  const handleEditButton = (id) => {
    setEditingTodoIndex(id);
    setEditedTodoValue(todoList[id]);
  };

  const handleSaveButton = () => {
    if (editingTodoIndex !== -1) {
      const updatedList = [...todoList];
      updatedList[editingTodoIndex] = editedTodoValue;
      setTodoList(updatedList);
      setEditingTodoIndex(-1);
    }
  };

  return (
    <div className="App">
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>Click</Button>
      <TodoList
        todoList={todoList}
        onDelete={handleDeleteButton}
        onEdit={handleEditButton}
        onSave={handleSaveButton}
        editingTodoIndex={editingTodoIndex}
        editedTodoValue={editedTodoValue} // Pass editedTodoValue as prop
        setEditedTodoValue={setEditedTodoValue} // Pass setEditedTodoValue as prop
      />
    </div>
  );
}

export default App;
