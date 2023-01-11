import styles from '../styles/News.module.css'

export default function News({ articles }) {
  return (
    <>
      <h1>News</h1>

      {articles.map((item, i) => {
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
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}
