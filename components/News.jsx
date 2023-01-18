import { useState } from 'react'
import Arrow from './Arrow'

import styles from '../styles/News.module.css'

export default function News({ articles, apiKey, country }) {
  const [componentArticles, setComponentArticles] = useState(articles)
  const [componentCountry, setComponentCountry] = useState(country)
  const [search, setSearch] = useState('')
  
  const handleCountry = async (e) => {
    setComponentCountry(e.target.value)
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${e.target.value}`, {
      headers: {
        Authorization: apiKey
      }
    })
    const newArticles = await res.json()
    setComponentArticles(newArticles.articles)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`https://newsapi.org/v2/everything?language=pt&q=${search}`, {
      headers: {
        Authorization: apiKey
      }
    })
    const newArticles = await res.json()
    setComponentArticles(newArticles.articles)
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="country">Country: </label>
          <select className={styles.select} name="country" onChange={handleCountry}>
            <option value="br"> Brazil</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
          </select>
        </div>

        <div className={styles.searchContainer}>
          <input type="text" onChange={(e) => setSearch(e.target.value)}/>
          <button type="submit">Search</button>
        </div>
      </form>
     
      {componentArticles.length > 0 && componentArticles.map((item, i) => {
        return (
          <div key={i} href={item.url} className={styles.container}>
            <h2 className={styles.title}>{item.title}</h2>
            {/* As the app has dynamic URLs for each image, it`s impossible to use the next/image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {item.urlToImage && <img
                className={styles.img}
                src={item.urlToImage}
                alt={item.source.name}
              />
            }
            <div className={styles.textContainer}>
              <p className={styles.txt}>{item.description}</p>
              <a href={item.url} className={styles.btn}>
                <Arrow />  
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}