import { IconAlignCenter, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import jsonData from "../../data/data.json";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [show, setShow] = useState(false);

  function handleNavbar() {
    setShow((prev) => !prev);
  }

  return (
    <nav>
      <div className="hidden lg:flex w-screen fixed top-0 left-0 justify-between items-center shadow-sm md:px-20 md:py-4 bg-white z-10">
        <div id="logo">Rakha Putra</div>
        <div className="flex justify-center items-center gap-4">
          {jsonData.navigation.map((nav, i) => (
            <Link key={i} to={nav.url} className="navbar-link">
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:hidden bg-white">
        <div
          className={`w-full fixed left-0 flex justify-between items-center bg-white shadow-sm transition-all duration-1000 p-4 z-10`}
        >
          <div id="logo">Rakha Putra</div>
          <IconAlignCenter onClick={handleNavbar} />
        </div>
        <div
          className={`navigation-menu ${
            show ? "navigation-show" : "navigation-close"
          } z-10`}
        >
          <div className="flex justify-between items-center bg-white shadow-sm p-4">
            <div id="logo">Rakha Putra</div>
            <IconX onClick={handleNavbar} />
          </div>
          <div className="flex justify-center flex-col">
            {jsonData.navigation.map((nav, i) => (
              <Link
                key={i}
                to={nav.url}
                className="navbar-link"
                onClick={handleNavbar}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
