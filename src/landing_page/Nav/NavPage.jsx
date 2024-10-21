import React, { useState, useEffect } from "react";
import NavTop from "./NavTop";
import NavBottom from "./NavBottom";
import Filter from "../home/Filter";
import "./NavPage.css";

function NavPage() {
  const [navSmall, setNavSmall] = useState(false);

  // Add scroll listener on component mount
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // If user scrolls down more than 50px, shrink the nav
        setNavSmall(true);
      } else {
        // If user scrolls back up to top, restore the original nav size
        setNavSmall(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={navSmall ? "nav-small" : ""}>
        <NavTop />
        <NavBottom />
      </nav>
      <Filter />
    </header>
  );
}

export default NavPage;
