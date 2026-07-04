import ScrollReveal from "./ScrollReveal";

export default function StoreLocator() {
  return (
    <section
      className="relative z-10 py-24 bg-ivory transition-colors duration-300 scroll-mt-24"
      id="where-to-buy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-3xl p-8 md:p-12 lg:p-16 border border-rose-primary/10 shadow-xl flex flex-col lg:flex-row items-center gap-12">
          <ScrollReveal direction="left" duration={0.8} className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rose-ink">
              Find Roséa Near You
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Available at select supermarkets, boutique cafés, and specialty
              stores. You can also order online through our delivery
              partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-rose-ink text-ivory px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <span className="material-icons">storefront</span>
                <span>Store Locator</span>
              </button>
              <button className="flex-1 bg-rose-primary/10 text-rose-primary border border-rose-primary/20 hover:bg-rose-primary/20 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                <span className="material-icons">shopping_bag</span>
                <span>Order Online</span>
              </button>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            duration={0.8}
            delay={0.1}
            className="w-full lg:w-1/2 h-64 md:h-80 bg-blush-lighter rounded-2xl relative overflow-hidden flex items-center justify-center group cursor-pointer border border-blush"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 10l10-10H0l10 10zm0 0l10 10H0l10-10z' fill='%238c4a56' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-rose-primary rounded-full flex items-center justify-center shadow-lg shadow-rose-primary/40 group-hover:scale-110 transition-transform duration-300">
                <span className="material-icons text-white text-3xl">place</span>
              </div>
              <div className="mt-4 px-4 py-2 bg-white rounded-lg shadow-md border border-blush text-sm font-medium">
                Search your pin code
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
