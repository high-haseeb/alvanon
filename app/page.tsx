'use client'
import Navbar from "@/components/ui/Navbar";
import ProgressDots from "@/components/ui/ProgressDots";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/ui/Hero";
import Details from "@/components/ui/Details";
import Scene from "@/components/three/Model";
import AlvaForm from "@/components/three/AlvaForm";
import Footer from "@/components/ui/Footer";
import Clients from "@/components/ui/Clients";
import {Loader} from '@react-three/drei'

export default function Home() {
  return (
    <div className="w-screen bg-black parent overflow-x-hidden" id="parent">

      <Loader/>
      <Navbar />
      <ProgressDots/>
      <BackToTop/>

      <Hero />
      <Scene />
      <Clients/>
      <Details />
      <AlvaForm/>
      <Footer/>
    </div>
  );
}
