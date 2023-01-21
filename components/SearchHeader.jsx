import { useRef, useEffect } from 'react'

import styles from '../styles/SearchHeader.module.css'
import MagnifyingGlass from './MagnifyingGlass'

export default function SearchHeader({ handleSearch, handleSubmit }) {
  const inputRef = useRef()  
  
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className={styles.header}>
      <h1>What you are interested in?</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <button type='submit' className={styles.btn}>
          <MagnifyingGlass />
        </button>
        <input
          ref={inputRef}
          onChange={handleSearch}
          className={styles.input}
          type='search'
          placeholder='Search for everything'
        />
      </form>
    </div>
  )
}