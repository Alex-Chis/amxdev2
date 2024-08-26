import "./navbar.css";
import { useState } from "react";

export default function Navbar({ onPageChange, isLoggedIn, handleLogout }) {
  const [currentPage, setCurrentPage] = useState("login");

  const handlePageChange = (page) => {
    onPageChange(page);
  };
  return (
    <nav>
      <h2>Amx</h2>
      <ul>
        {isLoggedIn === false ? (
          <li>
            <a onClick={() => handlePageChange("signup")} href="#">
              Sign Up
            </a>
          </li>
        ) : (
          <li>
            <a
              onClick={() => {
                handlePageChange("login");
                handleLogout();
              }}
              href="#"
            >
              Logout
            </a>
          </li>
        )}

        <li>
          <a onClick={() => handlePageChange("about")} href="#">
            About
          </a>
        </li>
        <li>
          <a onClick={() => handlePageChange("contact")} href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
