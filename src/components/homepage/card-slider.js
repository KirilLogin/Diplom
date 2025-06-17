"use client";
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function CardSlider({ cards }) {
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(4);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    if (currentIndex > cards.length - cardsPerPage) {
      setCurrentIndex(Math.max(cards.length - cardsPerPage, 0));
    }
  }, [cardsPerPage, cards.length, currentIndex]);

  const displayedCards = cards.slice(currentIndex, currentIndex + cardsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + cardsPerPage, cards.length - cardsPerPage)
    );
  };

  return (
    <div className="w-full mx-auto my-5 max-w-7xl px-4">
      <div className="flex items-center justify-center gap-4 mb-5">
        <IconButton
          sx={{
            backgroundColor: "#1E3A8A",
            borderRadius: "50%",
            padding: 1,
            "&:hover": {
              backgroundColor: "#10B981",
            },
          }}
          onMouseEnter={() => setHoveredPrev(true)}
          onMouseLeave={() => setHoveredPrev(false)}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <Image
            src={hoveredPrev ? "/Assets/next-hover.png" : "/Assets/next.png"}
            alt="Prev"
            width={30}
            height={30}
            style={{ transform: "rotate(180deg)" }}
          />
        </IconButton>

        <div className="flex overflow-hidden w-full justify-center gap-4">
          {displayedCards.map(({ title, src, href }, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs mx-auto bg-white"
            >
              <div className="bg-primary text-white text-center py-3 text-lg font-semibold select-none">
                {title}
              </div>
              <div className="relative w-full" style={{ paddingTop: "62.5%" }}>
                <Image
                  src={src}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <Link href={href}>
                  <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-secondary text-white font-semibold py-2 px-8 rounded-md cursor-pointer shadow-md hover:shadow-lg transition-colors duration-300">
                    Start Quiz
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <IconButton
          sx={{
            backgroundColor: "#1E3A8A",
            borderRadius: "50%",
            padding: 1,
            "&:hover": {
              backgroundColor: "#10B981",
            },
          }}
          onMouseEnter={() => setHoveredNext(true)}
          onMouseLeave={() => setHoveredNext(false)}
          onClick={handleNext}
          disabled={currentIndex + cardsPerPage >= cards.length}
        >
          <Image
            src={hoveredNext ? "/Assets/next-hover.png" : "/Assets/next.png"}
            alt="Next"
            width={30}
            height={30}
          />
        </IconButton>
      </div>
    </div>
  );
}


