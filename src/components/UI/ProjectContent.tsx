function ProjectContent(props: {
  title?: string;
  description?: string;
  link?: string;
}) {
  return (
    <>
      <section className="flex flex-col gap-4 border-2 border-purple-500 p-6 max-w-full sm:max-w-72">
        <h1 className="text-white text-xl sm:text-2xl font-medium">{props.title}</h1>
        <p className="text-gray-400 text-sm sm:text-base">{props.description}</p>
        <a href={props.link} className="text-lg sm:text-2xl text-purple-500">
          <span className="relative group cursor-pointer">
            Visualizar projeto
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
        </a>
      </section>
    </>
  );
}

export default ProjectContent;
