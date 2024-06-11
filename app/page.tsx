'use client'
import Navbar from "@/components/ui/Navbar";
import ProgressDots from "@/components/ui/ProgressDots";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/ui/Hero";
import Details from "@/components/ui/Details";
import Scene from "@/components/three/Model";
import AlvaForm from "@/components/three/AlvaForm";
import {Loader} from '@react-three/drei'

export default function Home() {
  return (
    <div className="overflow-y-scroll w-screen bg-black parent">
      <Loader/>
      <Navbar />
      <ProgressDots/>
      <BackToTop/>
      <Hero />
      <Scene />
      <Details />
      <AlvaForm/>
    </div>
  );
}
