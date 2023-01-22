import NewsComponent from "../components/NewsComponent"

export default function Search ({ newsApiKey }) {
  return <NewsComponent newsApiKey={newsApiKey} articles={[]}/>
}

export function getStaticProps () {
  const newsApiKey = process.env.API_KEY

  return {
    props: { newsApiKey }
  }
}