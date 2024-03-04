"use client";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

export default function RefreshButton(): React.JSX.Element {
  return (
    <>
      <button
        onClick={() => {
          setTimeout(() => {
            document.location.reload();
          }, 200);
        }}
        type="button"
        aria-label={"Refresh the Page"}
        className="p-1 md:p-2 inline-flex items-center rounded-full bg-slate-600 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
      >
        <ArrowPathIcon className="h-3 w-3 md:h-5 md:w-5" aria-hidden="true" />
      </button>
    </>
  );
}
