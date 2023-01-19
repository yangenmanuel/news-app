import styles from '../styles/TrendsHeader.module.css'

export default function TrendsHeader ({handleCountry}) {
  return (
    <div className={styles.header}>
      <h1>Discover what`s happening on your country</h1>
      <select className={styles.select} name='country' onChange={handleCountry}>
        <option value='br'> Brazil</option>
        <option value='gb'>United Kingdom</option>
        <option value='us'>United States</option>
      </select>
    </div>
  )
}