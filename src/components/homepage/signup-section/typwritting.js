import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const words = ["Game Your Knowledge", "Quiz. Learn. Repeat.", "Unlock Your Genius"];

const TypeWritting = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const fullText = words[currentWordIndex];
    const nextText = fullText.substring(
      0,
      displayedText.length + (isDeleting ? -1 : 1)
    );

    const timeout = setTimeout(() => {
      setDisplayedText(nextText);

      if (!isDeleting && nextText === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  useEffect(() => {
    const cursorBlink = setInterval(() => setCursor((v) => !v), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <motion.section
      className="relative z-10 max-w-3xl mx-auto p-6 rounded-lg select-none text-gray-800 bg-white bg-opacity-70 backdrop-blur-md shadow-lg"
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontWeight: "700",
        fontSize: "2rem",
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Светлый градиентный фон-анимация */}
      <div className="absolute inset-0 animate-gradient rounded-lg -z-10 opacity-40" />

      <div className="flex items-center gap-4">
        <div className="relative flex-grow text-gray-900">
          {displayedText}
          <span
            style={{
              marginLeft: 4,
              fontWeight: "900",
              userSelect: "none",
            }}
          >
            {cursor ? "|" : " "}
          </span>
        </div>

        <motion.div
          initial={{ x: 10, opacity: 0.7 }}
          whileHover={{ x: 25, opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="cursor-pointer"
        >
          <Image
            src="/Assets/arrow.png"
            width={40}
            height={40}
            alt="arrow"
            style={{
              filter: "drop-shadow(0 0 4px rgba(100, 149, 237, 0.8))", // лёгкий синий свечения
            }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .animate-gradient {
          background: linear-gradient(
            270deg,
            #dbeafe,
            #bfdbfe,
            #93c5fd,
            #dbeafe
          );
          background-size: 600% 600%;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default TypeWritting;



