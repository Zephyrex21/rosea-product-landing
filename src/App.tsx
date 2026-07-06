import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Everything below the hero sits behind 300vh of scroll before it's ever
// visible, so none of it needs to be in the initial JS bundle. Splitting
// these into separate chunks means the browser only has to parse/execute
// Navbar + Hero to get the page interactive; the rest streams in while
// the person is still scrolling through the hero animation.
const Features = lazy(() => import("./components/Features"));
const Stats = lazy(() => import("./components/Stats"));
const Ingredients = lazy(() => import("./components/Ingredients"));
const Gallery = lazy(() => import("./components/Gallery"));
const MarqueeTicker = lazy(() => import("./components/MarqueeTicker"));
const Refreshment = lazy(() => import("./components/Refreshment"));
const StoreLocator = lazy(() => import("./components/StoreLocator"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Navbar />
      <div id="main">
        <Hero />
        <Suspense fallback={null}>
          <Features />
          <Stats />
          <Ingredients />
          <Gallery />
          <MarqueeTicker />
          <Refreshment />
          <StoreLocator />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
