export default function FooterDesktop() {
  return (
    <div className="flex h-80 items-center justify-center bg-[#004d99]">
      <div className="flex h-[80%] w-[90%] flex-row items-center text-white">
        <div className="flex w-[350px] flex-col gap-2">
          <span className="flex text-sm"> Home </span>
          <span className="flex text-sm"> About </span>
          <span className="flex text-sm"> Contact </span>
          <span className="flex text-sm"> Services </span>
          <span className="flex text-sm"> Resume </span>
          <span className="pt-4 text-sm">
            {" "}
            Made with ❤️ by Subhajit aka Hrik{" "}
          </span>
        </div>
        <div className="h-full w-[2px] bg-white"></div>
        <div className="flex h-[80%] w-[350px] flex-col gap-2 pl-10">
          <span className="text-sm">GitHub</span>
          <span className="text-sm">LinkedIn</span>
          <span className="text-sm">Twitter</span>
        </div>
      </div>
    </div>
  );
}
