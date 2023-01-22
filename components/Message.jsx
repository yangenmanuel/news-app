import NotFound from './icons/NotFound'
import styles from '../styles/News.module.css'

export default function Message ( props ) {
  return (
    <div className={styles.icon}>
      <NotFound />
      <p style={{opacity: .5}}>Nothing to show 🤷</p>
    </div>
  )
}