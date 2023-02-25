import { useRef, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { handleSubmit } from '../lib/handlers'

import styles from '../styles/Header.module.css'
import MagnifyingGlass from './icons/MagnifyingGlass'

export default function SearchHeader({ setComponentArticles }) {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const inputRef = useRef()
  const isFirstRender = useRef(true)
  
  const handleSearch = (e) => {
    const newSearch = e.target.value
    if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
  }

  useEffect(() => {
    inputRef.current.focus()
    // Do not show error of invalid search at first render 
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('Please provide a valid search')
      return
    }
      setError(null)
  }, [search])

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