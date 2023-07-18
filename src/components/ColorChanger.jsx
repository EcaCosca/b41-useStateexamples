import {useState} from "react"

const ColorChanger = () => {
    const [color, setColor] = useState('red')

    const handleClick = () => {
        color == "red" ? setColor('black') : setColor('red') 
    }

    const handleClickGreen = () => {
        color == "red" ? setColor('green') : setColor('Green') 
    }

    return (
        <>
            <h2 style={{backgroundColor:color}}>My favorite color is {color}</h2>
            <button onClick={handleClick}>Change color to {color == "red" ? "black" : "red"}</button>
            <button onClick={handleClickGreen}>This one does not change color to black</button>
        </>
    )
}

export default ColorChanger