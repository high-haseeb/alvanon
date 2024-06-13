import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen w-screen flex justify-between p-10 lg:px-40 items-end text-center lg:text-left`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="flex items-center justify-center">
        <div className="max-w-sm w-full font-bold text-white ">{props.children}</div>
      </div>
        <div className="lg:text-right max-w-sm w-full text-3xl lg:font-bold text-white hidden lg:block">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityFourthSection, setOpacityFourthSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 4));
    setOpacitySecondSection(scroll.curve(1 / 4, 1 / 4));
    setOpacityThirdSection(scroll.curve(2 / 4, 1 / 4));
    setOpacityFourthSection(scroll.range(3 / 4, 1 / 4));
  });

  return (
    <Scroll html>
      <div className="w-screen text-sm lg:text-4xl">
        <Section opacity={opacityFirstSection}>
          <div className="text-brOrange">Lorem ipsum dolor </div>sit amet, qui minim labore adipisicing 
          minim sint cillum sint consectetur cupidatat.
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>

          <div className="text-brOrange">Lorem ipsum dolor </div>sit amet, qui minim labore adipisicing 
          minim sint cillum sint consectetur cupidatat.
          <p className="animate-bounce mt-6">↓</p>
        
        </Section>
        <Section opacity={opacityThirdSection}>

          <div className="text-brOrange">Lorem ipsum dolor </div>sit amet, qui minim labore adipisicing 
          minim sint cillum sint consectetur cupidatat.
          <p className="animate-bounce mt-6">↓</p>
        
        </Section>
        <Section right opacity={opacityFourthSection}>

          <div className="text-brOrange">Lorem ipsum dolor </div>sit amet, qui minim labore adipisicing 
          minim sint cillum sint consectetur cupidatat.
          <p className="animate-bounce mt-6">↓</p>
        
        </Section>
      </div>
    </Scroll>
  );
};
