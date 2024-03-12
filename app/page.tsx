import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col">
      <PageTitle title="Home" />
      <p className="mb-12">
        This is a POC showing off what NextJS can do. This is not all features
        but some of them
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <PageTitle
            additionalClasses="mb-3"
            title="Whats in this POC?"
            variant="h2"
          />
          <p className="mb-8">
            Here are some of the things that are in this POC will cover and show
            you through out the pages
          </p>

          <ul className="list-inside list-disc">
            <li className="ml-4">
              <Link
                className="font-semibold underline"
                href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default"
              >
                Static rendering
              </Link>
              : React server components that rendered at build time.
            </li>
            <li className="ml-4">
              <Link
                className="font-semibold underline"
                href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering"
              >
                Dynamic rendering
              </Link>
              : React server components that rendered at request time. Note: you
              can have dynamic routes with cached data
            </li>
            <li className="ml-4">
              <Link
                className="font-semibold underline"
                href="https://nextjs.org/docs/app/building-your-application/rendering/client-components"
              >
                Client components
              </Link>
              : Allows you to write interactive UI&apos;s that is prerendered on
              the server and the JS is executed on the browser. Note: Examples
              of this is in another branch, so you will need to switch to that
              to see this
            </li>

            <li className="ml-4">
              <Link
                className="font-semibold underline"
                href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
              >
                Server actions
              </Link>
              : Allows you to write server side code that is executed on the
              server instead of the client.
            </li>
          </ul>
        </Card>
        <Card>
          <PageTitle
            additionalClasses="mb-3"
            title="Good Sources"
            variant="h2"
          />
          <p className="mb-8">
            Here are some helpful places to get help in understanding NextJS and
            its coolness
          </p>
          <ul className="list-inside list-disc">
            <li className="ml-4">
              <Link
                href="https://nextjs.org/docs/getting-started"
                target="_blank"
              >
                NextJS
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://www.prisma.io/docs" target="_blank">
                Prisma
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://vercel.com" target="_blank">
                Vercel
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://frontendmasters.com/" target="_blank">
                Frontend Masters
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Home;
