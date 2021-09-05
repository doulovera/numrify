import './style.css'

export default function PhoneKey ({ value, handleClick }) {
  return (
    <button onClick={handleClick} value={value} className="phone__keys">
      {value}
    </button>
  )
}
