import { useState } from "react";

const Car = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red"
  });

  const handleClick = () => {
    setCar(prevState =>  {return {
        ...prevState, year: prevState.year++
    }});
  }

  const handleChange = (e) => {
    setCar(prevState =>  {return {
        ...prevState, year: e.target.value
    }});
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <input type="text" placeholder="Input year" onChange={handleChange}></input>
      <br/>
      <button onClick={handleClick}>Update Year by adding one</button>
    </>
  )
}

export default Car