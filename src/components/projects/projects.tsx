import { useRef, useState } from "react";
import "./Projects.css";

// --- TIPAGEM ---

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  linkRepo: string;
  linkDemo: string;
}

interface ProjectDatabase {
  "Front-end": Project[];
  Backend: Project[];
  Mobile: Project[];
}

// --- DADOS ---

const projectDatabase: ProjectDatabase = {
  "Front-end": [
    {
      id: "f1",
      title: "Serviços Já",
      description:
        "Plataforma para contratação de serviços domésticos com geolocalização e inteligência artificial. Projeto selecionado para pré-incubação no Senac.",
      tags: [
        "Javascript",
        "React",
        "MUI",
        "Leaflet",
        "Google Maps",
        "Swiper",
        "Recharts",
        "Imask",
        "Axios",
      ],
      image: "/img/frontend/servicosja.gif",
      linkRepo: "https://github.com/Marcsfic98/servicosja",
      linkDemo: "https://servicosja-te5n.onrender.com/",
    },
    {
      id: "f2",
      title: "SportShopping",
      description:
        "E-commerce esportivo 100% funcional com controle de estoque, validação de cartão e consumo de API para gerenciamento de mercadorias.",
      tags: ["Javascript", "React", "Axios", "Styled Components"],
      image: "/img/frontend/SPORTSHOPPING.gif",
      linkRepo: "https://github.com/Marcsfic98/sportshopping.git",
      linkDemo: "https://sportshopping-f2858.web.app",
    },
    {
      id: "f3",
      title: "GitFind",
      description:
        "Aplicação que consome a API do GitHub para buscar perfis de usuários e listar seus repositórios em tempo real.",
      tags: ["React", "JavaScript", "GitHub API REST", "CSS"],
      image: "/img/frontend/gitfind.gif",
      linkRepo: "https://github.com/Marcsfic98/Git-find.git",
      linkDemo: "https://gitfind-seven.vercel.app/",
    },
    {
      id: "f4",
      title: "Painel Monki",
      description:
        "Dashboard administrativo responsivo para gestão de solicitações de clientes e configurações de sistema.",
      tags: ["Javascript", "HTML5", "CSS3", "jQuery"],
      image: "/img/frontend/Deshboard.gif",
      linkRepo: "https://github.com/Marcsfic98/Dashboard",
      linkDemo: "https://marcsfic98.github.io/Dashboard/",
    },
    {
      id: "f5",
      title: "RM Cars",
      description:
        "Site de vendas de automóveis com sistema de filtros de valores, galeria de fotos e formulário de conversão.",
      tags: ["HTML5", "CSS3", "jQuery"],
      image: "/img/frontend/Rmcars.gif",
      linkRepo: "https://github.com/Marcsfic98/Rmcars",
      linkDemo: " https://marcsfic98.github.io/Rmcars/",
    },
    {
      id: "f6",
      title: "Consultório Monguilhott",
      description:
        "Landing page profissional para consultório odontológico com foco em conversão e total responsividade.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      image: "/img/frontend/monguilhott.gif",
      linkRepo: "https://github.com/Marcsfic98/monguilhott",
      linkDemo: "https://marcsfic98.github.io/monguilhott/",
    },
  ],
  Backend: [
    {
      id: "lp1",
      title: "Personal Blog API",
      description:
        "Este é o projeto de uma API robusta para um Blog Pessoal, desenvolvida com o framework NestJS. A aplicação conta com um sistema completo de CRUD para postagens e temas, além de um sistema de autenticação via JWT",
      tags: [
        "Typescript",
        "NestJS",
        "TypeORM",
        "MySQL",
        "JWT",
        "PassportJS",
        "Bcrypt",
        "Swagger",
        "Class validator",
      ],
      image: "/img/backend/blogpessoal.png",
      linkRepo: "https://github.com/Marcsfic98/personal_blog",
      linkDemo: "https://personal-blog-zkpf.onrender.com/",
    },
    {
      id: "lp2",
      title: "MeLeva API",
      description:
        "Este é o projeto de uma API robusta para um App de Carona compartilhada, desenvolvida com o framework NestJS.",
      tags: [
        "Typescript",
        "NestJS",
        "TypeORM",
        "MySQL",
        "JWT",
        "PassportJS",
        "Bcrypt",
        "Swagger",
        "Class validator",
      ],
      image:
        "https://raw.githubusercontent.com/Grupo-02-Turma-JavaScript-12/Aplicativo-de-Carona-Compartilhada-BackEnd/refs/heads/main/src/assets/logo_meleva.png",
      linkRepo:
        "https://github.com/Marcsfic98/Aplicativo-de-Carona-Compartilhada-BackEnd",
      linkDemo:
        "https://github.com/Marcsfic98/Aplicativo-de-Carona-Compartilhada-BackEnd?",
    },
    {
      id: "lp3",
      title: "NutriGo API",
      description:
        "Este é o projeto de uma API robusta para um Aplicativo de Delivery fit, desenvolvida com o framework NestJS.",
      tags: [
        "Typescript",
        "NestJS",
        "TypeORM",
        "MySQL",
        "JWT",
        "PassportJS",
        "Bcrypt",
        "Swagger",
        "Class validator",
      ],
      image:
        "https://raw.githubusercontent.com/Grupo-02-Turma-JavaScript-12/Aplicativo-de-Delivery-BackEnd/refs/heads/main/src/assets/nutrigo%20.png",
      linkRepo: "https://github.com/Marcsfic98/Aplicativo-de-Delivery-BackEnd",
      linkDemo: "https://github.com/Marcsfic98/Aplicativo-de-Delivery-BackEnd",
    },
    {
      id: "lp4",
      title: "Crud Farmacia",
      description:
        "Este é o projeto de uma API robusta para um Sistema de Farmacia, desenvolvida com o framework NestJS.",
      tags: ["Typescript", "NestJS", "TypeORM", "MySQL", "Class validator"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqJBIBZ-TOdCaGCY9GF_PXT22jtetg-uJQ&s",
      linkRepo: "https://github.com/Marcsfic98/crud-farmacia",
      linkDemo: "https://github.com/Marcsfic98/crud-farmacia",
    },
    {
      id: "lp5",
      title: "savepoint API",
      description:
        "Este é o projeto de uma API robusta para uma Loja de Games, desenvolvida com o framework NestJS.",
      tags: ["Typescript", "NestJS", "TypeORM", "MySQL"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgD-g7k7eEWKlKYX1RQlH5O7roNDGmD4MbQ&s",
      linkRepo: "https://github.com/Marcsfic98/backend_savepoint",
      linkDemo: "https://github.com/Marcsfic98/backend_savepoint",
    },
  ],
  Mobile: [
    {
      id: "m1",
      title: "Helia",
      description:
        "Aplicativo mobile para aluguel de casas e apartamentos, com interface moderna e navegação fluida.",
      tags: ["React Native", "Expo", "TypeScript"],
      image: "/img/mobile/helia.gif",
      linkRepo: "https://github.com/Marcsfic98/helia.git",
      linkDemo: "https://github.com/Marcsfic98/helia.git",
    },
    {
      id: "m2",
      title: "Taxi Drive",
      description:
        "Aplicativo mobile para Taximetro, com interface moderna e navegação fluida.",
      tags: ["React Native", "Expo", "TypeScript"],
      image: "/img/mobile/taxi.gif",
      linkRepo: "https://github.com/Marcsfic98/taxiDriver",
      linkDemo: "https://github.com/Marcsfic98/taxiDriver",
    },
  ],
};

// --- COMPONENTE ---

const ProjectsSection = () => {
  const [activeTab, setActiveTab] =
    useState<keyof ProjectDatabase>("Front-end");
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollToValue =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollToValue, behavior: "smooth" });
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as keyof ProjectDatabase);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "auto" }); // "instant" foi renomeado para "auto" em versões recentes ou mantido como string
    }
  };

  return (
    <section className="projects-section" id="projects-section">
      <p data-aos="zoom-in" className="section-subtitle">
        Meu Trabalho
      </p>
      <h2 data-aos="zoom-in" className="section-title">
        Projetos
      </h2>

      <div className="filter-container">
        <div className="glass-nav">
          {(Object.keys(projectDatabase) as Array<keyof ProjectDatabase>).map(
            (tab) => (
              <button
                key={tab}
                className={`glass-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
      </div>

      <div className="carousel-container">
        <button className="nav-arrow prev" onClick={() => scroll("left")}>
          ❮
        </button>

        <div className="projects-carousel" ref={carouselRef}>
          {projectDatabase[activeTab].map((project: Project) => (
            <div
              className={`project-card ${
                activeTab === "Mobile" ? "mobile-card" : ""
              }`}
              key={project.id}
            >
              <div className="image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tags-box">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-buttons">
                  <a
                    href={project.linkRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-glass"
                  >
                    Código
                  </a>
                  <a
                    href={project.linkDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-glass"
                  >
                    Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow next" onClick={() => scroll("right")}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
