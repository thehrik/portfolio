export default function FooterHandheld() {
  return (
    <div className="flex h-100 items-center justify-center bg-[#004d99]">
      <div className="flex h-[80%] w-[90%] flex-row items-center text-white">
        <div className="flex w-full flex-col gap-2">
          <span className="flex text-sm"> Home </span>
          <span className="flex text-sm"> About </span>
          <span className="flex text-sm"> Contact </span>
          <span className="flex text-sm"> Services </span>
          <span className="flex text-sm"> Resume </span>
          <div className="h-[2px] my-2 w-full bg-white"></div>
          <div className="text-sm">
            <span className="text-sm">GitHub</span>
            {" | "}
            <span className="text-sm">LinkedIn</span>
            {" | "}
            <span className="text-sm">Twitter</span>
          </div>
          <span className="pt-2 text-sm">
            Made with ❤️ by Subhajit aka Hrik{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
