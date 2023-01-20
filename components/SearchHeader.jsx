import styles from '../styles/SearchHeader.module.css'

export default function SearchHeader () {
  return <div className={styles.header}>
    <h1>What you are interested in?</h1>
    <form>
      <input className={styles.input} type="text" placeholder='Look for something'/>
      <button type='submit'>🔎</button>
    </form>
  </div>
}