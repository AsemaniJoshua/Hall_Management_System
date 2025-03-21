
import Navbar from "../components/Navbar";
import Hero from "../components/Home_components/Hero";
import HowItWorks from "../components/Home_components/HowItWorks";
import AboutUS from "../components/Home_components/AboutUs";
import Footer from "../components/Footer";
function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <HowItWorks/>
            <AboutUS/>
            <Footer/>
        </>
    )
}

export default Home;
