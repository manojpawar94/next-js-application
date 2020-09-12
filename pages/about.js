import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <main style={{padding: '16px',marginTop: '70px'}}>
                <p>About page is working</p>
            </main>
            <Footer />
        </div>
    )
}