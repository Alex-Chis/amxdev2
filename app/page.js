"use client";
import "./page.css";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import About from "./components/about";
import Contact from "./components/contact";

import { useEffect, useState } from "react";
import Views from "./components/views";
import ProjectList from "./components/projectList";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar
        onPageChange={handlePageChange}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
      />
      {currentPage === "login" && (
        <Login onLogin={handleLogin} handlePageChange={handlePageChange} />
      )}
      {currentPage === "signup" && <Signup />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "projectList" && <ProjectList />}
      <Views />
    </div>
  );
}
