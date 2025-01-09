import Logo from "../UI/logo/Logo";

function Section() {
  return (
    <>
      <main>
        <section className="flex items-center justify-between p-36">
          <div>
            <h1 className="text-white font-medium text-6xl">
              Ajudando empresas a produzir <br />
              <span className="text-purple-500">produtos digitais</span> com
              experiências <br /> marcantese de alta qualidade
            </h1>
            <h2 className="text-white text-2xl mt-12">
              Em buscar constante em aprimorar minhas habilidades como
              desenvolvedor...
            </h2>
            <a
              href="mailto:moisesh.dev@gmail.com?subject=Oportunidade%20de%20trabalho&body=Olá,%20tudo%20bem?%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade"
              className="text-white text-2xl text-center"
            >
              <div className="flex justify-center items-center bg-purple-500 hover:bg-purple-400 border-0 rounded-md p-4 mt-6 h-20 w-72">
                Contato
              </div>
            </a>
          </div>
          <figure>
            <Logo />
          </figure>
        </section>
      </main>
    </>
  );
}

export default Section;
