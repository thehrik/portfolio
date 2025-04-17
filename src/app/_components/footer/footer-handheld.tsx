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
          <div className="h-[2px] w-full bg-white"></div>
          <span className="flex text-sm">
            {" "}
            I'm a developer who is still in the process of learning and always
            will be. Being a self-taught developer I'm always looking for new
            opportunities to learn and grow. I'm passionate about technology and
            I always look for new ways to improve my skills. Right now my main
            focus is on web and app development using React, React Native, and
            Next.js. I'm also trying to learn docker and shell scripting.
          </span>
          <span className="pt-4 text-sm">
            {" "}
            Made with ❤️ by Subhajit aka Hrik{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
