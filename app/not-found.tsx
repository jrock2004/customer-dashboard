import Link from "next/link";

export const NotFound = () => {
  return (
    <div className="mt-10 flex h-full flex-col items-center space-y-3">
      <div className="flex flex-col rounded border p-6 shadow">
        <div className="space-y4 flex flex-col">
          <h2 className="text-xl font-semibold">Not Found</h2>
          <p>
            We can&apos;t find the page you&apos;re looking for. Try reloading
            the page or use the action below.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="rounded border px-4 py-2 hover:bg-orange-300 hover:text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
