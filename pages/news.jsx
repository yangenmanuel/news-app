import News from '../components/News'

export default function Trends({ articles, apiKey }) {
  return <News articles={articles} apiKey={apiKey} />
}

// As first render whats new on users`s country
export async function getStaticProps() {
  const ipResponse = await fetch('https://ipinfo.io', {
    headers: {
      Authorization: `Bearer ${process.env.IPINFO_TOKEN}`,
    },
  })

  const { country } = await ipResponse.json()
  const query = `top-headlines?country=${country.toLowerCase()}`
  const apiKey = process.env.API_KEY

  const newsResponse = await fetch(`https://newsapi.org/v2/${query}`, {
    headers: {
      Authorization: apiKey,
    },
  })
  const { articles } = await newsResponse.json()

  return {
    props: { articles, apiKey},
  }
}
