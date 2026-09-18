"use client";
import { Audiowide } from "next/font/google";

const audioWide = Audiowide({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

import { routes } from "@app/lib";
import { sleep } from "@app/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export const SidebarNav = () => {
  const path = usePathname();
  const [isSideBarOpen, setSidebarOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);
  if (path === "/") return;

  if (isSideBarOpen) {
    return (
      <div
        className={twMerge(
          "transform flex items-center justify-center flex-col gap-8 fixed right-0 top-0 z-20 w-screen fade-in slideInFromBottom h-screen bg-black transition-all duration-1000",
          animateClose && "opacity-0 translate-y-[100vh]",
        )}
      >
        <h2
          className={`${audioWide.className} capitalize bold text-3xl text-red-800 `}
        >
          <a href="/">Home</a>
        </h2>
        {routes.map((route) => {
          const href = `/${route}`;
          if (href === path) return;
          return (
            <h2
              key={route}
              className={`${audioWide.className} capitalize bold text-3xl text-red-800 `}
            >
              <a href={href}>{route}</a>
            </h2>
          );
        })}
        <button
          className="border border-white rounded-full p-2"
          onClick={() => {
            setAnimateClose(true);
            sleep(1).then(() => setSidebarOpen(false));
          }}
        >
          <IoCloseSharp className="w-10 h-10" />
        </button>
      </div>
    );
  }
  return (
    <>
      <button
        onClick={() => {
          setSidebarOpen(true);
          setAnimateClose(false);
        }}
        className="z-20 hover:scale-110 transition-all hover:text-red-400 absolute right-4 bottom-4 p-2 rounded-full border border-white"
      >
        <MdOutlineMenu className="w-8 h-8" />
      </button>
    </>
  );
};
