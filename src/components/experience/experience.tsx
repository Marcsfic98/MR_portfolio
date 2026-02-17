import { useRef, useState } from "react";
import "./Courses.css";

// --- TIPAGEM ---

// Define a estrutura de um curso individual
interface Course {
  id: string;
  title: string;
  institution: string;
  duration: string;
  date: string;
  description?: string; // O '?' indica que é opcional
  tags: string[];
  image: string;
}

// Define as categorias permitidas no banco de dados
interface CourseDatabase {
  Bootcamps: Course[];
  Certificações: Course[];
  Faculdade: Course[];
}

// --- DADOS ---

const courseDatabase: CourseDatabase = {
  Bootcamps: [
    {
      id: "b1",
      title: "Fullstack Javascript",
      institution: "Generation Brasil",
      duration: "480h",
      date: "2026",
      description:
        "Formação intensiva focada em empregabilidade e soft skills, cobrindo todo o ciclo de desenvolvimento web, do banco de dados ao deploy.",
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
      duration: "60h",
      date: "2026",
      description:
        "Programa de aceleração focado em tecnologias modernas de Javascript para construção de aplicações escaláveis.",
      tags: ["Javascript", "Node.js", "Prisma", "React", "JWT", "Mysql", "Git"],
      image:
        "https://media.licdn.com/dms/image/v2/C4D0BAQHO-SV6oavkRA/company-logo_200_200/company-logo_200_200/0/1668087442234?e=2147483647&v=beta&t=3-wVh5X6_8OdjdNqD0SN8tq0Z--x9nyg8u0L6KziecM",
    },
    {
      id: "b3",
      title: "Programador de Sistemas",
      institution: "Senac & Serasa",
      duration: "240h",
      date: "2025",
      description:
        "Curso técnico focado em lógica de programação e desenvolvimento de aplicações backend com Python e Django.",
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
        "Especialização em desenvolvimento híbrido para Android e iOS utilizando React Native e integração com APIs Node.js.",
      tags: [
        "Javascript",
        "Node",
        "React Native",
        "Engenharia de Prompt",
        "Git",
      ],
      image:
        "https://www.mobills.com.br/blog/wp-content/uploads/2023/12/Como-cancelar-a-conta-meutudo.jpg",
    },
  ],
  Certificações: [
    {
      id: "c1",
      title: "Frontend Completo",
      institution: "Dankicode",
      duration: "83h",
      date: "2025",
      tags: [
        "Javascript",
        "React",
        "TailwindCss",
        "Styled Components",
        "MUI",
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
      tags: ["Git", "GitHub", "Git Labs"],
      image: "/img/cursos/c2.png",
    },
    {
      id: "c3",
      title: "Javascript Completo",
      institution: "Dankicode",
      duration: "14h",
      date: "2024",
      tags: ["Javascript", "Jquery", "Node", "React"],
      image: "/img/cursos/c3.png",
    },
    {
      id: "c4",
      title: "React JS",
      institution: "Dankicode",
      duration: "4h",
      date: "2024",
      tags: ["React", "Javascript", "MUI"],
      image: "/img/cursos/c4.png",
    },
    {
      id: "c5",
      title: "Formação Javascript Developer",
      institution: "Dio",
      duration: "39h",
      date: "2025",
      tags: ["Javascript", "Jquery", "Node", "React", "CSS"],
      image: "/img/cursos/c5.png",
    },
    {
      id: "c6",
      title: "Formação React Developer",
      institution: "Dio",
      duration: "34h",
      date: "2025",
      tags: ["React", "Javascript", "MUI"],
      image: "/img/cursos/c6.png",
    },
    {
      id: "c7",
      title: "React Native Developer",
      institution: "Dio",
      duration: "46h",
      date: "2025",
      tags: ["React Native", "Node", "CSS"],
      image: "/img/cursos/c7.png",
    },
  ],
  Faculdade: [
    {
      id: "f1",
      title: "Análise e Desenvolvimento de Sistemas (ADS)",
      institution: "Mauricio de Nassau",
      duration: "2 anos e meio",
      date: "2025",
      description:
        "Sou graduando em Análise e Desenvolvimento de Sistemas. Atualmente estou no 3º período, a fase onde a teoria da computação se transforma em soluções escaláveis.",
      tags: [
        "TypeScript",
        "Phyton",
        "Banco de Dados",
        "Git",
        "Metodologias Ágeis",
        "Modelagem",
        "React",
        "TailwindCSS",
      ],
      image:
        "https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2016/11/faculdade_mauricio_de_nassau.png",
    },
  ],
};

// --- COMPONENTE ---

const CoursesSection = () => {
  // Define que o estado só aceita chaves que existam no CourseDatabase
  const [activeTab, setActiveTab] = useState<keyof CourseDatabase>("Bootcamps");

  // Define que o Ref é de um elemento HTML DIV
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
    // Forçamos o tipo para garantir que a tab clicada seja tratada como chave do banco
    setActiveTab(tab as keyof CourseDatabase);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="courses-section">
      <p className="section-subtitle">Trajetória Acadêmica</p>
      <h2 className="section-title">Cursos e Certificações</h2>

      <div className="filter-container">
        <div className="glass-nav">
          {/* Mapeamos as chaves do objeto garantindo a tipagem no loop */}
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
          {courseDatabase[activeTab].map((course: Course) => (
            <div className="course-card" key={course.id}>
              <div className="image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
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
                  {course.tags.map((tag: string) => (
                    <span key={tag} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-buttons">
                  <button className="btn-certificate">Ver Certificado</button>
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

export default CoursesSection;
