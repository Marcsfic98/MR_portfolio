import "./Experience.css";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  type: "work" | "education" | "freelance" | "future";
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Instalador de Infraestrutura Telecom",
    company: "Tecnomult",
    period: "2022 — 2024",
    type: "work",
    description: [
      "Implementação e manutenção de infraestrutura de redes lógica e física.",
      "Configuração de ativos de rede e garantia de conectividade de alta performance.",
      "Resolução de problemas críticos em ambientes de missão dedicada.",
    ],
    skills: ["Redes", "Infraestrutura", "Hardware", "Troubleshooting"],
  },
  {
    id: 4,
    title: "Desenvolvedor Fullstack Freelancer",
    company: "Projetos Independentes",
    period: "2024 — Presente",
    type: "freelance",
    description: [
      "Desenvolvimento de Landing Pages de alta conversão e sistemas de gestão personalizados.",
      "Consultoria técnica para pequenos negócios, unindo visão de infraestrutura e software.",
      "Arquitetura de soluções mobile com React Native e Expo.",
    ],
    skills: ["Next.js", "React Native", "UI/UX", "Consultoria Técnica"],
  },
  {
    id: 2,
    title: "Desenvolvedor Fullstack Javascript",
    company: "Bootcamp Generation Brasil",
    period: "Jan 2026 — Mar 2026",
    type: "education",
    description: [
      "Desenvolvimento de aplicações ponta a ponta utilizando a stack TypeScript, NestJS e React.",
      "Foco intensivo em Soft Skills: trabalho em equipe, comunicação assertiva e ética profissional.",
      "Criação do projeto 'Nutrigo', aplicando metodologias ágeis e Clean Code.",
    ],
    skills: [
      "NestJS",
      "TypeScript",
      "React",
      "Soft Skills",
      "Metodologias Ágeis",
    ],
  },
  {
    id: 3,
    title: "Desenvolvedor Fullstack",
    company: "Bootcamp Atlântico Avanti",
    period: "Jan 2026 — Mar 2026",
    type: "education",
    description: [
      "Especialização em arquiteturas escaláveis e integração de sistemas modernos.",
      "Simulação de ambiente real de trabalho com Sprints semanais e revisão de código.",
      "Implementação de sistemas de autenticação robustos e gestão de bancos de dados relacionais.",
    ],
    skills: ["Node.js", "Prisma", "PostgreSQL", "JWT", "Code Review"],
  },

  {
    id: 5,
    title: "Seu Próximo Grande Desafio",
    company: "Sua Empresa...",
    period: "2026 — Futuro",
    type: "future",
    description: [
      "Pronto para aplicar minha base técnica e resiliência para resolver os problemas do seu time.",
      "Comprometido com a entrega de código de qualidade e evolução constante.",
      "Disponível para transformar café em código escalável.",
    ],
    skills: ["Sua Stack", "Inovação", "Liderança Técnica", "Proatividade"],
  },
];

const TimeSection = () => {
  return (
    <section className="experience-section" id="experience">
      <p className="section-subtitle">Carreira & Evolução</p>
      <h2 className="section-title">Minha Experiência</h2>

      <div className="timeline-container">
        {experiences.map((exp) => (
          <div className={`timeline-item ${exp.type}`} key={exp.id}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.period}</div>

            <div className="timeline-content glass-card">
              <span className={`exp-type-tag ${exp.type}`}>{exp.type}</span>
              <h3>{exp.title}</h3>
              <h4 className="company-name">{exp.company}</h4>

              <ul className="exp-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="exp-skills">
                {exp.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeSection;
