import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Icon from "./Icon";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                aria-label="Roséa on Facebook"
              >
                <Icon name="facebook" size={16} aria-hidden={true} />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-blush-light flex items-center justify-center text-rose-deep hover:bg-rose-primary hover:text-white transition-colors"
                href="#"
                aria-label="Roséa on Instagram"
              >
                <Icon name="photo_camera" size={16} aria-hidden={true} />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-blush-light flex items-center justify-center text-rose-deep hover:bg-rose-primary hover:text-white transition-colors"
                href="#"
                aria-label="Roséa on YouTube"
              >
                <Icon name="play_arrow" size={16} aria-hidden={true} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Products</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a className="link-underline hover:text-rose-primary" href="#">
                  Roséa Classic Rose
                </a>
              </li>
              <li>
                <a className="link-underline hover:text-rose-primary" href="#">
                  Roséa Saffron Bloom
                </a>
              </li>
              <li>
                <a className="link-underline hover:text-rose-primary" href="#">
                  Roséa Cardamom Rose
                </a>
              </li>
              <li>
                <a className="link-underline hover:text-rose-primary" href="#">
                  Roséa Café Rose
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Support</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a className="link-underline hover:text-rose-primary" href="mailto:hello@rosea.example">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="link-underline hover:text-rose-primary" href="#faq">
                  FAQs
                </a>
              </li>
              <li>
                <a className="link-underline hover:text-rose-primary" href="#where-to-buy">
                  Store Locator
                </a>
              </li>
              <li>
                <a className="link-underline hover:text-rose-primary" href="mailto:partners@rosea.example">
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
            {submitted ? (
              <p className="text-sm text-rose-primary font-medium flex items-center gap-2">
                <Icon name="check_circle" size={18} aria-hidden={true} />
                Thanks! You're on the list.
              </p>
            ) : (
              <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  className="bg-white border border-blush rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-primary focus:border-transparent"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <button
                  className="bg-rose-ink text-ivory font-medium rounded-lg px-4 py-2 text-sm hover:opacity-90 transition-opacity"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
        <div className="border-t border-rose-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Roséa. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-muted">
            <a className="link-underline hover:text-rose-primary" href="#">
              Privacy Policy
            </a>
            <a className="link-underline hover:text-rose-primary" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
