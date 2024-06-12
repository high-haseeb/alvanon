import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="overflow-hidden z-30 w-screen h-screen text-white bg-black section pt-40 pb-20 flex flex-col items-center justify-between" id="clients">
      <div className="flex text-8xl font-bold items-end justify-center gap-20 px-40 w-full">
        <span>
          Meet Our <span className="text-brOrange ">Clients</span>
        </span>
        <div className="h-[1px] rounded-xl bg-gray-300 flex-grow" />
      </div>
      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] flex flex-col">
        <div className="animate-slide-left hover:animation-pause inline-block w-max">
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
        </div>

        <div className="animate-slide-left hover:animation-pause inline-block w-max">
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
        </div>

        <div className="animate-slide-left hover:animation-pause inline-block w-max">
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
          <img className="mx-10 inline h-40" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
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
