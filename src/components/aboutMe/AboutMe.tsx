import photoProfile from "../../assets/photoProfile.png";
import IconGithub from "../UI/icons/IconGitHub";
import IconLinkedin from "../UI/icons/IconLinkedin";
import IconGmail from "../UI/icons/IconGmail";

function AboutMe() {
  return (
    <>
      <main className="flex justify-center">
        <section className="flex flex-row justify-start p-16 bg-[#151515] border-2 border-[#1f1f1f] rounded w-10/12 h-auto">
          <figure className="mr-4">
            <img src={photoProfile} alt="photoProfile" className="h-auto" />
          </figure>
          <div className="flex flex-col justify-start items-start gap-6 p-6 font-archivo ">
            <p className="text-purple-500 text-xl font-medium">Quem sou eu?</p>
            <h1 className="text-white text-4xl font-medium">Moises Henrique</h1>
            <h2 className="text-white text-xl">Frontend Developer</h2>
            <p className="text-gray-400 text-xl">
              Olá, meu nome é Moisés Henrique. Sou desenvolvedor com foco em
              front-end, <br /> com experiência em startups, QA e ensino de
              programação, Meu objetivo é criar <br /> interfaces modernas,
              focando em performance e usabilidade.
            </p>

            <div className="flex flex-row gap-4">
              <a href="https://github.com/MoisesHsilva1">
                <div className="p-6 bg-[#151515] border-2 border-[#1f1f1f] hover:border-purple-500 ">
                  <IconGithub />
                </div>
              </a>
              <a href="http://linkedin.com/in/mois%C3%A9shenrique">
                <div className="p-6 bg-[#151515] border-2 border-[#1f1f1f] hover:border-purple-500 ">
                  <IconLinkedin />
                </div>
              </a>
              <a href="mailto:moisesh.dev@gmail.com?subject=Oportunidade%20de%20trabalho&body=Olá,%20tudo%20bem?%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade">
                <div className="p-6 bg-[#151515] border-2 border-[#1f1f1f] hover:border-purple-500 ">
                  <IconGmail />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;
