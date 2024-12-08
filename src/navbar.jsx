import React, { useState, useEffect } from "react";
import WaifuList from "./chat.jsx"; // Import the WaifuList component

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false); // State for WaifuList visibility

  // Toggle navbar collapse
  const toggleNavbar = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Handle scrolling for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle WaifuList popup
  const toggleWaifuList = () => {
    setIsChatVisible((prev) => !prev);
    setIsCollapsed(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-bold" href="#">
          <strong>My </strong>
          <strong style={{ color: "#00adb5" }}>Portfolio</strong>
        </a>

        {/* Menu Button */}
        <input
          type="checkbox"
          id="menu-toggle"
          className="menu"
          checked={isCollapsed}
          onChange={toggleNavbar}
        />
        <label htmlFor="menu-toggle" className="menu-icon"></label>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            {/* WaifuList button */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={{ textDecoration: "none" }}
                onClick={toggleWaifuList}
              >
                List Waifu
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* WaifuList Component */}
      {isChatVisible && <WaifuList onClose={toggleWaifuList} />}
    </nav>
  );
};

export default Navbar;
