import React from "react";

const GridLayout = ({ setCursorImage }) => {
  return (
    <div
      className="absolute inset-0 bg-white"
      onMouseEnter={() => setCursorImage("/Assets/quiz-cursor.png")}
      onMouseLeave={() => setCursorImage(null)}
    >
      <div className="relative w-full h-full">
        {/* Верхняя белая полоска чуть ниже */}
        <div
          className="absolute left-0 w-full"
          style={{
            top: "8px",
            height: "6px",
            backgroundColor: "#fff", // белый лист сверху
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // легкая тень для объёма
            zIndex: 10,
          }}
        />

        {/* Второй лист — светло-серый под белой полоской */}
        <div
          className="absolute left-0 w-full"
          style={{
            top: "14px",
            height: "8px",
            backgroundColor: "#f3f4f6", // светло-серый второй лист
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)", // внутренняя тень для глубины
            zIndex: 0,
          }}
        />

        {/* Нижняя серая линия */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300" />
      </div>
    </div>
  );
};

export default GridLayout;













