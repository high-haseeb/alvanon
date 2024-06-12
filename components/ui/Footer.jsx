import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    { title: "Timeline", value: "/" },
    { title: "Meet the team", value: "/" },
    { title: "Our Clients", value: "/" },
    { title: "Affiliations", value: "/" },
    { title: "Academic Partners", value: "/" },
    { title: "Collaborations", value: "/" },
  ];
  return (
    <div className="w-screen h-screen section bg-black pt-40 px-40 text-white flex flex-col" id="about">
      <div className="flex text-8xl font-bold items-end justify-center gap-20">
        <span>
          Stay <span className="text-brOrange ">Connected </span>
        </span>
        <div className="h-[1px] rounded-xl bg-gray-300 flex-grow" />
      </div>
      <div className="text-center text-2xl font-semibold flex items-center justify-center flex-grow flex-col gap-20">
        <div className="w-1/2">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
        <div className="flex flex-row font-bold text-xl gap-4 px-20 w-full">
          <input
            type="text"
            placeholder="YOUR NAME"
            className="bg-[#606060] hover:bg-white text-gray-100 focus:border-none active:border-none border-none px-10 py-6 rounded-3xl w-2/5"
          />
          <input
            type="text"
            placeholder="YOUR EMAIL"
            className="bg-[#606060] hover:bg-white text-gray-100 focus:border-none active:border-none border-none px-10 py-6 rounded-3xl w-2/5"
          />
          <button
            type="submit"
            placeholder="SUBSCRIBE"
            className="bg-brOrange text-black hover:bg-orange-400 focus:border-none active:border-none border-none px-20 py-6 rounded-3xl"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-3 justify-between">
        <Links title={"About"} links={links} />
        <Links title={"My Alva"} links={links} />
        <Links title={"Analytics"} links={links} />
        <Links title={"AlvaForm"} links={links} />
        <Links title={"Consulting"} links={links} />
        <Links title={"Events"} links={links} />
        <Links title={"FIT_STUDIO"} links={links} />
        <Links title={"NEWS"} links={links} />
        <Links title={"Contact"} links={links} />
      </div>
      <Legal />
    </div>
  );
};
const Legal = () => {
  const legals = [
    { title: "Terms of use", link: "/" },
    { title: "Privacy", link: "/" },
    { title: "Careers", link: "/" },
    { title: "Unsubscribe", link: "/" },
    { title: "Cookie Settings", link: "/" },
  ];
  return (
    <div className="flex justify-between text-xs text-gray-300 my-10 mt-20">
      <span>Copyright (c) 2007-2024 Alvanon, Inc. All rights reserved.</span>
      <div className="flex gap-4">
        {legals.map((legal, index) => (
          <>
            <Link href={legal.link} key={index}>
              {legal.title}
            </Link>
            {index < legals.length - 1 ?  <span>|</span> : <></>}
          </>
        ))}
      </div>
    </div>
  );
};
const Links = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-6 text-gray-300 tracking-wider ">
      <div className="uppercase font-bold text-sm">{title}</div>
      <div className="flex flex-col gap-[2px] text-xs">
        {links.map((link, index) => (
          <Link href={link.value} key={index}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
