import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../../index.css";
import GitHubSection from "../gitihub/github";
import "./home.css";
export function Home() {
  return (
    <>
      <article className="container">
        <div className="content">
          <h1 data-aos="fade-up">
            Olá, Sou <span className="txt-gradient">Marcos Ribeiro</span>
          </h1>
          <h3 data-aos="fade-right">Desenvolvedor Fullstack</h3>
          <p data-aos="fade-left">
            Unindo a experiência em infraestrutura de redes com a Engenharia de
            Software. Entendo como o dado trafega da camada física até a tela do
            usuário. Atualmente no 3º período de ADS, foco em criar soluções
            eficientes, seguras e com mentalidade de dono. Em busca de
            oportunidades como desenvolvedor para seguirtransformando tecnologia
            em impacto real de negócio.
          </p>
        </div>

        <GitHubSection />

        <div className="buttons_container">
          <a
            href="https://www.linkedin.com/in/marcsfic/"
            target="_blank"
            className="btn"
          >
            <FaLinkedinIn className="btn_bg" />
          </a>
          <a
            href="https://github.com/Marcsfic98"
            target="_blank"
            className="btn"
          >
            <FaGithub className="btn_bg" />
          </a>
          <a href="mailto:marcsfic98@gmail.com" target="_blank" className="btn">
            <IoMdMail className="btn_bg" />
          </a>
          <a
            href="https://www.instagram.com/marcos_ribeiro.ts/"
            target="_blank"
            className="btn"
          >
            <FaInstagram className="btn_bg" />
          </a>
        </div>

        <div className="menu_container">
          <a
            className="btn_cv"
            href="/cv/marcos_ribeiro_dev.pdf" // Caminho baseado na sua estrutura de pastas
            download="marcos_ribeiro_dev.pdf"
          >
            <FaDownload style={{ marginRight: "8px" }} /> Baixar CV
          </a>
          <a className="btn_project" href="#projects-section">
            Ver Projetos
          </a>
        </div>
      </article>
    </>
  );
}
