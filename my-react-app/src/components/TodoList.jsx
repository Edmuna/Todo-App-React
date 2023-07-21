import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

export default function TodoList({
    todoList,
    onDelete,
    onEdit,
    onSave,
    editingTodoIndex,
    editedTodoValue,
    setEditedTodoValue, // Receive setEditedTodoValue as prop
}) {
    return (
        <ul>
            {todoList.map((todo, id) => (
                <li key={id}>
                    {editingTodoIndex === id ? (
                        <>
                            <input
                                type="text"
                                value={editedTodoValue}
                                onChange={(e) => setEditedTodoValue(e.target.value)} // Use setEditedTodoValue to update the edited value
                            />
                            <SaveButton onClick={onSave} />
                        </>
                    ) : (
                        <>
                            {todo} <EditButton onClick={() => onEdit(id)} />
                            <DeleteButton onClick={() => onDelete(id)} />
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}
