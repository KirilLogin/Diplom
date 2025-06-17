import React from "react";
import { useMediaQuery } from "react-responsive";

const colorClasses = {
  green: "bg-green-100 text-green-800 border border-green-500",
  lightGreen: "bg-green-50 text-green-600 border border-green-300",
};

const Tag = ({
  text,
  color = "green",
  positionLarge = { top: "0%", left: "0%" },
  positionSmall = { top: "0%", left: "0%" },
  setCursorImage,
  cursorImage,
  hide = false,
}) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const position = isSmallScreen ? positionSmall : positionLarge;

  return (
    <div
      className={`absolute px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-200 ease-in-out ${colorClasses[color]} ${
        hide ? "hidden md:block" : ""
      }`}
      style={{ top: position.top, left: position.left }}
      onMouseEnter={() => setCursorImage?.(cursorImage)}
      onMouseLeave={() => setCursorImage?.(null)}
    >
      {text}
    </div>
  );
};

export default Tag;

