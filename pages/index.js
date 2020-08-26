import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import Navbar from '../components/Navbar.js'
import Services from '../components/Services.js'
import About from '../components/About.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlton Digital</title>
      </Head>
      <Navbar/>
      <div className={styles.banner}>
        <div className={styles.banner__content}>
          <h1>GROW YOUR SALES ONLINE</h1>
          <h3>Let us optimise your e-Commerce strategies to expand your business</h3>
          <a className={styles.banner__content__cta} href="">LEARN MORE</a>
        </div>
      </div>
      <Services/>
      <About/>
    </div>

  )
}
