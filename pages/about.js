import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GitHubRepoList from "./components/GitHubRepoList";

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <main style={{ padding: '16px', marginTop: '70px' }}>
                <div className={`row`}>
                    <div className={`col-2`}></div>
                    <div className={`col-2`}>
                        <GitHubRepoList />
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}