import React from "react";
import DotGround from "../three/DotGround";

const Details = () => {
  return (
    <div className="overflow-hidden p-10 relative z-30 w-screen h-screen text-black bg-white section flex items-center justify-center" id="dotGround">

      <div className="flex flex-col gap-6 lg:flex-row lg:absolute justify-center lg:justify-between items-center text-center lg:top-40 lg:left-0 lg:px-80 lg:items-center lg:w-full lg:text-left lg:translate-x-0 lg:translate-y-0 mb-32 lg:mb-0">

        <div className="flex flex-col gap-4 items-center lg:items-start justify-center w-full">
          <div className="text-5xl font-semibold lg:text-8xl">
            <div className="text-orange-400">Alvanon</div>
            has helped
            <br /> previous
            <br /> clients:
          </div>

          <div className="text-xs lg:text-sm lg:w-1/2 lg:p-0">
            Reduce seasonal product development calendars by up to 8 weeks, the number of physical samples reviewed by over 30%, and live fit model
            sessions to as few as one.
          </div>
        </div>

        <div className="flex lg:flex-col gap-2 lg:gap-10 lg:w-[20rem] w-full">
          <Stat title="Improve coversion rates by upto" value="10%" />
          <Stat title="Icrease full price sell-through by up to" value="5%" />
          <Stat title="Decrease appearal returns by up to" value="30%" />
        </div>

      </div>
      <DotGround />
    </div>
  );
};
const Stat = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col font-bold items-center lg:items-start justify-end gap-4">
      <div className="text-xs lg:text-xl text-black font-semibold w-2/3 lg:w-full lg:pr-8">{title}</div>
      <div className="text-4xl lg:text-8xl text-brOrange">{value}</div>
    </div>
  );
};

export default Details;
