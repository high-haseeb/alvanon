import React from "react";
import DotGround from "../three/DotGround";

const Details = () => {
  return (
    <div className="overflow-hidden relative z-30 w-screen h-screen text-black bg-white section">
      <div className="flex absolute top-1/2 left-1/2 flex-col gap-8 justify-center items-center p-4 w-full text-center -translate-x-1/2 -translate-y-1/2 lg:top-40 lg:left-40 lg:items-start lg:w-1/2 lg:text-left lg:translate-x-0 lg:translate-y-0">
        <div className="text-5xl font-semibold lg:text-9xl lg:leading-[120px]">

          <div className="text-orange-400">Alvanon</div>
          <span >
            has helped<br /> previous clients:
          </span>
        </div>

          <div className="text-xs lg:w-1/2 w-2/3 lg:font-semibold">
            Reduce seasonal product development calendars by up to 8 weeks, the
            number of physical samples reviewed by over 30%, and live fit model
            sessions to as few as one.
          </div>
      </div>
      <DotGround/>
    </div>
  );
};

export default Details;
