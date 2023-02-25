import { useRef } from 'react'
import useSearch from '../hooks/useSearch'

import PropTypes from 'prop-types'
import { handleSubmit } from '../lib/handlers'

import styles from '../styles/Header.module.css'
import MagnifyingGlass from './icons/MagnifyingGlass'

export default function SearchHeader({ setComponentArticles }) {
  const inputRef = useRef()
  const isFirstRender = useRef(true)
  const { search, handleSearch, error } = useSearch({ isFirstRender, inputRef })

  return (
    <div className={styles.header}>
      <h1>What you are interested in?</h1>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e, setComponentArticles, search)}>
        <button type='submit' className={styles.btn}>
          <MagnifyingGlass />
        </button>
        <input
          value={search}
          ref={inputRef}
          onChange={handleSearch}
          className={styles.input}
          type='search'
          placeholder='Search for everything'
        />
      </form>
      {error && <p style={{color:'red', opacity:.5, fontSize: '1.3rem'}}>{error}</p>}
    </div>
  )
}

SearchHeader.propTypes = {
  setComponentArticles: PropTypes.func.isRequired
}