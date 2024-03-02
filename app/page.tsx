import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold">Home</h1>
      <p className="mb-6">
        This is a POC showing off what NextJS can do. This is not all features
        but some of them
      </p>
      <div>
        <h2 className="mb-3 font-semibold">Good Sources</h2>
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
      </div>
    </div>
  );
};

export default Home;
