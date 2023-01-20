import News from "../components/news"

export default function Search ({apiKey}) {
  return <News apiKey={apiKey}></News>
}

export async function getStaticProps() {
  const apiKey = process.env.API_KEY

  return {
    props: {
      apiKey
    }
  }
}