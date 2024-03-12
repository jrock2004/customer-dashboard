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
    "p-4 block w-full flex hover:bg-primaryDark text-purple-300 hover:text-purple-200 hover:font-bold focus:outline-none focus:ring-2 focus:ring-primaryLight focus:ring-offset-2 focus:ring-offset-primaryLight focus:ring-offset-2 transition-all duration-200 ease-in-out";
  const iconStartClasses = "h-6 w-6 text-inherit md:mr-2";
  const iconEndClasses = "h-4 w-4 ml-auto text-inherit self-center";
  const rightSideClasses = "hidden w-full md:flex";

  return (
    <nav className="flex w-52 flex-col border-r bg-primary pt-8" role="menu">
      <Link
        href="/"
        className={`${linkClasses}${pathname === "/" ? " bg-primaryLight font-semibold" : ""}`}
        aria-labelledby="home-link"
        tabIndex={0}
      >
        <HomeModernIcon className={iconStartClasses} />
        <div className={rightSideClasses}>
          <span id="home-link">Home</span>
          <ChevronRightIcon className={iconEndClasses} />
        </div>
      </Link>
      <Link
        href="/customers"
        className={`${linkClasses}${
          pathname === "/customers" ? " font-semibold" : ""
        }`}
        aria-labelledby="customers-link"
      >
        <UsersIcon className={iconStartClasses} />
        <div className={rightSideClasses}>
          <span id="customers-link">Customers</span>
          <ChevronRightIcon className={iconEndClasses} />
        </div>
      </Link>
      <Link
        href="/about"
        className={`${linkClasses}${
          pathname === "/about" ? " font-semibold" : ""
        }`}
        aria-labelledby="about-link"
      >
        <CpuChipIcon className={iconStartClasses} />
        <div className={rightSideClasses}>
          <span id="about-link">About</span>
          <ChevronRightIcon className={iconEndClasses} />
        </div>
      </Link>

      <Link
        href="/noend"
        className={`${linkClasses}${
          pathname === "/noend" ? " font-semibold" : ""
        }`}
        aria-labelledby="dont-click-link"
      >
        <NoSymbolIcon className={iconStartClasses} />
        <div className={rightSideClasses}>
          <span id="dont-click-link">Don&apos;t Click</span>
          <ChevronRightIcon className={iconEndClasses} />
        </div>
      </Link>
    </nav>
  );
};
