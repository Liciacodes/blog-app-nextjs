"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NavData } from "../NavData";
import NavItem from "./NavItem";

function Navbar() {
  // const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between border border-white border-t-0 border-r-0 border-l-0  h-24 py-4 w-full">
        <div className="flex text-xl gap-8 ">
          <div className="">
            <Link href="/">
              <Image
                src="data:image/jpeg;base64,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
            "
                className="bg-black rounded-full"
                width={40}
                height={40}
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:justify-between gap-5 text-white 4 ">
            {NavData.map((item) => (
              <NavItem name={item.name} href={item.link} key={item.id} />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center gap-6">
          <Link href={"#"}>
            <Image
              src="/icons8-twitter-30.png"
              width={30}
              height={30}
              className=""
            />
          </Link>
          <Link href={"#"}>
            <Image
              src="/icons8-instagram-30.png"
              width={30}
              height={30}
              className=" "
            />
          </Link>
          <Link href={"#"}>
            <Image
              src="/dribbble-logo-fill.png"
              width={30}
              height={30}
              className=""
            />
          </Link>
          <Link href={"#"} className="">
            <Image
              src="/icons8-linkedin-30.png"
              width={30}
              height={30}
              className=" icon text-white"
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <Image
                src="/icons8-close-50.png"
                alt="close"
                className="text-pink-500"
                width={40}
                height={40}
                priority
              />
            ) : (
              <Image
                src="/icons8-menu-50.png"
                alt="menu"
                className="focus:border-none active:border-none"
                width={40}
                height={40}
                priority
              />
            )}
          </button>
        </div>
      </div>
      <div>
        <div className={`${navbar ? "ease-in-out duration-300 " : "hidden"}`}>
          <div className='"p-12 md:p-0  flex flex-col items-center h-[85vh]  text-white bg-pink-500 lg:hidden "'>
            <Link
              href="/learn"
              className="my-8 border-b-2 "
              onClick={() => setNavbar(!navbar)}
            >
              LEARN
            </Link>
            <Link
              href="/"
              className="my-8 border-b-2"
              onClick={() => setNavbar(!navbar)}
            >
              BLOG
            </Link>
            <Link
              href="/bookmarks"
              className="my-8 border-b-2"
              onClick={() => setNavbar(!navbar)}
            >
              BOOKMARKS
            </Link>
            <Link
              href="/uikits"
              className="my-8 border-b-2"
              onClick={() => setNavbar(!navbar)}
            >
              UI KIT
            </Link>
            <Link
              href="/lain"
              className=" my-8 border-b-2"
              onClick={() => setNavbar(!navbar)}
            >
              LAIN NYA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

/*<div>
      <nav className="w-full fixed top-0 right-0 z-10">
        <div className="flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8"></div>
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href={"/"}>
              <h2 className="text-3xl bg-[#f8505c] text-white font-bold rounded-full px-2 py-1 m-2">
                D
              </h2>
            </Link>
            <div>
              <Link href={"#"} className="text-white text-xl">
                Learn
              </Link>
              <Link href={"#"} className="text-white text-xl">
                Blog
              </Link>
              <Link href={"#"} className="text-white text-xl">
                Bookmark
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-600"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src="/close.png"
                    width={50}
                    height={50}
                    alt="logo"
                    priority
                    className="focus:border-none active:border-none text-red-600 bg-white"
                  />
                ) : (
                  <Image
                    src="/menu.png"
                    width={50}
                    height={50}
                    priority
                    alt="logo"
                    className="focus:border-none active:border-none text-yellow-600 bg-white"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div> */
