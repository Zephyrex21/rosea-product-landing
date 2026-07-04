export default function Refreshment() {
  return (
    <section
      className="relative z-10 py-24 bg-rose-primary text-white overflow-hidden scroll-mt-24"
      id="refreshment"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-primary-dark/50 to-rose-primary/50 mix-blend-multiply" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="material-icons text-5xl text-white/80">auto_awesome</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Slow Down, <br /> Savor the Bloom.
          </h2>
          <p className="text-xl text-white/90 font-light leading-relaxed">
            Whether it's a quiet morning ritual or an evening indulgence, a
            chilled bottle of Roséa turns an ordinary moment into something
            worth savoring.
          </p>
          <div className="pt-8">
            <button className="bg-white text-rose-primary hover:bg-blush-lighter px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg shadow-black/10 inline-flex items-center gap-2">
              <span>Grab Yours Now</span>
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
