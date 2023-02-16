import { useState, useEffect } from "react"

export default function useArticles (url) {
  const [articles, setArticles] = useState({})

  useEffect(() => {
    fetch(`/api/getArticles?url=${encodeURIComponent(url)}`)
      .then(res => res.json())
      .then(res => setArticles(res))
  }, [url])

  return { art: articles }
}
