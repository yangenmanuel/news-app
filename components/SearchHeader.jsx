import styles from '../styles/SearchHeader.module.css'

export default function SearchHeader() {
  return (
    <div className={styles.header}>
      <h1>What you are interested in?</h1>
      <form className={styles.formContainer}>
        <button type='submit' className={styles.btn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-search'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#ffffff'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <circle cx='10' cy='10' r='7' />
            <line x1='21' y1='21' x2='15' y2='15' />
          </svg>
        </button>
        <input
          className={styles.input}
          type='search'
          placeholder='Search for everything'
        />
      </form>
    </div>
  )
}