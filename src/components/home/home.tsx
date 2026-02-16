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
          <h1>
            Olá, Sou <span className="txt-gradient">Marcos Ribeiro</span>
          </h1>
          <h3>Desenvolvedor Fullstack</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
            tempora commodi? Aut, consequuntur nisi nobis corporis quibusdam,
            mollitia non dolorum suscipit ad incidunt omnis reiciendis
            doloribus, ipsam inventore sapiente delectus!
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
