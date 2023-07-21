
export default function Button({ children, onClick }) {

    const handleClick = () => {
        onClick()
    }

    return (
        <button onClick={handleClick}>Click</button>
    )
}