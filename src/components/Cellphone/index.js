import React, { useState } from 'react'
import PhoneKey from '../PhoneKey'
import './style.css'

const KEYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0
]

export default function Cellphone () {
  const [numbers, setNumbers] = useState([])

  const handleChange = (event) => {
    const getNumber = event.target.value
    const convertStringToArray = getNumber.split('')
    setNumbers(convertStringToArray)
  }

  const handleClick = (event) => {
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

  return (
    <div className="phone">
      <label className="phone__input__container">
        <input type="number" value={numbers.join('')} onChange={handleChange} max="999999999999999" /* 15 dígitos máximo */ />
        <button onClick={handleBackspace} value="<"> =</button>
      </label>
      <div className="phone__keys__container">
        {
          KEYS.map(key => (
            <PhoneKey key={key} value={key} handleClick={handleClick} />
          ))
        }
      </div>
      <div className="phone__buttons">
        <button>UwU</button>
      </div>
    </div>
  )
}
