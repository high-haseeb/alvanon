import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-white fixed top-0 left-0 p-4 lg:p-10 z-50 font-bold lg:text-3xl w-screen flex items-end lg:items-center justify-between lg:justify-around gap-10">
      <Image src={"/images/Layer_2.png"} width={180} height={100} alt="alvanon logo" className="bg-transparent mix-blend-difference w-28 lg:w-auto" />

      <div className="hidden lg:flex text-[0.75rem] gap-8 font-bold isolate aspect-video rounded-xl bg-black/40 shadow-lg ring-1 ring-black/5 h-10 px-10 w-auto items-center justify-center">
        <Button title="ABOUT" />
        <Button title="MYALVA" />
        <Button title="ANALYTICS" />
        <Button title="ALVAFORM" />
        <Button title="CONSULTING" />
        <Button title="EVENTS" />
        <Button title="FIT_STUDIO" />
        <Button title="NEWS" />
        <Button title="CONTACT" />
        <Image src={"/images/search.svg"} width={30} height={100} alt="alvanon logo" />
      </div>
      <div className="flex gap-1 lg:gap-4 text-gray-900 bg-white/20 p-2 lg:p-4 rounded-3xl">
        <Image src={"/images/setting.svg"} width={30} height={100} alt="setting" className="w-5 lg:w-7" />
        <Image src={"/images/apps.svg"} width={30} height={100} alt="apps" className="w-5 lg:w-7" />
        <Image src={"/images/user.svg"} width={30} height={100} alt="user" className="w-5 lg:w-7" />
      </div>
    </div>
  );
};
const Button = ({ title }: { title: string }) => {
  return (
    <Link href={`/${title}`}>
      <div className="capitalize">{title}</div>
    </Link>
  );
};

export default Navbar;
