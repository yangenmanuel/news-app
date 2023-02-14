import { useState, useEffect } from "react"

export default function useArticles () {
  const [articles, setArticles] = useState({})

  useEffect(() => {
    fetch('/api/getArticles')
      .then(res => res.json())
      .then(res => setArticles(res))
  }, [])

  return { art: articles }
}
