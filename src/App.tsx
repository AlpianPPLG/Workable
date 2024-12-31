import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Service";
import HowItWorks from "./components/HowItWork";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimony";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonial />
        <Feature />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
