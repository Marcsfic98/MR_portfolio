import { useRef, useState } from "react";
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
        "Formação intensiva focada em empregabilidade e soft skills.",
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
      description: "Programa de aceleração em tecnologias modernas.",
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
      description: "Curso técnico em lógica e backend com Python.",
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
      description: "Especialização em React Native.",
      tags: ["Javascript", "Node", "React Native", "Git"],
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
      tags: ["Javascript", "React", "CSS", "HTML"],
      image: "/img/cursos/c1.png",
    },
  ],
  Faculdade: [
    {
      id: "f1",
      title: "Análise e Desenvolvimento de Sistemas (ADS)",
      institution: "Mauricio de Nassau",
      duration: "2.5 anos",
      date: "2025",
      description: "Graduando no 3º período.",
      tags: ["TypeScript", "Python", "SQL", "Git", "Agile", "React"],
      image:
        "https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2016/11/faculdade_mauricio_de_nassau.png",
    },
  ],
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState<keyof CourseDatabase>("Bootcamps");
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
    setActiveTab(tab as keyof CourseDatabase);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
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
