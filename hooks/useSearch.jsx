import { useState, useEffect } from "react"

export default function useSearch ({ isFirstRender, inputRef }) {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

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

  return { search, handleSearch, error }
}