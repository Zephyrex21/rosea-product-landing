import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Ingredients from "./components/Ingredients";
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
        <Ingredients />
        <Refreshment />
        <StoreLocator />
        <Footer />
      </div>
    </>
  );
}

export default App;
