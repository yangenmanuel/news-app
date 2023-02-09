import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Navbar.module.css'

export default function NavBar() {
  const { pathname } = useRouter()
  
  return (
    <>
      <nav className={styles.nav}>
          <Link className={styles.img} href={'/'}>
            <h1>📰</h1>
          </Link>

        <div className={styles.linkList}>
            <Link className={styles.link} 
            style={{borderBottom: pathname === '/trends' ? '3px solid white' : 'none'}}
            href={'/trends'}>Trends 🔥</Link>

            <Link className={styles.link}
             style={{borderBottom: pathname === '/search' ? '3px solid white' : 'none'}} 
             href={'/search'}>Search 🔎</Link>
            
            <Link className={styles.link} 
            style={{borderBottom: pathname === '/about' ? '3px solid white' : 'none'}}
            href={'/about'}>About
            </Link>
        </div>
      </nav>
    </>
  )
}
