"use client";

import { useFormStatus } from "react-dom";

export const ClientAddSubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="border bg-orange-500 p-3 text-white disabled:cursor-not-allowed disabled:bg-orange-500"
      disabled={pending}
    >
      <div className="flex">
        {pending && (
          <svg
            className="mr-3 h-5 w-5 animate-spin"
            aria-hidden="true"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {pending ? "Adding..." : "Add Customer"}
      </div>
    </button>
  );
};
