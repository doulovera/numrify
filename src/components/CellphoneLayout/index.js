import './style.css'

export default function Cellphone ({ children }) {
  return (
    <div className="phone">
      <div className="phone__dock"></div>
      {children}
    </div>
  )
}
