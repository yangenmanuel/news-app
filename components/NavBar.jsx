import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
          <Link className={styles.img} href={'/'}>
            <Image src={'/home.png'} alt='home icon' height={45} width={50} />
          </Link>

        <div className={styles.linkList}>
            <Link className={styles.link} href={'/news'}>News</Link>
            <Link className={styles.link} href={'/trends'}>Trending</Link>
            <Link className={styles.link} href={'/fy'}>For you</Link>
        </div>
      </nav>
    </>
  )
}
