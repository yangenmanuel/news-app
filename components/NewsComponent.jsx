import { useState } from 'react'
import { useRouter } from 'next/router'

import Arrow from './Arrow'
import TrendsHeader from './TrendsHeader'
import SearchHeader from './SearchHeader'

import styles from '../styles/News.module.css'

export default function NewsComponent({ articles, apiKey }) {
  const [componentArticles, setComponentArticles] = useState(articles)
  const [search, setSearch] = useState('')
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

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(search)
  }

  return (
    <>
      {router.pathname === '/trends' 
        ? <TrendsHeader handleCountry={handleCountry}/> 
        : <SearchHeader handleSearch={handleSearch} handleSubmit={handleSubmit} />}

      {typeof componentArticles !== 'undefined' 
      ? componentArticles.map((item, i) => {
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
      : (
       <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#acacac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <p className={styles.text}>Nothing to show yet 🤷</p>
       </div> 
      )
      }
    </>
  )
}
