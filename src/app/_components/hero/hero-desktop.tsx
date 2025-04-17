export default function HeroDesktop() {
  return (
    <div className="md:width-[400] relative flex h-150 flex-row items-center justify-center gap-10 bg-gradient-to-t from-[#99ddff] to-[white] lg:w-full dark:from-[#00264d] dark:to-[black]">
      <div className="flex h-35 w-35 rounded-[15px] bg-white"></div>
      <div className="flex h-35 flex-col justify-center align-middle text-black md:max-w-120 lg:max-w-150 dark:text-white">
        <div className="flex flex-col">
          <span className="text-[40px] font-bold text-[#0059b3] dark:text-[#80bfff]">
            Subhajit Malakar
          </span>
          <span className="text-sm">
            Im a just a enthusiast developer who loves to build cool stuffs.
            <br />
            Specialities: NEXTJS, DOCKER, SHELL
          </span>
        </div>
      </div>
    </div>
  );
}
