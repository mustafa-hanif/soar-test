"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  // error,
  reset,
}: {
  // error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="h-screen flex flex-col justify-center items-center">
        <h2>Something went wrong!</h2>
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
