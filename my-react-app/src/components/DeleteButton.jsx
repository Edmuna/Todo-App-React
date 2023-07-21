import React from "react";

export default function DeleteButton({ onClick }) {
    const handleClick = () => {
        onClick();
    };

    return (
        <button onClick={handleClick}>Delete</button>
    );
}
