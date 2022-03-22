import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  // use the useSelector hooks from react-redux to access the state
    const counter = useSelector((state)=> {return state.counter})
  return (
    <div>
        <p>{counter}</p>
    </div>
  )
}

export default Counter