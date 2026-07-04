import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-surface border-t border-rose-primary/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12" duration={0.7}>
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display italic font-bold text-2xl tracking-tight text-rose-deep">
                Roséa
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              A rose and milk drink, made for the quiet moments. Real rose,
              real milk, nothing else.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                className="w-8 h-8 rounded-full bg-blush-light flex items-center justify-center text-rose-deep hover:bg-rose-primary hover:text-white transition-colors"
                href="#"
              >
                <span className="material-icons text-sm">facebook</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-blush-light flex items-center justify-center text-rose-deep hover:bg-rose-primary hover:text-white transition-colors"
                href="#"
              >
                <span className="material-icons text-sm">photo_camera</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-blush-light flex items-center justify-center text-rose-deep hover:bg-rose-primary hover:text-white transition-colors"
                href="#"
              >
                <span className="material-icons text-sm">play_arrow</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Products</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a className="hover:text-rose-primary transition-colors" href="#">
                  Roséa Classic Rose
                </a>
              </li>
              <li>
                <a className="hover:text-rose-primary transition-colors" href="#">
                  Roséa Saffron Bloom
                </a>
              </li>
              <li>
                <a className="hover:text-rose-primary transition-colors" href="#">
                  Roséa Cardamom Rose
                </a>
              </li>
              <li>
                <a className="hover:text-rose-primary transition-colors" href="#">
                  Roséa Café Rose
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Support</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a className="hover:text-rose-primary transition-colors" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-rose-primary transition-colors" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:text-rose-primary transition-colors" href="#where-to-buy">
                  Store Locator
                </a>
              </li>
              <li>
                <a className="hover:text-rose-primary transition-colors" href="#">
                  Distributorship
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Stay Updated</h4>
            <p className="text-sm text-muted mb-4">
              Subscribe to our newsletter for offers and updates.
            </p>
            <form
              className="flex flex-col space-y-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="bg-white border border-blush rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-primary focus:border-transparent"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-rose-ink text-ivory font-medium rounded-lg px-4 py-2 text-sm hover:opacity-90 transition-opacity"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>
        <div className="border-t border-rose-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Roséa. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-muted">
            <a className="hover:text-rose-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-rose-primary transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
