import Link from 'next/link'
import styles from '../services-page/services.module.css'

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>This is services page</h1>
      <ul className={styles.list}>
        <li><Link href="/services-page/apps-designing">This is apps-designing page</Link></li>
        <li><Link href="/services-page/graphics">This is graphics designing page</Link></li>




 </ul>
</div>
  )
}

export default ServicesPage
