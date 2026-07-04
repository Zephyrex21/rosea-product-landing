export default function Ingredients() {
  return (
    <section
      className="relative z-10 py-24 bg-blush-lighter overflow-hidden transition-colors duration-300 scroll-mt-24"
      id="ingredients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div
            className="relative w-full self-start rounded-3xl overflow-hidden border border-blush shadow-xl shadow-rose-primary/10 group"
            style={{ height: "420px", alignSelf: "start" }}
          >
            <img
              src="/frames/ezgif-frame-120.jpg"
              alt="Roséa bottle with fresh rose petals and a milk splash"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-ink/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
              <div className="w-10 h-10 rounded-full bg-rose-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-icons text-rose-primary text-xl">verified</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-rose-ink leading-tight">
                  100% Real Rose Extract
                </p>
                <p className="text-xs text-muted leading-tight">
                  No shortcuts. No synthetic notes.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-rose-primary tracking-widest uppercase mb-3">
                Premium Ingredients
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rose-ink leading-tight">
                Crafted with <span className="italic text-rose-primary">Nature's Best</span>
              </h3>
            </div>
            <p className="text-lg text-muted leading-relaxed">
              We believe that extraordinary taste begins with extraordinary
              ingredients. Every bottle of Roséa is meticulously crafted to
              preserve the authentic flavor and nutritional goodness of its
              components.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-primary/10 flex items-center justify-center">
                  <span className="material-icons text-rose-primary">eco</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">
                    Handpicked Rose Extracts
                  </h4>
                  <p className="text-muted">
                    Sourced from the finest blooming roses to ensure a
                    natural, non-artificial aroma and a flavor profile that
                    soothes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center">
                  <span className="material-icons text-rose-gold">cruelty_free</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Farm-Fresh Milk</h4>
                  <p className="text-muted">
                    Processed using advanced UHT technology to maintain
                    freshness, creamy texture, and safety without
                    preservatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
