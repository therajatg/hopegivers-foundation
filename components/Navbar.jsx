"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/images/nav-logo.png";
import { Donate } from "./Donate";
import Link from "next/link";
import { useModal } from "@/context/context";
import Image from "next/image";

export const Navbar = () => {
  const { modal, setModal } = useModal();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="w-full flex justify-between px-4 py-4 items-center bg-white">
      <Image
        src={logo}
        alt="logo"
        width={100}
        className="h-14 sm:mr-96 hover:cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div
        className={`lg:flex w-full justify-between items-center ${
          pathname === "/" ? "max-w-xl" : "max-w-2xl"
        } font-medium hover:cursor-pointer hidden`}
      >
        <button
          type="button"
          className={`text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 focus:outline-none ${
            pathname === "/" && "hidden"
          }`}
          onClick={() => setModal(true)}
        >
          Donate
        </button>
        <Link href="/" className="hover:underline">
          HOME
        </Link>
        <Link href="/about" className="hover:underline">
          ABOUT
        </Link>
        <Link href="/our-work" className="hover:underline">
          OUR WORK
        </Link>
        <Link href="/volunteer" className="hover:underline">
          VOLUNTEER
        </Link>
        <Link href="/contact-us" className="hover:underline">
          CONTACT US
        </Link>
        {pathname === "/admin" && localStorage.getItem("token") && (
          <p
            className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 focus:outline-none"
            onClick={logoutHandler}
          >
            LOGOUT
          </p>
        )}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 lg:hidden cursor-pointer"
        onClick={() => setDropdownOpen(true)}
      >
        <path
          fillRule="evenodd"
          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>

      {dropdownOpen && (
        <>
          <div
            className="fixed inset-0 zIndexOne"
            onClick={() => setDropdownOpen(false)}
          ></div>
          <div className="absolute zIndexOne right-0 top-16 w-48 bg-white rounded-md shadow-lg lg:hidden">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              ABOUT
            </Link>
            <Link
              href="/our-work"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              OUR WORK
            </Link>
            <Link
              href="/volunteer"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              VOLUNTEER
            </Link>
            <Link
              href="/contact-us"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              CONTACT US
            </Link>
            {pathname === "/admin" && localStorage.getItem("token") && (
              <p
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  logoutHandler();
                  toggleDropdown();
                }}
              >
                LOGOUT
              </p>
            )}
          </div>
        </>
      )}

      {modal && <Donate modal={modal} setModal={setModal} />}
    </nav>
  );
};
