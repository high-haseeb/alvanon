"use client";
import React, { useState, useEffect } from "react";

const ProgressDots = () => {
  const sections = ["hero", "points", "clients", "dotGround", "alvaform", "about"];
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const parent = document.getElementById("parent");
    const handleScroll = (scrollPosition) => {
      const windowHeight = window.innerHeight;

      const currentSection = sections[Math.ceil(scrollPosition / windowHeight)];
      setActive(currentSection);
    };

    parent.addEventListener("scroll", (e) => handleScroll(e.target.scrollTop));

    return () => {
      parent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-10 top-1/2 -translate-y-1/2 lg:flex flex-col items-center justify-center z-50 gap-5 hidden opacity-50 hover:opacity-100">
      {sections.map((section, index) => (
        <div onClick={() => setActive(section)}>
          <Dot section={section} key={index} active={active} />
        </div>
      ))}
    </div>
  );
};
const Dot = ({ section, active }) => {
  const scrollToSection = (section) => {
    const activeSection = document.getElementById(section);
    if (activeSection) {
      activeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`rounded-full ${active === section ? "bg-white" : "bg-white/40"} border border-gray-500/40 w-2 h-2 cursor-pointer`}
      title={section}
      onClick={() => scrollToSection(section)}
    />
  );
};

export default ProgressDots;
