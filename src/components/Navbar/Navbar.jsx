"use client"

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()


  return (
    <div className=" shadow-md w-full">
      <div className="navbar fixed z-10 bg-opacity-50 md:px-10 bg-[#140e0646]  text-white">
        
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href={"/"}>
            <p className="text-3xl font-bold">

            Tailor
            </p>
            {/* <Image src={logo} width={100} height={100} alt="logo"></Image> */}
          </Link>
        </div>


        <div className=" hidden navbar-end  lg:flex">
          <div className="dropdown dropdown-hover mr-5">
            <div
              tabIndex={0}
              role=""
              className=" cursor-pointer flex items-center gap-2 m-1"
            >
              Services <IoIosArrowDown />{" "}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li>
                <Link href={"/services/softwareDevelopment"}>
                  Service 1
                </Link>
              </li>
              <li>
                <Link href={"/services/webApplication"}>Services 2</Link>
              </li>
              <li>
                <a>Services 3</a>
              </li>
            </ul>
          </div>

          <ul className=" space-x-8 menu-horizontal px-1">
            <li>
              <Link className={` ${pathname === '/' ? '"relative hover:border-b-2 border-amber-500 inline-block text-white hover:text-yellow-500 group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-500 group font-semibold pt-2 px-2'}`} href="/">Projects</Link>
            </li>
            <li>
              <Link className={` ${pathname === '/' ? '"relative hover:border-b-2 border-amber-500 inline-block text-white hover:text-yellow-500 group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-500 group font-semibold pt-2 px-2'}`} href="/">Team</Link>
            </li>

           
          </ul>
        </div>
        <div className="navbar-end">
    <p className="bg-yellow-500 px-3 py-2 rounded">Call Now </p>
  </div>
      </div>
    </div>
  );
};

export default Navbar;
