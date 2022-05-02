import './App.css';
import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import ServicesList from "./components/ServicesList";
import About from "./components/About";
import Map from "./components/Map";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="App bg-body">
            <Navbar/>
            <Header/>
            <About/>
            <ServicesList/>
            <Testimonials/>
            <Map/>

        </div>
    );
}

export default App;
