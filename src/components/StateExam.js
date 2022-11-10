import React from 'react'
import react,{useState} from 'react'

const StateExam = () => {
  const [car , setCar] = useState({
    model:"mustang",
    brand: "ford",
    color: "red",
    year: '1989'
  })
  const changeBrand = () => {
    setCar (previousState => {
        return {...previousState, brand: "BMW"}
    });
  } 
 

  return (
    <div>
    <p>{car.brand}</p>
    <p>it is {car.model} {car.color} {car.year}</p>  
     
    </div>
  )
}

export default StateExam
