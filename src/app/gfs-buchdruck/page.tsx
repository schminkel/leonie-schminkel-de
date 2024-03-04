import PdfViewer from "@/app/components/PdfViewer";
import RefreshButton from "@/app/components/RefreshButton";

export default function Home(): React.JSX.Element {
  return (
    <main className="flex flex-col bg-black">
      {/*<div className={"fixed top-2 left-2 md:top-4 md:left-4 z-50"}>*/}
      <div className={"fixed bottom-2 right-2 md:bottom-4 md:right-4 z-50"}>
        <RefreshButton />
      </div>
      <div>
        <PdfViewer />
      </div>
    </main>
  );
}
