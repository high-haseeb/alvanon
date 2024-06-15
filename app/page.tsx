"use client";
import Navbar from "@/components/ui/Navbar";
import ProgressDots from "@/components/ui/ProgressDots";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/ui/Hero";
import Details from "@/components/ui/Details";
import Scene from "@/components/three/Model";
import AlvaForm from "@/components/three/AlvaForm";
import Footer from "@/components/ui/Footer";
import Clients from "@/components/ui/Clients";
import { Suspense } from "react";
import { Preload, useProgress } from "@react-three/drei";

export default function Home() {
  return (
    <Suspense fallback={<Loader/>}>
      <div className="w-screen bg-black parent overflow-x-hidden" id="parent">
        <Navbar />
        <ProgressDots />
        <BackToTop />

        <Hero />
        <Scene />
        <Clients />
        <Details />
        <AlvaForm />
        <Footer />
      </div>
    </Suspense>
  );
}
const Loader = () => {
  const { progress } = useProgress();

  return(
  <div className="w-screen h-screen bg-black flex items-center justify-center gap-4">
      <div className={ `h-8 bg-brOrange absolute top-0 left-0` } style={{width: `${progress}vw`}}> </div>
      <div className="text-4xl text-white">Loading {progress.toFixed(0)}%</div>
    </div>
  )
}
