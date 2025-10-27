import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center justify-center gap-2">
      {/* Icon Section */}
      <div
        className="flex aspect-square size-8 items-center justify-center rounded-lg"
        style={{
          background: "oklch(0.586 0.253 17.585)", // --primary
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="oklch(0.969 0.015 12.422)" // --primary-foreground
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13l2-5a2 2 0 011.9-1.4h10.2a2 2 0 011.9 1.4l2 5m-2 0h-14m14 0v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-4"
          />
        </svg>
      </div>

      {/* Text Section */}
      <div className="grid flex-1 text-left leading-tight">
        <span
          className="truncate font-extrabold text-lg"
          style={{
            letterSpacing: "0.15em",
            color: "oklch(0.586 0.253 17.585)", // --primary
          }}
        >
          Rida
        </span>
        <span
          className="truncate text-xs font-semibold"
          style={{
            letterSpacing: "0.15em",
            color: "oklch(0.552 0.016 285.938)", // --muted-foreground
          }}
        >
          Ride Together
        </span>
      </div>
    </Link>
  );
}
