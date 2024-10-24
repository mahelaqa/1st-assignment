import Link from 'next/link'
import styles from "../contact-page/contact.module.css"


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>This is Contact page</h1>
      <ul>
        <li><Link href="/">Go to Home page</Link></li>
        <li><Link href="/about-page">Go to About page</Link></li>
        <li><Link href="/services-page">Go to services page</Link></li>
      </ul>
    </div>
  )
}

export default ContactPage
