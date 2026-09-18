"use client";

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
          "fixed right-0 top-0 z-20 w-[50vw] h-screen bg-red-400 transition-all duration-1000",
          animateClose && "opacity-0",
        )}
      >
        sidebar
        <button
          className="absolute right-0 top-0"
          onClick={() => {
            setAnimateClose(true);
            sleep(1).then(() => setSidebarOpen(false));
          }}
        >
          <IoCloseSharp />
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
        className="z-20 hover:scale-110 transition-all hover:text-red-400 absolute right-0 top-0 mr-4 p-2 mt-4 rounded-md border border-white"
      >
        <MdOutlineMenu className="w-10 h-10" />
      </button>
    </>
  );
};
