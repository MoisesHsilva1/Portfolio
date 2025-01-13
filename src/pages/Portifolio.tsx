import Section from "../components/layout/Section";
import AboutMe from "../components/aboutMe/AboutMe";
import Projects from "../components/projects/Projects";
import TechStack from "../components/techStack/TechStack";

function Portfolio() {

  return (
    <>
      <main className="bg-[#111]">
        <Section />
        <AboutMe />
        <Projects />
        <TechStack/>
      </main>
    </>
  );
}
export default Portfolio;
