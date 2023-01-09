import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
          <Link className={styles.img} href={'/'}>
            <h1>📰</h1>
          </Link>

        <div className={styles.linkList}>
            <Link className={styles.link} href={'/news'}>News</Link>
            <Link className={styles.link} href={'/about'}>About</Link>
        </div>
      </nav>
    </>
  )
}
