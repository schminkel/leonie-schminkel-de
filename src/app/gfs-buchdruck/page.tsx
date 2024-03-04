import PdfViewer from "@/app/components/PdfViewer";
import RefreshButton from "@/app/components/RefreshButton";

export default function Home(): React.JSX.Element {
  return (
    <main className="flex flex-col bg-gray-950">
      <div className={"fixed top-2 left-2 md:top-4 md:left-4 z-50"}>
        <RefreshButton />
      </div>
      <div className={"mt-0"}>
        <PdfViewer />
      </div>
    </main>
  );
}
