import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Details from "@/components/ui/Details";
import Scene from "@/components/three/Model";
import LineCloud from "@/components/three/LineCloud";

export default function Home() {
  return (
    <div className="overflow-y-scroll w-screen bg-black parent">
      <Navbar />
      <Hero />
      <Scene />
      <Details />
    </div>
  );
}
