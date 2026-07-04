import ScrollReveal from "./ScrollReveal";

// Frame numbers chosen by measuring pixel/edge variance across the sequence
// to reliably pick frames where the bottle + splash are actually in frame
// (avoids near-empty background frames like 001-040). All 7 are distinct
// from each other and from the frame used in the Ingredients section (120).
const GALLERY_FRAMES = [
  { src: "/frames/ezgif-frame-150.jpg", span: "row-span-2" },
  { src: "/frames/ezgif-frame-090.jpg", span: "" },
  { src: "/frames/ezgif-frame-160.jpg", span: "" },
  { src: "/frames/ezgif-frame-200.jpg", span: "row-span-2" },
  { src: "/frames/ezgif-frame-230.jpg", span: "" },
  { src: "/frames/ezgif-frame-180.jpg", span: "" },
  { src: "/frames/ezgif-frame-220.jpg", span: "" },
];

export default function Gallery() {
  return (
    <section className="relative z-10 py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-bold text-rose-primary tracking-widest uppercase mb-3">
            In the Frame
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold italic text-rose-ink">
            Every angle, another reason to fall for it.
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px]">
          {GALLERY_FRAMES.map((frame, i) => (
            <ScrollReveal
              key={frame.src}
              delay={(i % 3) * 0.1}
              distance={24}
              className={`${frame.span} rounded-2xl overflow-hidden`}
            >
              <div className="gallery-tile relative w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-rose-primary/20 border border-blush/60 group">
                <img
                  src={frame.src}
                  alt="Roséa bottle detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-display italic text-white text-sm tracking-wide">
                    Roséa
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
