import Header from "../components/layout/Header";
import Section from "../components/layout/Section";
import AboutMe from "../components/aboutMe/AboutMe";
import Projects from "../components/projects/Projects";
import TechStack from "../components/techStack/TechStack";

function Portfolio() {
  const textsHeader = ["Tecnologias", "Projetos", "Contato"];

  return (
    <>
      <main className="bg-[#111]">
        <Header texts={textsHeader} />
        <Section />
        <AboutMe />
        <Projects />
        <TechStack/>
      </main>
    </>
  );
}
export default Portfolio;
