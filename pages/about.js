import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GitHubRepoList from "./components/GitHubRepoList";

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <main className={`container`}>
                <div className={`row`}>
                    <div className={`col-6`}>
                        <GitHubRepoList />
                    </div>
                    <div className={`col-6`}></div>
                </div>

            </main>
            <Footer />
        </div>
    )
}