import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {

    return (
        <>
            <Navbar />
            <main className={`container`}>
                <div className={`row`}>
                    <div className={`col-sm-6`}></div>
                    <div className={`col-sm-6`}>
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