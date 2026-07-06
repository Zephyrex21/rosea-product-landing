interface IconProps {
  name:
    | "arrow_forward"
    | "check_circle"
    | "cruelty_free"
    | "eco"
    | "expand_more"
    | "facebook"
    | "local_florist"
    | "photo_camera"
    | "place"
    | "play_arrow"
    | "shopping_bag"
    | "spa"
    | "storefront"
    | "verified"
    | "water_drop";
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
}

const COMMON = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function Icon({ name, className = "", size = 24, ...rest }: IconProps) {
  const props = { ...COMMON, width: size, height: size, className, ...rest };

  switch (name) {
    case "arrow_forward":
      return (
        <svg {...props}>
          <path d="M4 12h16M13 5l7 7-7 7" />
        </svg>
      );
    case "check_circle":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16 9" />
        </svg>
      );
    case "cruelty_free":
      return (
        <svg {...props}>
          <path d="M12 20c-4-2.5-7-5.7-7-9.2C5 7.7 7 6 9.2 6c1.2 0 2.2.6 2.8 1.6C12.6 6.6 13.6 6 14.8 6 17 6 19 7.7 19 10.8c0 3.5-3 6.7-7 9.2z" />
        </svg>
      );
    case "eco":
      return (
        <svg {...props}>
          <path d="M5 19c0-7 4-13 14-14 0 10-4 14-14 14z" />
          <path d="M5 19c2-3 5-6 9-9" />
        </svg>
      );
    case "expand_more":
      return (
        <svg {...props}>
          <path d="M5 9l7 7 7-7" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H9v3h1.5v6h3v-6H16l.5-3h-3V9.6c0-.3.2-.6.5-.6z" />
        </svg>
      );
    case "local_florist":
      return (
        <svg {...props}>
          <path d="M12 3c2 0 5 1.5 5 5s-3 5-5 5-5-1.5-5-5 3-5 5-5z" />
          <path d="M12 13v8M9 21h6" />
        </svg>
      );
    case "photo_camera":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7l1.5-2.5h5L16 7" />
          <circle cx="12" cy="13.5" r="3.5" />
        </svg>
      );
    case "place":
      return (
        <svg {...props}>
          <path d="M12 21s7-6.5 7-11.5S16 3 12 3 5 5 5 9.5 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      );
    case "play_arrow":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      );
    case "shopping_bag":
      return (
        <svg {...props}>
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case "storefront":
      return (
        <svg {...props}>
          <path d="M4 9l1-4h14l1 4" />
          <path d="M4 9a2.2 2.2 0 0 0 4.4 0A2.2 2.2 0 0 0 12 9a2.2 2.2 0 0 0 4.4 0A2.2 2.2 0 0 0 20 9" />
          <path d="M5 9v10h14V9" />
        </svg>
      );
    case "verified":
      return (
        <svg {...props}>
          <path d="M12 3l2.2 1.3 2.5-.4 1.1 2.3 2.3 1.1-.4 2.5L21 12l-1.3 2.2.4 2.5-2.3 1.1-1.1 2.3-2.5-.4L12 21l-2.2-1.3-2.5.4-1.1-2.3-2.3-1.1.4-2.5L3 12l1.3-2.2-.4-2.5 2.3-1.1 1.1-2.3 2.5.4z" />
          <path d="M8.5 12.5l2.3 2.3L16 10" />
        </svg>
      );
    case "spa":
      return (
        <svg {...props}>
          <path d="M12 21c-4-1-7-4-7-8.5C5 8 7.5 5 12 3c4.5 2 7 5 7 9.5 0 4.5-3 7.5-7 8.5z" />
          <path d="M12 3v18" />
        </svg>
      );
    case "water_drop":
      return (
        <svg {...props}>
          <path d="M12 3c3 4 6 8.5 6 12a6 6 0 0 1-12 0c0-3.5 3-8 6-12z" />
        </svg>
      );
  }
}
