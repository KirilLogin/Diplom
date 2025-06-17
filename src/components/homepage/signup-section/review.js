import React from "react";
import { Rating } from "@mui/material";

const Review = () => {
  return (
    <section className="relative z-10 max-w-xl mx-auto p-8 rounded-xl shadow-lg bg-gray-900 text-gray-200 select-none">
      {/* Анимированный градиентный фон */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 opacity-50 rounded-xl -z-10" />

      <header className="flex flex-col md:flex-row md:items-center mb-6 gap-3">
        <Rating
          name="rating"
          value={4}
          precision={0.5}
          size="large"
          sx={{
            color: "#a0aec0", // мягкий серо-голубой
            filter: "drop-shadow(0 0 4px #718096)", // мягкая тень
          }}
        />
        <span className="hidden md:inline-block font-semibold mx-3 text-gray-400">
          —
        </span>
        <h3 className="font-bold text-xl md:text-2xl text-gray-300">
          Emily Chen{" "}
          <span className="font-normal text-sm text-gray-400">(Teacher)</span>
        </h3>
      </header>

      <blockquote className="text-lg leading-relaxed text-gray-300">
        “Using Quizzo has transformed how I engage with my students.
        Its intuitive design and powerful features save me time and let me focus
        on what matters most — teaching.”
      </blockquote>

      <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
          border-radius: 1rem;
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
    </section>
  );
};

export default Review;

