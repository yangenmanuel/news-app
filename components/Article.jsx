import styles from '../styles/News.module.css'
import Arrow from './icons/Arrow'

import PropTypes from 'prop-types'

export default function Article ({ item }) {
  return (
    <div href={item.url} className={styles.container}>
      <h2 className={styles.title}>{item.title}</h2>
      {/* As the app has dynamic URLs for each image, it`s impossible to use the next/image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {item.urlToImage && ( <img
          className={styles.img}
          src={item.urlToImage}
          alt={item.source.name}
          loading='lazy'
        />
      )}
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
}

Article.propTypes = {
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