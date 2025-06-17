"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Navbar/button";
import TypeWritting from "./typwritting";
import Review from "./review";
import Subtext from "./subtext";
import { Modal, Box } from "@mui/material";
import Signup from "@/components/homepage/modal/signup";
import Login from "@/components/homepage/modal/login";

const SignupSection = ({ setCursorImage }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-20 py-16 gap-16"
      onMouseEnter={() => setCursorImage?.("/Assets/quiz-cursor.png")}
      onMouseLeave={() => setCursorImage?.(null)}
    >
      {/* Верхняя и нижняя полосы */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 z-0" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200 z-0" />

      {/* Левый текстовый блок */}
      <div className="flex flex-col gap-6 max-w-xl z-10">
        <TypeWritting />
        <Subtext />
        <Review />
        <div className="flex space-x-4">
          <Button text="Join as Teacher" />
          <Button text="Join as Student" onClick={() => setActiveModal("signup")} />
        </div>
      </div>

      {/* Картинка с рамкой, тенью и пульсацией */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`z-10 rounded-xl border-4 border-blue-400 shadow-lg overflow-hidden transition-transform duration-300 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      >
        <Image
          src="/Assets/hero.png"
          alt="hero"
          width={500}
          height={500}
          quality={100}
          className="w-full h-auto"
        />
      </div>

      {/* Модалка */}
      <Modal open={!!activeModal} onClose={() => setActiveModal(null)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: activeModal === "signup" ? "90%" : "70%",
            maxWidth: activeModal === "signup" ? 900 : 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            height: "auto",
          }}
        >
          {activeModal === "signup" ? (
            <Signup
              onClose={() => setActiveModal(null)}
              onSwitchToLogin={() => setActiveModal("login")}
            />
          ) : (
            <Login
              onClose={() => setActiveModal(null)}
              onSwitchToSignup={() => setActiveModal("signup")}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default SignupSection;








