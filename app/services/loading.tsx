export default function Loading() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="h-12 w-12 mx-auto rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />

        <h2 className="mt-6 text-2xl font-semibold">
          Loading Services...
        </h2>

        <p className="mt-2 text-gray-600">
          Please wait while we prepare everything for you.
        </p>
      </div>
    </main>
  );
}