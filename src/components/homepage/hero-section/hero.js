"use client";
import React, { useState } from "react";
import GridLayout from "./grid-layout";
import MainText from "./main-text";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("./custom-cursor"), { ssr: false });
const Tag = dynamic(() => import("./tag"), { ssr: false });

const tagsData = [
  {
    text: "Class Management",
    color: "green",
    positionLarge: { top: "10%", left: "10%" },
    positionSmall: { top: "8%", left: "8%" },
    cursorImage: "/Assets/multi-pointer.svg",
  },
  {
    text: "Quiz Management",
    color: "green",
    positionLarge: { top: "75%", left: "15%" },
    positionSmall: { top: "30%", left: "10%" },
    cursorImage: "/Assets/pointer.svg",
  },
  {
    text: "Interactive Learning",
    color: "lightGreen",
    positionLarge: { top: "20%", left: "65%" },
    positionSmall: { top: "10%", left: "50%" },
    cursorImage: "/Assets/pointer.svg",
  },
  {
    text: "Mobile Friendly",
    color: "lightGreen",
    positionLarge: { top: "70%", left: "70%" },
    positionSmall: { top: "70%", left: "50%" },
    cursorImage: "/Assets/pointer.svg",
  },
  {
    text: "Progress Tracking",
    color: "green",
    positionLarge: { top: "30%", left: "30%" },
    positionSmall: { top: "20%", left: "20%" },
    cursorImage: "/Assets/pointer.svg",
  },
  {
    text: "Gamified Tests",
    color: "lightGreen",
    positionLarge: { top: "80%", left: "50%" },
    positionSmall: { top: "35%", left: "35%" },
    cursorImage: "/Assets/pointer.svg",
  },
  {
    text: "Analytics",
    color: "green",
    positionLarge: { top: "80%", left: "85%" },
    positionSmall: { top: "65%", left: "70%" },
    cursorImage: "/Assets/pointer.svg",
  },
  // Добавим 3 новых тега для примера
  {
    text: "Real-time Feedback",
    color: "green",
    positionLarge: { top: "15%", left: "50%" },
    positionSmall: { top: "12%", left: "75%" },
    cursorImage: "/Assets/pointer.svg",
  },
  {
    text: "Custom Reports",
    color: "lightGreen",
    positionLarge: { top: "50%", left: "15%" },
    positionSmall: { top: "40%", left: "8%" },
    cursorImage: "/Assets/pointer.svg",
  },
  {
    text: "Cloud Sync",
    color: "green",
    positionLarge: { top: "60%", left: "90%" },
    positionSmall: { top: "50%", left: "80%" },
    cursorImage: "/Assets/pointer.svg",
  },
];

const Hero = () => {
  const [cursorImage, setCursorImage] = useState(null);

  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden bg-white cursor-none">
      <GridLayout setCursorImage={setCursorImage} />
      <MainText setCursorImage={setCursorImage} />
      <CustomCursor image={cursorImage} />

      {tagsData.map(({ text, color, positionLarge, positionSmall, cursorImage: cImage }, i) => (
        <Tag
          key={i}
          text={text}
          color={color}
          positionLarge={positionLarge}
          positionSmall={positionSmall}
          setCursorImage={setCursorImage}
          cursorImage={cImage}
        />
      ))}
    </div>
  );
};

export default Hero;



