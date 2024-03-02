"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRightIcon,
  CpuChipIcon,
  HomeModernIcon,
  NoSymbolIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const MainNavClient = () => {
  const pathname = usePathname();
  const linkClasses =
    "p-4 block w-full flex hover:bg-orange-300 text-gray-500 hover:text-white hover:font-bold";
  const iconStartClasses = "h-6 w-6 mr-2 text-inherit";
  const iconEndClasses = "h-4 w-4 ml-auto text-inherit self-center";

  return (
    <nav className="flex w-52 flex-col border-r border-orange-300 bg-gray-100 pt-8">
      <Link
        href="/"
        className={`${linkClasses}${pathname === "/" ? " font-semibold" : ""}`}
      >
        <HomeModernIcon className={iconStartClasses} />
        Home
        <ChevronRightIcon className={iconEndClasses} />
      </Link>
      <Link
        href="/CustomersClient"
        className={`${linkClasses}${
          pathname === "/CustomersClient" ? " font-semibold" : ""
        }`}
      >
        <UsersIcon className={iconStartClasses} />
        Customers
        <ChevronRightIcon className={iconEndClasses} />
      </Link>
      <Link
        href="/about"
        className={`${linkClasses}${
          pathname === "/about" ? " font-semibold" : ""
        }`}
      >
        <CpuChipIcon className={iconStartClasses} />
        About
        <ChevronRightIcon className={iconEndClasses} />
      </Link>
      <Link
        href="/noend"
        className={`${linkClasses}${
          pathname === "/noend" ? " font-semibold" : ""
        }`}
      >
        <NoSymbolIcon className={iconStartClasses} />
        Don&apos;t Click
        <ChevronRightIcon className={iconEndClasses} />
      </Link>
    </nav>
  );
};
