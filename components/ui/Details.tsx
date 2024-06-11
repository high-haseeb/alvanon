import React from "react";
import DotGround from "../three/DotGround";

const Details = () => {
  return (
    <div className="overflow-hidden relative z-30 w-screen h-screen text-black bg-white section">
      <div className="flex absolute top-1/2 left-1/2 gap-8 justify-between items-center  text-center -translate-x-1/2 -translate-y-1/2 
        lg:top-40 lg:left-0 px-80 lg:items-center lg:w-full lg:text-left lg:translate-x-0 lg:translate-y-0">
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-semibold lg:text-8xl">
            <div className="text-orange-400">Alvanon</div>
            has helped
            <br /> previous
            <br /> clients:
          </div>

          <div className="text-sm lg:w-1/2 w-2/3">
            Reduce seasonal product development calendars by up to 8 weeks, the number of physical samples reviewed by over 30%, and live fit model
            sessions to as few as one.
          </div>
        </div>
        <div className="flex flex-col gap-10 w-[20rem] ">
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
    <div className="flex flex-col font-bold">
      <div className="text-xl text-black font-semibold">{title}</div>
      <div className="text-8xl text-brOrange">{value}</div>
    </div>
  );
};

export default Details;
