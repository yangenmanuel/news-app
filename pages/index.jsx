import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <div>
          <h1 className={styles.title}>News Reader</h1>
          <p className={styles.text}>
            Discover what`s happening around the world with more than 80k+
            articles with updated, controversial and excitement information!
          </p>
          {/* <Link href={'/news'}> */}
            <button className={styles.btn}>Start Reading</button>
          {/* </Link> */}
        </div>
      </main>
    </>
  )
}
