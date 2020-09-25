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
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 style={{ textAlign: 'center', color: '#007bff', paddingTop: '25px' }}>Artifical Integllience and Machine Learning Enthusiastic</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div style={{ color: '#007bff' }}>
                <ContactForm />
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

    </div>
  )
}
