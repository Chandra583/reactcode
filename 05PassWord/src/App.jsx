/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState, useCallback, useEffect } from 'react'

function App() {

  const [Length, setLength] = useState(0);
  const [generatedNumber, setgeneratedNumber] = useState(false);
  const [generatedChar, setgeneratedChar] = useState(false);
  const [passWord, setPassWord] = useState("");


  const generatedPassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (generatedNumber) {
      str += "0123456789"

    }
    if (generatedChar) {
      str += "!@#$%^&*()_+}{:>"
    }

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor((Math.random() * str.length + 1))

      pass += str.charAt(char)

    }
    setPassWord(pass)


  }, [Length, generatedChar, generatedNumber, setPassWord])

  useEffect(() => {
    generatedPassword()
  }, [Length, generatedChar, generatedNumber, generatedPassword])

  //here stePassword is a method and it also dependeies







  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md px-4 my-8 text-orange-600 bg-gray-700 '>
        <h1 className='text-white text-center mb-3'> Password generotor</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={passWord}
            className='outline-none w-full py-1 px-3 mb-3 rounded-lg'
            placeholder='password'
            readOnly
          />
          {/* <button className='bg-blue-400 text-white mx-1 px-3 py-0.5 shrink-0'>Copy</button> */}
        </div>
        <div className=' flex text-sm gap-x-2 pb-3'>
          <div className="flex items-center gap-x-1  ">
            <input
              type="range"
              min={5}
              max={30}
              value={Length}
              className=' cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length {Length} </label>
          </div>
          <div className="flex items-center gap-x-1  ">
            <input
              type="checkbox"
              defaultChecked={generatedChar}

              value={generatedChar}
              className=' cursor-pointer'
              onChange={() => { setgeneratedChar((prev) => !prev) }} />
            <label>char {generatedChar} </label>
          </div>
          <div className="flex items-center gap-x-1  ">
            <input
              type="checkbox"
              defaultChecked={generatedNumber}

              value={generatedNumber}
              className=' cursor-pointer'
              onChange={() => { setgeneratedNumber((prev) => !prev) }} />
            <label>Number {generatedChar} </label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
