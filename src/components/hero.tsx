import localFont from "@next/font/local";

const Robuck = localFont({
  src: "../../public/fonts/robuck/Robuck Regular.otf",
});

export const Hero = () => {
  return (
    <div className="min-h-screen">
    <div className="absolute bottom-0 left-5">
      <h1 className={`text-[260px] tracking-[-0.015em] leading-[190px] uppercase ${Robuck.className}`}>
        software developer
      </h1>
    </div>
    </div>
  );
};
