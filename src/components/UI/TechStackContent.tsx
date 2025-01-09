import React from "react";

function TechStackContent(props:{ children?: React.ReactNode}) {
    return (
        <>
         <section className="flex justify-center items-center">
          <div className="p-6 bg-[#151515] border-2 border-[#1f1f1f] hover:border-purple-500 ">
           {props.children}
          </div>
        </section>
        </>
    )
}
export default TechStackContent;