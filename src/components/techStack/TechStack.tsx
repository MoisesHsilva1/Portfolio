import IconJS from "../UI/icons/IconJS";
import IconReact from "../UI/icons/IconReact";
import IconCSS from "../UI/icons/IconCSS";
import IconHTML from "../UI/icons/IconHTML";
import IconGit from "../UI/icons/IconGit";
import IconTS from "../UI/icons/IconTS";
import IconCypress from "../UI/icons/IconCypress";
import IconTailwind from "../UI/icons/IconTailwind";
import IconNodeJS from "../UI/icons/IconNodeJS";
import IconJest from "../UI/icons/IconJest";
import TechStackContent from "../UI/TechStackContent";

const techIcons = [
  <IconJS />,
  <IconReact />,
  <IconCSS />,
  <IconHTML />,
  <IconGit />,
  <IconTS />,
  <IconCypress />,
  <IconTailwind />,
  <IconNodeJS />,
  <IconJest />,
];

function TechStack() {
  return (
    <main className="flex flex-col justify-center items-center  p-32 gap-12">
      <h1 className="text-white text-5xl mb-8">Tecnologias</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {techIcons.map((icon, index) => (
          <TechStackContent key={index}>{icon}</TechStackContent>
        ))}
      </section>
    </main>
  );
}

export default TechStack;
