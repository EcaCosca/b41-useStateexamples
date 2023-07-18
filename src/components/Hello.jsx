import Title from "react-titles/Title3"

const Hello = ({count, setCount}) => {

    const handleClick = () => setCount((count) => count + 1)
    
    return (
        <>
            <h1>Hello Batch 41</h1>
            <p>The count is now {count}</p>
            <button onClick={handleClick}>
                count in the child {count}
            </button>
            {/* <Title size="400" text1="Hello" text2="batch 41" open={true} /> */}
        </>
    )
}

export default Hello