import { useEffect, useRef, useState } from 'react'
import './App.css'
import CellphoneLayout from './components/CellphoneLayout'
import EnterPhone from './components/EnterPhone'
import Output from './components/Output'

function App () {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const refScroll = useRef(null)

  useEffect(() => {
    refScroll.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [data])

  const getVerifNumber = (phoneNumber) => {
    setIsLoading(true)
    const stringPhone = phoneNumber.join('')

    if (!stringPhone) return setIsLoading(false)

    try {
      fetch(`https://api.veriphone.io/v2/verify?phone=%2B${stringPhone}&key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(response => {
          const {
            status,
            phone,
            phone_valid,
            country,
            country_code,
            phone_type,
            international_number,
            local_number,
            carrier
          } = response

          setData([
            ...data,
            {
              status,
              phone,
              phone_valid,
              country,
              country_code,
              phone_type,
              international_number,
              local_number,
              carrier
            }
          ])

          setIsLoading(false)
        })
    } catch (err) {
      setIsLoading(false)
      console.error(err)
    }
  }

  return (
    <div className="App">
      <section style={{ marginTop: '10px' }}>
        <CellphoneLayout>
          <EnterPhone getVerifNumber={getVerifNumber} isLoading={isLoading} />
        </CellphoneLayout>
      </section>
      <section style={{ margin: '20px 0 15px' }}>
        <CellphoneLayout>
          <Output data={data} refScroll={refScroll} />
        </CellphoneLayout>
      </section>
    </div>
  )
}

export default App
