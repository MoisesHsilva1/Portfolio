import photoProfile from "../../assets/photoProfile.png";
import IconGithub from "../UI/icons/IconGitHub";
import IconLinkedin from "../UI/icons/IconLinkedin";
import IconGmail from "../UI/icons/IconGmail";

function AboutMe() {
  return (
    <>
      <main className="flex justify-center px-4 sm:px-8">
        <section className="flex flex-col sm:flex-row justify-start p-6 sm:p-16 bg-[#151515] border-2 border-[#1f1f1f] rounded w-full sm:w-10/12 h-auto">
          <figure className="mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto">
            <img src={photoProfile} alt="photoProfile" className="w-full sm:h-auto" />
          </figure>
          <div className="flex flex-col justify-start items-start gap-6 p-6 font-archivo">
            <p className="text-purple-500 text-xl font-medium">Quem sou eu?</p>
            <h1 className="text-white text-3xl sm:text-4xl font-medium">Moises Henrique</h1>
            <h2 className="text-white text-lg sm:text-xl">Frontend Developer</h2>
            <p className="text-gray-400 text-lg sm:text-xl">
              Olá, meu nome é Moisés Henrique. Sou desenvolvedor com foco em
              front-end, <br /> com experiência em startups, QA e ensino de
              programação, Meu objetivo é criar <br /> interfaces modernas,
              focando em performance e usabilidade.
            </p>

            <div className="flex flex-row gap-4 mt-4">
              <a href="https://github.com/MoisesHsilva1">
                <div className="p-4 sm:p-6 bg-[#151515] border-2 border-[#1f1f1f] hover:border-purple-500">
                  <IconGithub />
                </div>
              </a>
              <a href="http://linkedin.com/in/mois%C3%A9shenrique">
                <div className="p-4 sm:p-6 bg-[#151515] border-2 border-[#1f1f1f] hover:border-purple-500">
                  <IconLinkedin />
                </div>
              </a>
              <a href="mailto:moisesh.dev@gmail.com?subject=Oportunidade%20de%20trabalho&body=Olá,%20tudo%20bem?%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade">
                <div className="p-4 sm:p-6 bg-[#151515] border-2 border-[#1f1f1f] hover:border-purple-500">
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
