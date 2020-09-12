import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import aimlbanner from '../images/aiml_bannar.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aimle Learning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div>
          <img className={styles.banner} src={aimlbanner} />
        </div>
        <div>
          <h2>AIMLE</h2>
        </div>
      </main>
      <Footer />

    </div>
  )
}
