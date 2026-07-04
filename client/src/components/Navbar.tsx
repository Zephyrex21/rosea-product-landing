import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[1000] w-full transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-rose-primary/10 shadow-sm"
          : "bg-white/20 backdrop-blur-sm border-b border-white/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="font-display italic font-bold text-2xl tracking-tight text-rose-deep">
              Roséa
            </span>
            <span className="px-2 py-0.5 rounded-full bg-rose-gold/15 text-rose-gold text-xs font-semibold uppercase tracking-wider">
              Premium
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-sm font-medium hover:text-rose-primary transition-colors duration-200 text-rose-ink"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-sm font-medium hover:text-rose-primary transition-colors duration-200 text-rose-ink"
              href="#ingredients"
            >
              Ingredients
            </a>
            <a
              className="text-sm font-medium hover:text-rose-primary transition-colors duration-200 text-rose-ink"
              href="#refreshment"
            >
              The Ritual
            </a>
            <a
              className="text-sm font-medium hover:text-rose-primary transition-colors duration-200 text-rose-ink"
              href="#where-to-buy"
            >
              Store Locator
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-rose-primary hover:bg-rose-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md shadow-rose-primary/20">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
