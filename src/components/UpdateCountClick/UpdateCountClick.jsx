function DisplayCountClick({ count, setCount }) {
    return (
        <button onClick={() => {
            setCount(count + 1); // actual value
            console.log(count); // prev value
        }}>Click me</button>
    );
}

export default DisplayCountClick;