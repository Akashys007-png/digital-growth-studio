"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-red-100 mb-8">
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </div>

        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Something went wrong
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Unexpected Error
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          We couldn't complete your request. Please try again or return to the homepage.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            <Home size={18} />
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}