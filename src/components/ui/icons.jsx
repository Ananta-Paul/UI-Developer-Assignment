import React from "react";

// Simple SVG component using public folder reference
export const PlaceholderIcon = ({
  className = "w-6 h-6",
  alt = "Placeholder",
}) => <img src="/placeholder.svg" alt={alt} className={className} />;

export const WorldMapIcon = ({ className = "w-6 h-6", alt = "World Map" }) => (
  <img src="/WorldMap.svg" alt={alt} className={className} />
);

// Or if you want inline SVG for better control
export const CustomIcon = ({
  className = "w-6 h-6",
  fill = "currentColor",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SVG paths here */}
  </svg>
);
