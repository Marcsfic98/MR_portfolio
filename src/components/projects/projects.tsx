import { useEffect, useRef, useState } from "react";
import "./projects.css";

interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technicalHighlight: string;
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

const projectDatabase: ProjectDatabase = {
  "Front-end": [
    {
      id: "f1",
      title: "Serviços Já",
      description:
        "Plataforma para contratação de serviços domésticos, selecionada para pré-incubação no Senac I.de.i.as.",
      problem:
        "Dificuldade de conectar prestadores autônomos a clientes locais com segurança e agilidade.",
      solution:
        "SPA com geolocalização em tempo real e dashboard de métricas para o prestador gerenciar ganhos e serviços.",
      technicalHighlight:
        "Integração de Leaflet e Google Maps para precisão geográfica e Recharts para visualização de dados do usuário.",
      tags: [
        "Javascript",
        "React",
        "MUI",
        "Leaflet",
        "Google Maps",
        "Recharts",
        "Swiper",
        "Axios",
      ],
      image: "/img/frontend/servicosja.gif",
      linkRepo: "https://github.com/Marcsfic98/servicosja",
      linkDemo: "https://servicosja-te5n.onrender.com/",
    },
    {
      id: "f2",
      title: "Nutrigo",
      description:
        "Plataforma de delivery para o nicho de alimentação saudável (Generation Brasil).",
      problem:
        "Falta de centralização de pedidos para pequenos lojistas que focam em dietas específicas e marmitas fit.",
      solution:
        "Sistema de e-commerce completo com gestão de estoque no dashboard do lojista e carrinho dinâmico para o cliente.",
      technicalHighlight:
        "Uso de Typescript para segurança de tipos e Context API para gerenciar o estado global de compras.",
      tags: ["Typescript", "React", "Tailwind", "Toastify ", "Swiper", "Axios"],
      image: "/img/frontend/nutrigo.gif",
      linkRepo: "https://github.com/Marcsfic98/NutriGo-Delivery-Frontend",
      linkDemo: "https://nutrigodelivery.vercel.app/",
    },
    {
      id: "f4",
      title: "MoveUp",
      description:
        "Landing Page interativa para aplicativo fitness e apresentação de squad.",
      problem:
        "Necessidade de uma vitrine digital de alto impacto visual para converter downloads do app mobile.",
      solution:
        "Página focada em performance e animações fluidas, destacando os benefícios do app e a equipe de desenvolvimento.",
      technicalHighlight:
        "Foco total em Core Web Vitals e uso de Swiper para carrosséis responsivos e táteis.",
      tags: ["Typescript", "React", "Tailwind", "Toastify ", "Swiper", "Axios"],
      image: "/img/frontend/moveup.gif",
      linkRepo: "https://github.com/Marcsfic98/MoveUp_Frontend",
      linkDemo: "https://moveup-beta.vercel.app/",
    },
    {
      id: "f5",
      title: "SportShopping",
      description:
        "E-commerce funcional de artigos esportivos com controle de mercadorias.",
      problem:
        "Gerenciamento de estoque ineficiente em interfaces de compra que não validam disponibilidade em tempo real.",
      solution:
        "Implementação de lógica de checkout com validação de cartão e atualização dinâmica do inventário.",
      technicalHighlight:
        "Uso de Styled Components para isolamento de estilos e Axios para sincronização de dados do catálogo.",
      tags: ["Javascript", "React", "Axios", "Styled Components"],
      image: "/img/frontend/SPORTSHOPPING.gif",
      linkRepo: "https://github.com/Marcsfic98/sportshopping.git",
      linkDemo: "https://sportshopping-f2858.web.app",
    },
    {
      id: "f6",
      title: "GitFind",
      description: "Buscador de perfis GitHub consumindo API REST oficial.",
      problem:
        "Visualização rápida de repositórios e bio de usuários sem a necessidade de navegar em múltiplas páginas do GitHub.",
      solution:
        "Ferramenta de busca instantânea que renderiza as principais métricas do desenvolvedor de forma limpa.",
      technicalHighlight:
        "Manipulação eficiente da Fetch/Axios API para tratar erros de busca e perfis inexistentes.",
      tags: ["React", "JavaScript", "GitHub API REST", "CSS"],
      image: "/img/frontend/gitfind.gif",
      linkRepo: "https://github.com/Marcsfic98/Git-find.git",
      linkDemo: "https://gitfind-seven.vercel.app/",
    },
    {
      id: "f7",
      title: "Painel Monki",
      description:
        "Dashboard administrativo para controle de solicitações de clientes.",
      problem:
        "Falta de visualização organizada para gestores de suporte acompanharem o status das ordens de serviço.",
      solution:
        "Painel responsivo com sistema de filtragem de tickets e status de prioridade visual.",
      technicalHighlight:
        "Domínio de manipulação de DOM com jQuery em uma arquitetura de dashboard clássica e eficiente.",
      tags: ["Javascript", "HTML5", "CSS3", "jQuery"],
      image: "/img/frontend/Deshboard.gif",
      linkRepo: "https://github.com/Marcsfic98/Dashboard",
      linkDemo: "https://marcsfic98.github.io/Dashboard/",
    },
    {
      id: "f8",
      title: "RM Cars",
      description:
        "Site de vendas de automóveis com catálogo e filtros de valores.",
      problem:
        "Dificuldade de usuários encontrarem veículos por faixa de preço em catálogos estáticos.",
      solution:
        "Interface com motor de filtros dinâmicos e galeria de fotos integrada para conversão de vendas.",
      technicalHighlight:
        "Desenvolvimento mobile-first garantindo que a visualização dos carros seja perfeita em qualquer tela.",
      tags: ["HTML5", "CSS3", "jQuery"],
      image: "/img/frontend/Rmcars.gif",
      linkRepo: "https://github.com/Marcsfic98/Rmcars",
      linkDemo: " https://marcsfic98.github.io/Rmcars/",
    },
    {
      id: "f9",
      title: "Consultório Monguilhott",
      description: "Landing Page profissional para clínica odontológica.",
      problem:
        "Baixa presença digital de especialistas, resultando em menos agendamentos diretos via web.",
      solution:
        "Página focada em autoridade e conversão rápida via botão de agendamento integrado.",
      technicalHighlight:
        "Otimização extrema de imagens para garantir carregamento instantâneo no mobile.",
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
        "API robusta para blogs com autenticação e documentação Swagger.",
      problem:
        "Insegurança na gestão de dados e falta de padronização em rotas de conteúdo.",
      solution:
        "Sistema CRUD completo com autenticação JWT e segurança de rotas por nível de usuário.",
      technicalHighlight:
        "Desenvolvimento com NestJS seguindo os padrões de arquitetura modular e Clean Architecture.",
      tags: ["Typescript", "NestJS", "TypeORM", "MySQL", "JWT", "Swagger"],
      image: "/img/backend/blogpessoal.png",
      linkRepo: "https://github.com/Marcsfic98/personal_blog",
      linkDemo: "https://personal-blog-zkpf.onrender.com/",
    },
    {
      id: "lp2",
      title: "MeLeva API",
      description: "API escalável para Aplicativo de Carona Compartilhada.",
      problem:
        "Complexidade em relacionar usuários, rotas de carona e assentos disponíveis de forma segura.",
      solution:
        "Modelagem de dados complexa com TypeORM garantindo a integridade das caronas em tempo real.",
      technicalHighlight:
        "Implementação de relacionamentos Many-to-Many e filtros de busca por localização.",
      tags: ["Typescript", "NestJS", "TypeORM", "MySQL", "JWT", "Swagger"],
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
      description: "Back-end completo para o ecossistema de delivery fit.",
      problem:
        "Necessidade de um fluxo de dados rápido entre o pedido do cliente e a cozinha do lojista.",
      solution:
        "API RESTful performática com validações automáticas de dados via Class Validator.",
      technicalHighlight:
        "Integração de Swagger para que o time de Front-end consuma os recursos de forma independente.",
      tags: ["Typescript", "NestJS", "TypeORM", "MySQL", "JWT", "Swagger"],
      image: "/img/backend/nutrigo.png",
      linkRepo: "https://github.com/Marcsfic98/Aplicativo-de-Delivery-BackEnd",
      linkDemo: "https://github.com/Marcsfic98/Aplicativo-de-Delivery-BackEnd",
    },
    {
      id: "lp4",
      title: "Crud Farmacia",
      description:
        "API para controle de produtos e categorias de uma rede farmacêutica.",
      problem:
        "Organização falha de estoque e categorização de medicamentos em sistemas manuais.",
      solution:
        "Sistema de gerenciamento centralizado com validação de tipos de produtos e busca rápida.",
      technicalHighlight:
        "Uso de TypeORM para facilitar migrations e garantir a persistência correta de dados relacionais.",
      tags: ["Typescript", "NestJS", "TypeORM", "MySQL", "Class validator"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqJBIBZ-TOdCaGCY9GF_PXT22jtetg-uJQ&s",
      linkRepo: "https://github.com/Marcsfic98/crud-farmacia",
      linkDemo: "https://github.com/Marcsfic98/crud-farmacia",
    },
    {
      id: "lp5",
      title: "Savepoint API",
      description: "Back-end para Loja de Games com foco em catálogo digital.",
      problem:
        "Inconsistência de preços e categorias em grandes catálogos de jogos digitais.",
      solution:
        "API modular com NestJS para gerenciar produtos, preços e usuários de forma isolada.",
      technicalHighlight:
        "Arquitetura escalável que permite a adição de novos módulos (ex: sistema de pagamento) sem afetar o core.",
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
      description: "App nativo para aluguel e busca de imóveis e apartamentos.",
      problem:
        "Navegação em sites de imóveis é lenta em dispositivos móveis e não aproveita a fluidez nativa.",
      solution:
        "App desenvolvido com React Native oferecendo navegação por gestos e filtros rápidos.",
      technicalHighlight:
        "Uso de Expo para desenvolvimento ágil e TypeScript para manter a consistência das props de navegação.",
      tags: ["React Native", "Expo", "TypeScript"],
      image: "/img/mobile/helia.gif",
      linkRepo: "https://github.com/Marcsfic98/helia.git",
      linkDemo: "https://github.com/Marcsfic98/helia.git",
    },
    {
      id: "m2",
      title: "Taxi Drive",
      description:
        "Simulador de taxímetro mobile com cálculo de tarifa em tempo real.",
      problem:
        "Dificuldade de passageiros e motoristas conferirem o valor da corrida de forma independente e transparente.",
      solution:
        "App que utiliza o tempo e lógica matemática para simular o custo de viagens urbanas.",
      technicalHighlight:
        "Manipulação de cronômetros e estados no React Native para atualização dinâmica da interface.",
      tags: ["React Native", "Expo", "TypeScript"],
      image: "/img/mobile/taxi.gif",
      linkRepo: "https://github.com/Marcsfic98/taxiDriver",
      linkDemo: "https://github.com/Marcsfic98/taxiDriver",
    },
  ],
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] =
    useState<keyof ProjectDatabase>("Front-end");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
  }, [selectedImage]);

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
    if (carouselRef.current)
      carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
  };

  return (
    <section className="projects-section" id="projects-section">
      <p className="section-subtitle">Projetos</p>
      <h2 className="section-title">Portfólio</h2>

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
              <div
                className="image-wrapper"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <span>Clique para ampliar</span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-details-grid">
                  <div className="detail-item">
                    <strong>Problema:</strong>
                    <span>{project.problem}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Solução:</strong>
                    <span>{project.solution}</span>
                  </div>
                  <div className="detail-item highlight">
                    <strong>Destaque Técnico:</strong>
                    <span>{project.technicalHighlight}</span>
                  </div>
                </div>

                <div className="tags-box">
                  {project.tags.map((tag) => (
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

      {/* MODAL */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Preview" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
