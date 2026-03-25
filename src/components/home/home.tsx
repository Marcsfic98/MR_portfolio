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
            Desenvolvedor com uma base sólida construída na infraestrutura de
            redes e telecomunicações.
            <br />
            <br /> Essa bagagem me permite desenvolver aplicações com uma visão
            sistêmica, entendendo desde a performance do tráfego de dados até a
            entrega de interfaces responsivas e de alto impacto visual.
            <br />
            <br />
            Atualmente, curso Análise e Desenvolvimento de Sistemas (3º período)
            e lidero tecnicamente o projeto Serviços Já, selecionado para
            pré-incubação no Senac I.de.i.as. <br />
            <br />
            Sou apaixonado por transformar lógica complexa em experiências
            fluidas utilizando o ecossistema React, Next.js e TypeScript.
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
            href="/cv/marcos_ribeiro_dev.pdf"
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
