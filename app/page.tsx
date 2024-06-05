import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Details from "@/components/ui/Details";
import Scene from "@/components/three/Model";

export default function Home() {
  return (
    <main className="overflow-hidden w-screen bg-black">
      <Navbar />
      {/* <Scene /> */}
      <Hero />
      <Details />
    </main>
  );
}
