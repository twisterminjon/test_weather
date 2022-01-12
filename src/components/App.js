import { useState, useEffect } from 'react'
import axios from 'axios'

import WeatherWidget from './WeatherWidget'

const App = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('http://api.weatherapi.com/v1/forecast.json?key=698dc13c77094cf187695058201212&q=London&days=1')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
  }, [])

  console.log(data)

  return (
    <div style={{ width: '90vw', margin: '0 auto' }}>
      <h2>Weather Widget</h2>
      <WeatherWidget loading={loading} data={data} />
    </div>
  )
}

export default App
