"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import HeroHandheld from "./_components/hero/hero-handheld";
import HeroDesktop from "./_components/hero/hero-desktop";
import FooterHandheld from "./_components/footer/footer-handheld";
import FooterDesktop from "./_components/footer/footer-desktop";

export default function HomePage() {
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
    return null;
  }

  return (
    <main className="mx-3 grow border-r border-l border-[#0099e6] md:mx-8 lg:mx-12 dark:border-[#005580]">
      {isSmallScreen ? <HeroHandheld /> : <HeroDesktop />}
      {isSmallScreen ? <FooterHandheld /> : <FooterDesktop />}
    </main>
  );
}   
