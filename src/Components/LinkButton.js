import React from "react";
import { Link } from "react-router-dom";

export function IconLinkButton({ to, label }) {
  return (
    <Link to={to}>
      <button
        className="   
        fixed bottom-4 left-1/2 -translate-x-1/2   /* Always bottom center */
          z-50
          flex items-center gap-2
          bg-black text-white
          px-4 py-2
          rounded-full
          shadow
          hover:bg-white/10
          transition-colors
        "
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </Link>
  );
}
