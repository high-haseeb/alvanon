import LineCloud from "../three/LineCloud";
import Scene from "../three/Model";

const Hero = () => {
  return (
    <div className="overflow-hidden w-screen h-screen text-white bg-black z-50 relative snap-end section">

      <LineCloud/>
      <div className="flex absolute top-1/2 left-1/2 flex-col gap-8 justify-center items-center p-4 w-full text-center -translate-x-1/2 -translate-y-1/2 lg:top-40 lg:left-40 lg:items-start lg:w-1/2 lg:text-left lg:translate-x-0 lg:translate-y-0">
        <div className="text-5xl font-medium lg:text-9xl lg:leading-[120px]">
          <div>We don't</div>
          <div className="font-semibold">
            make clothes,
            <br /> we make
            <br /> clothes <span className="text-orange-400">fit!</span>
          </div>
        </div>
        <div className="text-xs lg:w-1/2 lg:font-semibold">
          Meet Alvanon, a fashion tech company with a revolutionary idea;
          clothes that actually fit. Using size and body shape data from
          millions of consumers worldwide, we empower brands and retailers to
          build the perfect fit.
        </div>
        <button className="text-sm font-bold lg:text-xl hover:opacity-80">
          [ LEARN MORE ]
        </button>
      </div>
    </div>
  );
};
export default Hero;
