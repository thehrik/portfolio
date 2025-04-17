export default function HeroHandheld() {
  return (
    <div className="md:width-[400] relative flex h-150 flex-col items-center justify-center gap-6 bg-gradient-to-t from-[#99ddff] to-[white] lg:w-full dark:from-[#00264d] dark:to-[black]">
      <div className="flex h-35 w-35 rounded-[15px] bg-white"></div>
      <div className="flex h-35 w-80 flex-col text-center align-middle text-black dark:text-white">
        <span className="text-[30px] font-bold text-[#0059b3] dark:text-[#80bfff]">
          Subhajit Malakar
        </span>
        <span className="pt-6 text-sm">
          Im a just a enthusiast developer who loves to build cool stuffs.
          <br />
          Specialities: NEXTJS, DOCKER, SHELL
        </span>
      </div>
    </div>
  );
}
