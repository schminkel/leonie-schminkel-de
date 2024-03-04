"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";

import { ProgressBar } from "@react-pdf-viewer/core";

export default function PdfViewer(): React.JSX.Element {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const fullScreenPluginInstance = fullScreenPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer
        fileUrl="/gfs-buchdruck.pdf"
        plugins={[fullScreenPluginInstance]}
        renderLoader={(percentages: number) => (
          <div
            className={
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }
          >
            <div className={"w-80 md:w-96"}>
              <ProgressBar progress={Math.round(percentages)} />
            </div>
          </div>
        )}
        theme={{
          theme: "dark",
        }}
      />
    </Worker>
  );
}
