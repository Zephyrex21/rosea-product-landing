import ScrollReveal from "./ScrollReveal";
import FloatingPetals from "./FloatingPetals";
import Icon from "./Icon";

export default function Refreshment() {
  return (
    <section
      className="relative z-10 py-24 bg-rose-primary text-white overflow-hidden scroll-mt-24"
      id="refreshment"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='25' cy='15' r='5'/%3E%3Ccircle cx='34' cy='21' r='5'/%3E%3Ccircle cx='31' cy='31' r='5'/%3E%3Ccircle cx='19' cy='31' r='5'/%3E%3Ccircle cx='16' cy='21' r='5'/%3E%3Ccircle cx='25' cy='23' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-primary-dark/50 to-rose-primary/50 mix-blend-multiply" />
      <FloatingPetals color="rgba(255,255,255,0.8)" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <ScrollReveal>
            <Icon name="local_florist" size={44} className="text-white/80 mx-auto" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Slow Down, <br /> Savor the Bloom.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-white/90 font-light leading-relaxed">
              Whether it's a quiet morning ritual or an evening indulgence, a
              chilled bottle of Roséa turns an ordinary moment into something
              worth savoring.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="pt-8">
              <button className="shimmer-btn group bg-white text-rose-primary hover:bg-blush-lighter px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg shadow-black/10 inline-flex items-center gap-2 hover:scale-105">
                <span>Grab Yours Now</span>
                <Icon
                  name="arrow_forward"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
