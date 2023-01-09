import styles from '../styles/News.module.css'

export default function News({ articles }) {
  return (
    <>
      <h1>News</h1>

      {articles.map((item, i) => {
        return (
          <div key={i} href={item.url} className={styles.container}>
            <h2 className={styles.title}>{item.title}</h2>
            {console.log(item.urlToImage)}
            {/* As the app has dynamic URLs for each image, it`s impossible to use the next/image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.img}
              src={item.urlToImage}
              alt={item.source.name}
            />
            <p className={styles.txt}>{item.description}</p>
          </div>
        )
      })}
    </>
  )
}
