import './App.css';
import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import ServicesList from "./components/ServicesList";
import About from "./components/About";
import Map from "./components/Map";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App bg-body">
            <Navbar/>
            <Header/>
            <About/>
            <ServicesList/>
            <Gallery/>
            <Testimonials/>
            <Map/>
            <Footer/>

        </div>
    );
}

export default App;
