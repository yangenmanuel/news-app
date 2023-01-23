import NewsComponent from "../components/NewsComponent"
import PropTypes from 'prop-types'

export default function Search ({ newsApiKey }) {
  return <NewsComponent newsApiKey={newsApiKey} articles={[]}/>
}

export function getStaticProps () {
  const newsApiKey = process.env.API_KEY

  return {
    props: { newsApiKey }
  }
}

Search.propTypes = {
  newsApiKey: PropTypes.string.isRequired
}