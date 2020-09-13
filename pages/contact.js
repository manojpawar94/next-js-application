import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {

    return (
        <>
            <Navbar />
            <main style={{ padding: '16px', marginTop: '70px'}}>
                <div className={`row`}>
                    <div className={`col-2`}></div>
                    <div className={`col-2`}>
                        <div className={`card`}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}