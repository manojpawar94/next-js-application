import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Carousel from './components/carousel'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aimle Learning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Carousel />
      <Footer />

    </div>
  )
}
