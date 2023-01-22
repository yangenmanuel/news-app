import NewsComponent from '../components/NewsComponent'

export default function Trends({ articles, newsApiKey }) {
  return <NewsComponent articles={articles} newsApiKey={newsApiKey}/>
}

// As first render whats new on users`s country
export async function getStaticProps() {
  const newsApiKey = process.env.API_KEY
  const ipInfoToken = process.env.IPINFO_TOKEN

  const ipResponse = await fetch('https://ipinfo.io', {
    headers: {
      Authorization: `Bearer ${ipInfoToken}`,
    },
  })

  const { country } = await ipResponse.json()
  const query = `top-headlines?country=${country.toLowerCase()}`

  const newsResponse = await fetch(`https://newsapi.org/v2/${query}`, {
    headers: {
      Authorization: newsApiKey,
    },
  })
  const { articles } = await newsResponse.json()

  return {
    props: { articles, newsApiKey },
  }
}
