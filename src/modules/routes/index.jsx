import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Index from "../../layouts";
import Test from "../../pages/test";
import PDFViewer from "../../pages/pdfviewer";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="/resume" element={<PDFViewer />} />
        </Route>
      </Routes>
    </Router>
  );
}
