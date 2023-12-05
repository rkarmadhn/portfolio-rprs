import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function PDFViewer() {
  return (
    <div className="w-full min-h-screen pt-20">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="cv-rakha-putra-ramadhan-syahlan.pdf" />
      </Worker>
    </div>
  );
}
