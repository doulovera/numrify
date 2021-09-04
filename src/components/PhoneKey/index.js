export default function PhoneKey ({ value, handleClick }) {
  return (
    <button onClick={handleClick} value={value}>
      {value}
    </button>
  )
}
