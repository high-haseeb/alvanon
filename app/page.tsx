import LineCloud from "@/components/three/LineCloud";

export default function Home() {
  return (
    <main className="w-screen h-screen text-white bg-black">
      <LineCloud />
      <Hero />
    </main>
  );
}
const Hero = () => {
  return (
    <div className="flex absolute left-40 top-40 flex-col gap-8 justify-center items-start w-1/2">
      <div className="z-50 text-9xl font-medium leading-[120px]">
        <div>We don't</div>
        <div className="font-semibold">
          make clothes,
          <br /> we make
          <br /> clothes <span className="text-orange-400">fit!</span>
        </div>
      </div>
      <div className=" w-1/2 font-semibold">
        Meet Alvanon, a fashion tech company with a revolutionary idea; clothes
        that actually fit. Using size and body shape data from millions of
        consumers worldwide, we empower brands and retailers to build the
        perfect fit.
      </div>
      <button className="font-bold text-xl hover:opacity-80">
        [ LEARN MORE ]
      </button>
    </div>
  );
};
