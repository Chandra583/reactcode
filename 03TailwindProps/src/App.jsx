// import { useState } from 'react'

import './App.css'
import Card from './Component/Card'

function App() {


  // let newObj = {
  //   name: "John",
  //   age: 30,
  //   city: "New York"
  // }

  // let newArr = [1, 2, 3, 4]


  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-2 mb-5' >TailwindCss</h1>
      <Card myName="Chandra" />
      <Card myName="shekar" btnText="click messs :)" />

    </>
  )
}

export default App
