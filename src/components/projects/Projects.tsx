import ProjectContent from "../UI/ProjectContent";

function Projects() {
  return (
    <>
      <main>
        <section className="flex flex-col justify-center items-center p-8 mt-36">
          <h1 className="text-white text-4xl sm:text-5xl">Projetos</h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <ProjectContent
              title="BarberShop"
              description="Sistema de agendamento para barbearias, otimizando marcações de horários e a gestão de clientes."
              link="https://barber-shop-theta-jade.vercel.app/"
            />
            <ProjectContent
              title="Gerador Curriculo"
              description="Gerador de currículo que ajuda jovens a criarem e personalizarem seus currículos de forma rápida e prática."
              link="https://github.com/MoisesHsilva1/GeradorCurriculoReact"
            />
            <ProjectContent
              title="To-Do-List"
              description="To-do list que auxilia na organização da rotina e na gestão das tarefas diárias, tornando o dia a dia mais produtivo."
              link="https://to-do-list-nu-bay.vercel.app/"
            />
          </div>
        </section>
      </main>
    </>
  );
}
export default Projects;
