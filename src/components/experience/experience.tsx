import { useRef, useState } from "react";
import "./Courses.css";

const courseDatabase = {
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
        "data:image/jpeg;base64,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",
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
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("Bootcamps");
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
          {Object.keys(courseDatabase).map((tab) => (
            <button
              key={tab}
              className={`glass-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="carousel-container">
        <button className="nav-arrow prev" onClick={() => scroll("left")}>
          ❮
        </button>

        <div className="courses-carousel" ref={carouselRef}>
          {courseDatabase[activeTab].map((course) => (
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

                {/* --- Nova Descrição Adicionada Aqui --- */}
                <p className="course-desc">{course.description}</p>

                <div className="tags-box">
                  {course.tags.map((tag) => (
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
