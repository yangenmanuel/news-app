import NewsComponent from '../components/NewsComponent'
import PropTypes from 'prop-types'

export default function Trends({ articles }) {
  return <NewsComponent articles={articles} />
}

// As first render whats new on users`s country
export async function getStaticProps() {
  const newsApiKey = process.env.API_KEY

  const countryResponse = await fetch(`http://localhost:3000/api/getCountry`)
  const { country } = await countryResponse.json()

  const url = `top-headlines?country=${country.toLowerCase()}`

  const newsResponse = await fetch(`http://localhost:3000/api/getArticles?url=${encodeURIComponent(url)}`, {
    headers: {
      Authorization: newsApiKey,
    },
  })
  const { articles } = await newsResponse.json()

  return {
    props: { articles, newsApiKey },
  }
}

Trends.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
}