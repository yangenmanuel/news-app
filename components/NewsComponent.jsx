import { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import TrendsHeader from './TrendsHeader'
import SearchHeader from './SearchHeader'
import Message from './Message'
import Article from './Article'

import { handleSubmit, handleCountry } from '../lib/handlers'
export default function NewsComponent({ articles }) {
  const [componentArticles, setComponentArticles] = useState(articles)
  const [search, setSearch] = useState('')
  const router = useRouter()

  return (
    <>
      {router.pathname === '/trends' 
        ? <TrendsHeader handleCountry={(e) => handleCountry(e, setComponentArticles)}/> 
        
        : <SearchHeader 
        handleSearch={(e) => setSearch(e.target.value)} 
        handleSubmit={(e) => handleSubmit(e, setComponentArticles, search)} 
        />}

      {componentArticles && componentArticles.length !== 0
      ? componentArticles.map((item, i) => {
        return (
            <Article item={item} key={i}/>
          )
        })
      : <Message />
      }
    </>
  )
}

NewsComponent.propTypes = {
  // newsApiKey: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
}