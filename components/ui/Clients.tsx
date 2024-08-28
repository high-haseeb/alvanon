import React from "react";
import AnimatedText from "./AnimatedText";

const Clients = () => {
  return (
    <div className="overflow-hidden z-30 w-screen h-screen text-white bg-black section lg:pt-40 lg:pb-20 flex flex-col items-center gap-10 justify-center" id="clients">

      <div className="flex-col lg:flex lg:flex-row text-4xl lg:text-8xl font-bold items-center lg:items-end justify-between h-auto px-10 lg:px-40 w-full ">
        <div className="">
          <AnimatedText>Meet Our <span className="text-brOrange ">Clients</span></AnimatedText>
        </div>
        <div className="h-[1px] rounded-xl bg-gray-300 lg:flex-grow w-full mt-10 lg:mt-0" />
      </div>

      <div className="logos group flex flex-col gap-10">
        
        <div className="imgBox scroll w-screen">
          <div>
            <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
          </div>

          <div >
            <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
          </div>
        </div>

        
        <div className="imgBox scroll w-screen">
          <div>
            <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
              <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
              <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
          </div>

          <div >
            <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
              <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
              <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
          </div>
        </div>

        
        <div className="imgBox scroll w-screen">
          <div>
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
              <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
              <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
          </div>

          <div >
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
              <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
              <img className="" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
            <img className="" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
          </div>
        </div>


      </div>
      <button className="text-sm font-bold lg:text-xl hover:opacity-80 hover:gap-1 flex gap-0 transition">
        <p>[</p>
        <p>SEE</p>
        <p>&nbsp;</p>
        <p>ALL</p>
        <p>&nbsp;</p>
        <p>CLIENTS</p>
        <p>]</p>
      </button>
    </div>
  );
};

export default Clients;
