import Bundles from "@/components/home/Bundles";
import Hero from "@/components/home/Hero";
import IdeasSection from "@/components/home/IdeasSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden backgroundImage">
      <Hero />
      <IdeasSection />
      <Bundles />
    </main>
  );
}
