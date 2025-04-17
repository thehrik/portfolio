import { useEffect, useState } from "react";

export default function HamburgerMenuIcon() {
  const [isDark, setIsDark] = useState<boolean>();

  // Detect system theme preference
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(systemTheme.matches ? true : false);

    // Listen for changes in system theme
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches ? true : false);
    };
    systemTheme.addEventListener("change", handleChange);

    return () => {
      systemTheme.removeEventListener("change", handleChange);
    };
  }, []);
  return (
    <div className="align-center border-[#b3b3b3] flex h-[34px] w-[34px] justify-center rounded-[4px] border-1 dark:border-[#404040]">
      <svg
        fill={isDark ? "#66b3ff" : "#0066cc"}
        width={14}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        transform="matrix(-1, 0, 0, 1, 0, 0)"
        stroke={isDark ? "#66b3ff" : "#0066cc"}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>
        </g>
      </svg>
    </div>
  );
}
