import { useRef, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import useNearScreen from '../hooks/useNearScreen'

const Article = lazy(() => import('./Article'))

export default function LazyArticles ({ item }) {
  const elementRef = useRef()
  const isNearScreen = useNearScreen(elementRef)

  return (
    <div ref={elementRef}>
      {isNearScreen && 
        <Suspense fallback='cargando todavia pipo'>
          <Article item={item} id='element'/>
        </Suspense>}
    </div>
  )
}

LazyArticles.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string
    }),
    description: PropTypes.string
  })
 }