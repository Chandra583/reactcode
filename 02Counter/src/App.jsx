import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)


  const addValue = () => {
    if (counter >= 20) {
      alert("You have reached the limit")
    }
    else {
      setCounter(counter + 1)
      console.log(counter)
    }

  }
  const removeValue = () => {
    if (counter == 0) {
      alert("You can not go below zero")
    }
    else {
      setCounter(counter - 1)
      console.log(counter)
    }
  }

  return (
    <>
      <h1>welcome to my Shop</h1>
      <h2>Counterd values are {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>


    </>
  )
}

export default App
