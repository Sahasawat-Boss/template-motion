
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Items from "@/components/Items"
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-20 md:pt-28">
      <Intro />
      <About />
      <Projects />
      <Items />
      <Contact />
    </main>
  );
}
