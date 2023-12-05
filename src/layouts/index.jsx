import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../modules/scrolltotop";
import Navigation from "../features/navigation";

export default function Index() {
  return (
    <ScrollToTop>
      <Navigation />
      <Outlet />
      <footer className="text-center sm:text-start p-6 sm:py-6 sm:px-12" style={{backgroundColor: "#eee"}}>
        <p>&copy; Rakha Putra 2023.</p>
      </footer>
    </ScrollToTop>
  );
}
