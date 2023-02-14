export default async function getArticles (req, res) {
  const response = await fetch('https://newsapi.org/v2/everything?q=messi', {
    headers: {
      Authorization: process.env.API_KEY
    }
  })

  const { articles, totalResults } = await response.json()

  res.status(200).json({ articles, totalResults })
}