import NewsComponent from '../components/NewsComponent'
import PropTypes from 'prop-types'

export default function Trends({ articles }) {
  return <NewsComponent articles={articles} />
}

// As first render whats new on users`s country
export async function getStaticProps() {
  const countryResponse = await fetch('https://ipinfo.io', {
    headers: {
      Authorization: `Bearer ${process.env.IPINFO_TOKEN}`,
    },
  })
  const { country } = await countryResponse.json()

  const url = `top-headlines?country=${country.toLowerCase()}`

  const newsResponse = await fetch(`https://newsapi.org/v2/${decodeURIComponent(url)}`, {
    headers: {
      Authorization: process.env.API_KEY
    },
  })
  const { articles } = await newsResponse.json()

  return {
    props: { articles },
  }
}

Trends.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
}