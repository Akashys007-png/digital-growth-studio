import Link from "next/link";
import { SearchX, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 mb-8">
          <SearchX className="w-12 h-12 text-blue-600" />
        </div>

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          404 Error
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Sorry, the page you&apos;re looking for does&apos;t exist, may have been
          moved, or the URL may be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            <Home size={18} />
            Back Home
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}