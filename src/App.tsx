import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Ingredients from "./components/Ingredients";
import Gallery from "./components/Gallery";
import MarqueeTicker from "./components/MarqueeTicker";
import Refreshment from "./components/Refreshment";
import StoreLocator from "./components/StoreLocator";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="main">
        <Hero />
        <Features />
        <Stats />
        <Ingredients />
        <Gallery />
        <MarqueeTicker />
        <Refreshment />
        <StoreLocator />
        <Footer />
      </div>
    </>
  );
}

export default App;
