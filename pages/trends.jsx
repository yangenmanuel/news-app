import News from "../components/News"

export default function Trends({articles}) {
  return <News articles={articles}/>
}

// As first render whats new on users`s country
export async function getStaticProps(){
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=br', {
    headers: {
      Authorization: process.env.API_KEY
    }
  }) 
  const { articles } = await res.json()

  return {
    props: { articles,  }
  }
}