'use client';
import { Viewer, Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

import { ProgressBar } from '@react-pdf-viewer/core';

export default function PdfViewer(): React.JSX.Element {

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const fullScreenPluginInstance = fullScreenPlugin();

  return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <Viewer
              fileUrl="/gfs-buchdruck.pdf"
              plugins={[fullScreenPluginInstance]}
              renderLoader={(percentages: number) => (
                  <div style={{ width: '240px' }}>
                    <ProgressBar progress={Math.round(percentages)} />
                  </div>
              )}
              theme={{
                theme: 'dark',
              }}
          />
      </Worker>
  );
}
