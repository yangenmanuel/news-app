import NewsComponent from '../components/NewsComponent'

export default function Trends({ articles }) {
  return <NewsComponent articles={articles} />
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

  const newsResponse = await fetch(`https://newsapi.org/v2/${query}`, {
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
  const { articles } = await newsResponse.json()

  return {
    props: { articles },
  }
}
