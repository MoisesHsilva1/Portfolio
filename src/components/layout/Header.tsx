function Header(props:{ texts: string[]}) {
  return (
    <>
      <header>
        <nav className="flex flex-row justify-end gap-6 p-4 mr-12 text-white text-2xl font-archivo font-light bg-transparent w-screen">
         {props.texts.map((text, index) => (
         <span key={index} className="relative group cursor-pointer">
            {text}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
         ))}
        </nav>
      </header>
    </>
  );
}
export default Header;
