import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import aimlbanner from '../images/aiml_banner_1.jpg'
import ContactForm from './components/ContactForm'

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
          <h1 style={{textAlign : 'center', color : '#007bff', paddingTop: '25px'}}>Artifical Integllience and Machine Learning Enthusiastic</h1>
        </div>
        <div>
          <div style={{marginLeft: '20%', marginRight: '20%', color : '#007bff', padding: '30px 0px'}}>
              <ContactForm />
          </div>
        </div>
      </main>
      <Footer />

    </div>
  )
}
