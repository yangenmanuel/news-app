import { useState } from 'react'
import { useRouter } from 'next/router'

import Arrow from './Arrow'
import TrendsHeader from './TrendsHeader'
import SearchHeader from './SearchHeader'

import styles from '../styles/News.module.css'

export default function NewsComponent({ articles, apiKey }) {
  const [componentArticles, setComponentArticles] = useState(articles)
  const router = useRouter()
  
  const handleCountry = async (e) => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${e.target.value}`, {
        headers: {
          Authorization: apiKey,
        },
      }
    )
    const newArticles = await res.json()
    setComponentArticles(newArticles.articles)
  }

  return (
    <>
      {router.pathname === '/trends' ? <TrendsHeader handleCountry={handleCountry}/> : <SearchHeader/>}

      {componentArticles === 'undefined' ?
        componentArticles.map((item, i) => {
        return (
            <div key={i} href={item.url} className={styles.container}>
              <h2 className={styles.title}>{item.title}</h2>
              {/* As the app has dynamic URLs for each image, it`s impossible to use the next/image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {item.urlToImage &&  <img
                  className={styles.img}
                  src={item.urlToImage}
                  alt={item.source.name}
                />
              }
              <div className={styles.textContainer}>
                <p className={styles.txt}>{item.description}</p>
                <a
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  className={styles.btn}
                >
                  <Arrow />
                </a>
              </div>
            </div>
          )

        })
      : <h1>Nothing to show</h1>
      }
    </>
  )
}
