"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-6 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-gray-500 border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-white dark:bg-gray-950 md:top-6"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;
