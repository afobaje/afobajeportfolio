import About from "@/components/About";
import AllProjects from "@/components/AllProjects";
import Intro from "@/components/Intro";


export default function Home() {
  return (
    <div className="flex relative flex-col ">
      <Intro />
      <AllProjects />
      <About />
    </div>
  );
}
