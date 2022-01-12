import { useState } from 'react'

import styles from './WeatherWidget.module.css'

const WeatherWidget = ({ loading, data: { location, current, forecast } }) => {
  const [tempType, setTempType] = useState('c')

  if (loading) return <div>Loading data...</div>

  const { hour: hours } = forecast.forecastday[0]

  return (
    <div className={styles.widget}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h2>{current.condition.text}</h2>
          <p>{location.name}</p>
        </div>
        <img src={current.condition.icon} alt="" />
        <div className={styles.buttons}>
          <button onClick={() => setTempType('c')}>C°</button>
          <button onClick={() => setTempType('f')}>F°</button>
        </div>
      </div>

      <div className={styles.mainInfo}>
        {hours.map((hour, i) => {
          if (i % 2 !== 0 && Date.parse(hour.time) >= Date.now())
            return (
              <div key={hour.time_epoch} className={styles.mainInfoItem}>
                <div>{hour.time.split(' ')[1]}</div>
                <div>
                  <img src={hour.condition.icon} alt={hour.condition.text} title={hour.condition.text} />
                </div>
                <div>{tempType === 'c' ? `${hour.temp_c}°C` : `${hour.temp_f}°F`}</div>
              </div>
            )
        })}
      </div>

      <div className={styles.currentInfo}>
        <p>Humidity: {current.humidity}</p>
        <p>Wind: {current.wind_kph} KPH/S</p>
      </div>
    </div>
  )
}

export default WeatherWidget
