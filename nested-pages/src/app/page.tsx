import Link from "next/link"


const HomePage = () => {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-page">About-page</Link></li>
        <li><Link href="/contact-page">Contact-page</Link></li>
        <li><Link href="/services-page">Services-page</Link></li>






      </ul>
    </div>
  )
}

export default HomePage
