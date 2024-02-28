import Link from "next/link";
import {
  ChevronRightIcon,
  CpuChipIcon,
  HomeModernIcon,
  NoSymbolIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const MainNav = () => {
  const linkClasses =
    "p-4 block w-full flex hover:bg-orange-300 text-gray-500 hover:text-white hover:font-bold";
  const iconStartClasses = "h-6 w-6 mr-2 text-inherit";
  const iconEndClasses = "h-4 w-4 ml-auto text-inherit self-center";

  return (
    <nav className="flex flex-col w-52 pt-8 bg-gray-100 border-r border-orange-300">
      <Link href="/" className={linkClasses}>
        <HomeModernIcon className={iconStartClasses} />
        Home
        <ChevronRightIcon className={iconEndClasses} />
      </Link>
      <Link href="/customers" className={linkClasses}>
        <UsersIcon className={iconStartClasses} />
        Customers
        <ChevronRightIcon className={iconEndClasses} />
      </Link>
      <Link href="/about" className={linkClasses}>
        <CpuChipIcon className={iconStartClasses} />
        About
        <ChevronRightIcon className={iconEndClasses} />
      </Link>
      <Link href="/noend" className={linkClasses}>
        <NoSymbolIcon className={iconStartClasses} />
        Don&apos;t Click
        <ChevronRightIcon className={iconEndClasses} />
      </Link>
    </nav>
  );
};
