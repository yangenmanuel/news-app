import { useState } from 'react'
import { useRouter } from 'next/router'
// import useArticles from '../hooks/useArticles'

import PropTypes from 'prop-types'

import Arrow from './icons/Arrow'
import TrendsHeader from './TrendsHeader'
import SearchHeader from './SearchHeader'

import styles from '../styles/News.module.css'
import Message from './Message'

export default function NewsComponent({ articles }) {
  const [componentArticles, setComponentArticles] = useState(articles)
  const [search, setSearch] = useState('')
  const router = useRouter()
  
  const handleCountry = async (e) => {
    const res = await fetch(`/api/getArticles?url=top-headlines?country=${e.target.value}`)
    const newArticles = await res.json()

    setComponentArticles(newArticles.articles)
  }
    
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`api/getArticles?url=everything?q=${search}`)
    const newArticles = await res.json()

    setComponentArticles(newArticles.articles)
  }

  return (
    <>
      {router.pathname === '/trends' 
        ? <TrendsHeader handleCountry={handleCountry}/> 
        : <SearchHeader handleSearch={handleSearch} handleSubmit={handleSubmit} />}

      {componentArticles && componentArticles.length !== 0
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
      : <Message />
      }
    </>
  )
}

NewsComponent.propTypes = {
  newsApiKey: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
}