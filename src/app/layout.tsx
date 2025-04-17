"use client";

import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import NavBarDesktop from "./_components/navbar/nav-bar-desktop";
import { useEffect, useState } from "react";
import NavBarHandheld from "./_components/navbar/nav-bar-handheld";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // This code runs only on the client-side
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Set initial value on client-side mount
    handleResize();

    setIsMounted(true);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMounted) {
    <html lang="en" className={`${geist.variable}`}>
      <body className="relative min-h-screen w-screen overflow-x-hidden"></body>
    </html>;
  }

  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="relative min-h-screen w-screen overflow-x-hidden">
        <div className="relative flex min-h-screen w-full flex-none flex-col justify-between">
          {isSmallScreen ? <NavBarHandheld /> : <NavBarDesktop />}
          {children}
        </div>
      </body>
    </html>
  );
}
