import { useState } from "react"

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => {
    setCounter(counter + value)
    console.trace(value)
  }

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initialValue = 0)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}