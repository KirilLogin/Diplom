import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "./menu-item";
import SearchBar from "./search-bar";
import { Drawer, IconButton, Modal, Box } from "@mui/material";
import Button from "./button";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import Login from "../homepage/modal/login";
import Signup from "../homepage/modal/signup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  const menuItems = [
    { title: "About", create: false },
    { title: "Quizzes", create: true },
    { title: "Learn", create: false },
    { title: "Contact", create: true },
    { title: "+ Create", create: true, highlight: true }, // Только здесь подсветка
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 py-1 mx-5 z-50 bg-white">
        <Image
          src="/Assets/hovered-logo.png"
          width={120}
          height={120}
          alt="logo"
          className="cursor-pointer"
        />

        <div className="hidden lg:flex space-x-6 ml-10">
          {menuItems.slice(0, 4).map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>

        <div className="hidden lg:flex flex-1 max-w-sm">
          <SearchBar />
        </div>

        <MenuItem {...menuItems[4]} />

        <div className="hidden lg:block">
          <Button text={"Log in"} onClick={() => openModal("login")} />
        </div>

        <div className="lg:hidden">
          <IconButton onClick={toggleMenu} color="primary">
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{
          width: "250px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            padding: "20px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          },
        }}
      >
        <div className="flex justify-end mb-4">
          <IconButton onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </div>

        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
        <Button text={"Log in"} onClick={() => openModal("login")} />
      </Drawer>

      <Modal open={!!activeModal} onClose={closeModal}>
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
              onClose={closeModal}
              onSwitchToLogin={() => openModal("login")}
            />
          ) : (
            <Login
              onClose={closeModal}
              onSwitchToSignup={() => openModal("signup")}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;


