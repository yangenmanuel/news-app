export const handleSubmit = async (e, setComponentArticles, search) => {
  // window.event.preventDefault();
  e.preventDefault();
  const res = await fetch(`api/getArticles?url=everything?q=${search}`)
  const newArticles = await res.json()

  setComponentArticles(newArticles.articles)
}

export const handleCountry = async (e, setComponentArticles) => {
  const res = await fetch(`/api/getArticles?url=top-headlines?country=${e.target.value}`)
  const newArticles = await res.json()

  setComponentArticles(newArticles.articles)
}