import Link from "next/link";
import { Button } from "@/components/Button";
import { PageTitle } from "@/components/PageTitle";

export const NotFound = () => {
  return (
    <div className="mt-10 flex h-full flex-col items-center space-y-3">
      <div className="flex flex-col rounded border p-6 shadow">
        <div className="space-y4 flex flex-col">
          <PageTitle title="Not Found" variant="h2" />
          <p>
            We can&apos;t find the page you&apos;re looking for. Try reloading
            the page or use the action below.
          </p>
        </div>
        <div className="mt-10">
          <Button>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
