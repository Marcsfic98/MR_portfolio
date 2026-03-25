import { useEffect, useRef, useState } from "react";
import "./Courses.css";

interface Course {
  id: string;
  title: string;
  institution: string;
  duration: string;
  date: string;
  description?: string;
  tags: string[];
  image: string;
}

interface CourseDatabase {
  Bootcamps: Course[];
  Certificações: Course[];
  Faculdade: Course[];
}

const courseDatabase: CourseDatabase = {
  Bootcamps: [
    {
      id: "b1",
      title: "Fullstack Javascript",
      institution: "Generation Brasil",
      duration: "480h",
      date: "2026",
      description:
        "O bootcamp de Fullstack JavaScript da Generation Brasil é um programa intensivo e imersivo, focado tanto em Hard Skills quanto em Soft Skills.",
      tags: [
        "TypeScript",
        "Nest",
        "TypeORM",
        "JWT",
        "Mysql",
        "Jest",
        "React",
        "TailwindCSS",
        "Git",
      ],
      image:
        "https://brazil.generation.org/wp-content/uploads/2022/04/Cover-1.png",
    },
    {
      id: "b2",
      title: "Fullstack Javascript",
      institution: "Atlântico Avanti",
      duration: "80h",
      date: "2026",
      description:
        "O bootcamp de Fullstack JavaScript da Escola Atlântico Avanti é um programa de aceleração técnica voltado para tecnologias modernas e práticas reais de mercado.",
      tags: ["Javascript", "Node.js", "Prisma", "React", "JWT", "Mysql", "Git"],
      image: "/img/cursos/c8.png",
    },
    {
      id: "b3",
      title: "Programador de Sistemas",
      institution: "Senac & Serasa",
      duration: "240h",
      date: "2025",
      description:
        "Iniciativa de impacto social da Serasa Experian em parceria com o Senac, focado em democratizar o acesso à carreira em tecnologia.",
      tags: ["Javascript", "Python", "Django", "Html", "Css"],
      image:
        "https://www.serasaexperian.com.br/adobe/dynamicmedia/deliver/dm-aid--48f56584-e1d2-4567-b385-016cb7d5f613/banner-tse-6-edicao-2.png?preferwebp=true&quality=85",
    },
    {
      id: "b4",
      title: "Mobile Developer",
      institution: "Dio & MeuTudo",
      duration: "75h",
      date: "2025",
      description:
        "Programa de especialização intensiva focado no ecossistema mobile, unindo o rigor técnico da fintech meutudo com a metodologia prática da DIO.",
      tags: ["Javascript", "Node", "React Native", "expo", "Git"],
      image: "/img/cursos/c9.png",
    },
  ],
  Certificações: [
    {
      id: "c8",
      title: "Fullstack Javascript",
      institution: "Atlântico Avanti",
      duration: "80h",
      date: "2025",
      description:
        "Aceleração técnica voltada para formação de alto nível em squads de desenvolvimento ágil.",
      tags: ["Javascript", "Node.js", "Prisma", "React", "JWT", "Mysql", "Git"],
      image: "/img/cursos/c8.png",
    },
    {
      id: "c1",
      title: "Frontend Completo",
      institution: "Dankicode",
      duration: "83h",
      date: "2025",
      description:
        "Treinamento prático indo do absoluto zero até níveis profissionais de interface web.",
      tags: [
        "Javascript",
        "React",
        "jquery",
        "Bootstrap",
        "TailwindCss",
        "UI & UX",
        "Git",
        "CSS",
        "HTML",
      ],
      image: "/img/cursos/c1.png",
    },
    {
      id: "c2",
      title: "Git e Github",
      institution: "Dankicode",
      duration: "2h",
      date: "2025",
      description:
        "Focado em fluxo de trabalho profissional e controle de versionamento avançado.",
      tags: ["Git", "GitHub", "Git Labs"],
      image: "/img/cursos/c2.png",
    },
    {
      id: "c3",
      title: "Javascript Completo",
      institution: "Dankicode",
      duration: "14h",
      date: "2024",
      description:
        "Domínio da linguagem pura para tornar o desenvolvedor independente de frameworks.",
      tags: ["Javascript", "Jquery", "Node", "React"],
      image: "/img/cursos/c3.png",
    },
    {
      id: "c4",
      title: "React JS",
      institution: "Dankicode",
      duration: "4h",
      date: "2024",
      description:
        "Criação de interfaces modernas e escaláveis com foco em componentes reais.",
      tags: ["React", "Javascript", "MUI"],
      image: "/img/cursos/c4.png",
    },
    {
      id: "c5",
      title: "Formação Javascript Developer",
      institution: "Dio",
      duration: "39h",
      date: "2025",
      description:
        "Roteiro completo com desafios de código para domínio total do JavaScript.",
      tags: ["Javascript", "Node", "React", "CSS"],
      image: "/img/cursos/c5.png",
    },
    {
      id: "c6",
      title: "Formação React Developer",
      institution: "Dio",
      duration: "34h",
      date: "2025",
      description:
        "Trilha de aprendizado simulando o dia a dia de uma empresa de tecnologia.",
      tags: ["React", "Javascript", "MUI"],
      image: "/img/cursos/c6.png",
    },
    {
      id: "c9",
      title: "Mobile Developer",
      institution: "Dio & Meutudo",
      duration: "75h",
      date: "2025",
      description:
        "Especialização em aplicativos nativos focando em performance, gestos e hardware.",
      tags: ["React Native", "Node", "CSS"],
      image: "/img/cursos/c9.png",
    },
    {
      id: "c7",
      title: "React Native Developer",
      institution: "Dio",
      duration: "46h",
      date: "2025",
      description:
        "Especialização em aplicativos nativos focando em performance, gestos e hardware.",
      tags: ["React Native", "Node", "CSS"],
      image: "/img/cursos/c7.png",
    },
  ],
  Faculdade: [
    {
      id: "f1",
      title: "Análise e Desenvolvimento de Sistemas (ADS)",
      institution: "Mauricio de Nassau",
      duration: "2.5 anos",
      date: "2025",
      description:
        "Graduando no 3º período. Foco em Engenharia de Software e Metodologias Ágeis.",
      tags: [
        "TypeScript",
        "Python",
        "SQL",
        "Engenharia de Software",
        "POO",
        "Estrutura de Dados",
      ],
      image:
        "https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2016/11/faculdade_mauricio_de_nassau.png",
    },
  ],
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState<keyof CourseDatabase>("Bootcamps");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Bloquear scroll do fundo quando modal abrir
  useEffect(() => {
    document.body.style.overflow = selectedCert ? "hidden" : "unset";
  }, [selectedCert]);

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
    setActiveTab(tab as keyof CourseDatabase);
    if (carouselRef.current)
      carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
  };

  return (
    <section className="courses-section">
      <p className="section-subtitle">Trajetória Acadêmica</p>
      <h2 className="section-title">Cursos e Certificações</h2>

      <div className="filter-container">
        <div className="glass-nav">
          {(Object.keys(courseDatabase) as Array<keyof CourseDatabase>).map(
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
        <div className="courses-carousel" ref={carouselRef}>
          {courseDatabase[activeTab].map((course) => (
            <div className="course-card" key={course.id}>
              {/* CLIQUE NA IMAGEM ABRE O MODAL */}
              <div
                className="image-wrapper"
                onClick={() => setSelectedCert(course.image)}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
                <div className="cert-overlay">
                  <span>Ampliar Certificado</span>
                </div>
                <span className="course-date">{course.date}</span>
              </div>

              <div className="course-content">
                <div className="course-header">
                  <span className="institution-tag">{course.institution}</span>
                  <span className="duration-tag">{course.duration}</span>
                </div>
                <h3>{course.title}</h3>
                {course.description && (
                  <p className="course-desc">{course.description}</p>
                )}

                <div className="tags-box">
                  {course.tags.map((tag) => (
                    <span key={tag} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-buttons">
                  {/* BOTÃO TAMBÉM ABRE O MODAL */}
                  <button
                    className="btn-certificate"
                    onClick={() => setSelectedCert(course.image)}
                  >
                    Ver Certificado
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow next" onClick={() => scroll("right")}>
          ❯
        </button>
      </div>

      {/* MODAL SYSTEM */}
      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-close-btn"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <img
              src={selectedCert}
              alt="Certificado"
              className="cert-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
