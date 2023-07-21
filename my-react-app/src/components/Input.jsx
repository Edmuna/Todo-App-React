import React from "react"

export default function Input({ value, onChange }) {

    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <input onChange={handleChange} value={value} />
    )
}