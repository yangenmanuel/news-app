import styles from '../styles/Header.module.css'
import PropTypes from 'prop-types'
import { handleCountry } from '../lib/handlers'

export default function TrendsHeader ({ setComponentArticles }) {
  return (
    <div className={styles.header}>
      <h1>Discover what`s happening on your country</h1>
      <select className={styles.select} name='country' onChange={(e) => handleCountry(e, setComponentArticles)}>
        <option value='br'> Brazil</option>
        <option value='gb'>United Kingdom</option>
        <option value='us'>United States</option>
      </select>
    </div>
  )
}

TrendsHeader.propTypes = {
  setComponentArticles: PropTypes.func.isRequired
}