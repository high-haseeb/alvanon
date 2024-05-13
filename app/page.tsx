import LineCloud from "@/components/three/LineCloud";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Clients from "@/components/ui/Clients";
import Details from "@/components/ui/Details";
import DotGround from "@/components/three/DotGround";

export default function Home() {
  return (
    <main className="overflow-hidden w-screen">
      <Navbar />
      <Hero />
      {/* <Clients/> */}
      <Details/>
      {/* <DotGround/> */}
    </main>
  );
}
