import { useEffect, useState } from "react";

const NAV_LINKS = [
  { id: "features", label: "Features" },
  { id: "ingredients", label: "Ingredients" },
  { id: "refreshment", label: "The Ritual" },
  { id: "where-to-buy", label: "Store Locator" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scanLine = window.innerHeight * 0.35;
      let current = "";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= scanLine && rect.bottom >= scanLine) {
          current = link.id;
          break;
        }
      }
      setActive(current);
    };
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
            <svg
              className="w-5 h-5 text-rose-primary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3c2 0 5 1.5 5 5s-3 5-5 5-5-1.5-5-5 3-5 5-5z"
                fill="currentColor"
                opacity="0.7"
              />
              <path d="M12 13v8M9 21h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="font-display italic font-bold text-2xl tracking-tight text-rose-deep">
              Roséa
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
                  active === link.id
                    ? "text-rose-primary"
                    : "text-rose-ink hover:text-rose-primary"
                }`}
                href={`#${link.id}`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-rose-primary transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="shimmer-btn bg-rose-primary hover:bg-rose-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md shadow-rose-primary/20">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
