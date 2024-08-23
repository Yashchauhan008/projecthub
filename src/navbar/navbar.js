import React, { useEffect, useState } from "react";
import "./navbar.css";
import avtar from "../assets/avtr.jpg";
import blob1 from "../assets/blob1.png";
import blob2 from "../assets/blob2.png";
import blob3 from "../assets/blob3.png";
import blob4 from "../assets/blob4.png";
import blob5 from "../assets/blob5.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false); // Hardcoded to false for now
  const location = useLocation();
  const [selecteditem, setselecteditem] = useState(null);
  const [activeContent, setActiveContent] = useState(null);
  const [navMaskStyles, setNavMaskStyles] = useState({
    height: 0,
    width: 0,
    opacity: "0.5",
    backdropFilter: "none",
  });

  const handleItemHover = (index) => {
    setActiveContent(index);
  };

  const handleItemClick = (index) => {
    setselecteditem(index);
  };

  const handleNavbarHover = () => {
    setNavMaskStyles({
      height: "100%",
      width: "100%",
      opacity: "1",
      backdropFilter: "blur(10px)",
    });
  };

  const handleNavbarLeave = () => {
    setNavMaskStyles({
      height: 0,
      width: 0,
      opacity: "0",
      backdropFilter: "none",
    });
    setActiveContent(null);
  };

  // Removed the useEffect hook since getIsAdmin is not available

  return (
    <>
      <div className="navmask" style={navMaskStyles}></div>
      <div
        className="navbar"
        onMouseEnter={handleNavbarHover}
        onMouseLeave={handleNavbarLeave}
      >
        <div className="navitems">
          <a
            className={`item ${
              selecteditem === 0 || location.pathname === "/" ? "selected" : ""
            }`}
            onMouseEnter={() => handleItemHover(0)}
            onClick={() => handleItemClick(0)}
          >
            <Link to="/">home</Link>
          </a>
          <a
            className={`item ${
              selecteditem === 1 || location.pathname === "/explore"
                ? "selected"
                : ""
            }`}
            onMouseEnter={() => handleItemHover(1)}
            onClick={() => handleItemClick(1)}
          >
            <Link to="/explore">explore</Link>
          </a>
          {/* {isAdmin ? (
            <a
              className={`item ${
                selecteditem === 2 || location.pathname === "/admin"
                  ? "selected"
                  : ""
              }`}
              onMouseEnter={() => handleItemHover(2)}
              onClick={() => handleItemClick(2)}
            >
              <Link to="/admin">admin panel</Link>
            </a>
          ) : (
            <a
              className={`item ${selecteditem === 2 ? "selected" : ""}`}
              onMouseEnter={() => handleItemHover(2)}
              onClick={() => handleItemClick(2)}
            >
              <Link to="/upload">upload project</Link>
            </a>
          )} */}
          <a
            className={`item ${selecteditem === 4 ? "selected" : ""}`}
            onMouseEnter={() => handleItemHover(4)}
            onClick={() => handleItemClick(4)}
          >
            <Link to="/Profile">profile</Link>
          </a>
        </div>
        <div className="navprofile">
          <img src={avtar} alt="Avatar" />
        </div>
      </div>
      <div
        className={`itemcontent ${
          navMaskStyles.height === "100%" ? "display-block" : "display-none"
        }`}
      >
        <div className={`content ${activeContent === 0 ? "active" : ""}`}>
          <img src={blob1} alt="Blob 1" />
          <h2>home</h2>
        </div>
        <div className={`content ${activeContent === 1 ? "active" : ""}`}>
          <img src={blob2} alt="Blob 2" />
          <h2>explore</h2>
        </div>
        {/* {isAdmin ? (
          <div className={`content ${activeContent === 2 ? "active" : ""}`}>
            <img src={blob3} alt="Blob 3" />
            <h2>admin panel</h2>
          </div>
        ) : (
          <div className={`content ${activeContent === 2 ? "active" : ""}`}>
            <img src={blob3} alt="Blob 3" />
            <h2>upload project</h2>
          </div>
        )} */}
        <div className={`content ${activeContent === 4 ? "active" : ""}`}>
          <img src={blob5} alt="Blob 4" />
          <h2>profile</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;