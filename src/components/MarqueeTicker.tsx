const PHRASES = [
  "REAL ROSE",
  "REAL MILK",
  "NO PRESERVATIVES",
  "NO ARTIFICIAL FLAVORS",
  "SLOW SIPS",
  "BOTTLED WITH CARE",
];

function TickerContent() {
  return (
    <div className="flex items-center flex-shrink-0">
      {PHRASES.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="font-display italic text-2xl md:text-3xl text-rose-primary/80 px-6 whitespace-nowrap">
            {phrase}
          </span>
          <svg
            className="w-3 h-3 text-rose-gold flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2c4 3 6 7 6 10a6 6 0 1 1-12 0c0-3 2-7 6-10z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeTicker() {
  return (
    <div className="relative z-10 bg-blush-lighter border-y border-blush py-6 overflow-hidden">
      <div className="flex animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
