import React, { useState } from 'react'
import PhoneKey from '../PhoneKey'
import Backspace from '../Icons/Backspace'
import './style.css'

const KEYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0
]

export default function Cellphone ({ getVerifNumber }) {
  const [numbers, setNumbers] = useState([])

  const maxNumberLength = numbers.length >= 15

  const handleChangeInput = (event) => {
    if (maxNumberLength) return console.log('A')
    const getNumber = event.target.value
    const convertStringToArray = getNumber.split('')
    setNumbers(convertStringToArray)
  }

  const handleClick = (event) => {
    if (maxNumberLength) return
    const getNumber = event.target.value
    setNumbers([
      ...numbers,
      getNumber
    ])
  }

  const handleBackspace = () => {
    const lastItem = numbers.slice(0, numbers.length - 1)
    setNumbers(lastItem)
  }

  const InputFontSize = {
    fontSize: numbers.length <= 10 ? '2rem' : '1.4rem'
  }

  return (
    <>
      <label className="phone__input__container">
        <div style={{ width: '40px' }}></div>
        <input type="number" value={numbers.join('')} onChange={handleChangeInput} max="999999999999999" style={InputFontSize} />
        <button onClick={handleBackspace}><Backspace fill="#adacac" /></button>
      </label>
      <div className="phone__keys__container">
        {
          KEYS.map(key => (
            <PhoneKey key={key} value={key} handleClick={handleClick} />
          ))
        }
      </div>
      <div className="phone__buttons">
        <button className="phone__verify-number" onClick={() => getVerifNumber(numbers)}>Verify number</button>
      </div>
    </>
  )
}
