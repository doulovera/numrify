import './style.css'
import GoBack from '../Icons/GoBack'
import { Fragment } from 'react'

export default function Output ({ data, refScroll }) {
  return (
    <>
      <div className="output__profile">
        <span className="output__go-back">
          <GoBack fill="#278afc" />
        </span>
        <div className="output__contact">
          <img src="https://avatars.githubusercontent.com/u/42481580?v=4" alt="@doulovera on twitter and github!" width="35px" />
          <a href="https://doulovera.vercel.app/" target="_blank" rel="noreferrer">Douglas Lovera {'>'}</a>
        </div>
      </div>
      <div className="output__messages">
        {
          data.map(({ status, phone, phone_valid, country, country_code, phone_type, international_number, local_number, carrier }, index) => {
            if (status !== 'success') return <div key={index} className="phone__message">⚠️ An error has ocurred</div>

            if (!phone_valid) return <div key={index} className="phone__message">🔴 Is not Valid</div>

            return <div key={index} className="phone__message">
                      <p>{ phone_valid && '🟢 Is Valid' }</p>
                      <p>🏴 {country} ({country_code})</p>
                      <p>☎️ {phone_type}</p>
                      <p>🌐 {international_number}</p>
                      <p>📞 {local_number}</p>
                      <p>🗣️ {carrier}</p>
                    </div>
          })
        }
        <span ref={refScroll}></span>
      </div>
      <div className="output__text" style={{ height: '25px' }}></div>
    </>
  )
}
