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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu automatically if the viewport grows past the md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[1000] w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-ivory/95 backdrop-blur-md border-b border-rose-primary/10 shadow-sm"
          : "bg-white/20 backdrop-blur-sm border-b border-white/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#"
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="logo-pulse w-5 h-5 text-rose-primary"
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
          </a>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-rose-ink"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`absolute block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block w-6 h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-rose-primary/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-base font-medium border-b border-rose-primary/5 transition-colors ${
                active === link.id ? "text-rose-primary" : "text-rose-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            className="shimmer-btn mt-4 w-full bg-rose-primary text-white px-6 py-3 rounded-full font-medium shadow-md shadow-rose-primary/20"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
}
