import React from "react";

export const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Explorando o universo de ideias e desenvolvimento
      </h1>

      <h2
        className="items-center justify-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
        style={{ width: "900px", color: "white", fontSize: "24px" }}
      >
        Esta seção está sendo cuidadosamente construída para compartilhar meus
        projetos, demonstrando minha paixão pela inovação e pela resolução de
        problemas.
      </h2>
    </div>
  );
};
