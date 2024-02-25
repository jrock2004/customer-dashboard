import Link from "next/link";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center mt-10 space-y-3 h-full">
      <div className="flex flex-col border p-6 rounded shadow">
        <div className="flex flex-col space-y4">
          <h2 className="text-xl font-semibold">Not Found</h2>
          <p>
            We can&apos;t find the page you&apos;re looking for. Try reloading
            the page or use the action below.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="border rounded px-4 py-2 hover:bg-orange-300 hover:text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
