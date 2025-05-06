import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PdfViewerProps {
  fileUrl: string;
}

const ViewDocument: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div style={{ height: "750px" }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
      >
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
          theme="dark"
        />
      </Worker>
    </div>
  );
};

export default ViewDocument;
