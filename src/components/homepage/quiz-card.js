import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import Card from "@/components/homepage/quiz-card";

const CardSlider = ({ cards }) => {
  // Если cards нет или не массив — ставим пустой массив
  const safeCards = Array.isArray(cards) ? cards : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 4);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Максимальный индекс для currentIndex
  const maxIndex = Math.max(0, safeCards.length - cardsPerPage);

  // Обеспечиваем, чтобы currentIndex не вышел за пределы
  const safeCurrentIndex = Math.min(currentIndex, maxIndex);

  // Выбираем карточки для отображения
  const displayedCards = safeCards.slice(safeCurrentIndex, safeCurrentIndex + cardsPerPage);

  // Обработчики кликов
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - cardsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + cardsPerPage));
  };

  return (
    <div className="w-full mx-auto my-5">
      <div className="flex items-center justify-center gap-4 m-5">
        <IconButton
          onClick={handlePrev}
          disabled={safeCurrentIndex === 0}
          sx={{
            bgcolor: "#1E3A8A",
            borderRadius: "50%",
            "&:hover": { bgcolor: "#10B981" },
          }}
        >
          <Image
            src="/Assets/next.png"
            alt="Prev"
            width={30}
            height={30}
            style={{ transform: "rotate(180deg)" }}
          />
        </IconButton>

        <div className="flex gap-4 overflow-hidden w-full justify-center">
          {displayedCards.map((card, i) => (
            <Card key={i} title={card.title} src={card.src} href={card.href} />
          ))}
        </div>

        <IconButton
          onClick={handleNext}
          disabled={safeCurrentIndex >= maxIndex}
          sx={{
            bgcolor: "#1E3A8A",
            borderRadius: "50%",
            "&:hover": { bgcolor: "#10B981" },
          }}
        >
          <Image src="/Assets/next.png" alt="Next" width={30} height={30} />
        </IconButton>
      </div>
    </div>
  );
};

export default CardSlider;











