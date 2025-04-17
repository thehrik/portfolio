import { useRouter } from "next/navigation";

interface NavBarOptions {
  options: "Home" | "About" | "Contact" | "Services" | "Blogs";
}

export default function NavBar() {
  const router = useRouter();

  function handleNavigation(option: NavBarOptions) {
    switch (option.options) {
      case "Home":
        router.push("/");
        break;
      case "About":
        router.push("/about");
        break;
      case "Contact":
        router.push("/contact");
        break;
      case "Services":
        router.push("/services");
        break;
      case "Blogs":
        router.push("/blogs");
        break;
    }
  }

  return (
    <header className="sticky top-0 z-20 flex h-[57px] w-full max-w-full items-center border-b border-[#0099e6] dark:border-[#005580]">
      <div className="relative mx-3 flex h-full w-full border-x border-[#0099e6] md:mx-8 lg:mx-12 dark:border-[#005580]">
        <nav className="relative flex h-full w-full items-center justify-between bg-white/30 px-8 backdrop-blur-md md:mx-auto md:max-w-[1248px] dark:bg-black/30">
          <div
            className="nav-elements-animation group relative flex h-8 w-20 cursor-pointer items-center justify-center text-black dark:text-white"
            onClick={() => handleNavigation({ options: "Home" })}
          >
            <span className="relative z-10 duration-300 group-hover:text-white dark:group-hover:text-black">
              ZaRikku
            </span>
            <div className="absolute left-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white"></div>
          </div>
          <div className="nav-elements-animation flex items-center gap-8">
            {["About", "Contact", "Blogs", "Services"].map((option) => (
              <div
                key={option}
                className="group relative flex h-8 w-20 cursor-pointer items-center justify-center text-black dark:text-white"
                onClick={() =>
                  handleNavigation({
                    options: option as NavBarOptions["options"],
                  })
                }
              >
                <span className="relative z-10 duration-300 group-hover:text-white dark:group-hover:text-black">
                  {option}
                </span>
                <div className="absolute left-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white"></div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
