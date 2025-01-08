import React from "react";

const LogoSmall = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="100"
      viewBox="0 0 400 100"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8e44ad" />
          <stop offset="100%" stopColor="#3498db" />
        </linearGradient>
      </defs>
      <text
        x="20"
        y="70"
        font-family="Arial, Helvetica, sans-serif"
        font-size="60"
        font-weight="bold"
        fill="url(#gradient)"
      >
        InstaPilot
      </text>
      <path d="M330,40 L360,50 L330,60 Z" fill="#3498db" />
    </svg>
  );
};

export default LogoSmall;
