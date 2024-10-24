import styles from "../about-page/about.module.css"
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>This is About page</h1>
      <ul>
        <li><Link href="/">Go to Home page</Link></li>
        <li><Link href="/contact-page">Go to contact page</Link></li>
        <li><Link href="/services-page">Go to services page</Link></li>
      </ul>
    </div>
  )
}

export default AboutPage




















