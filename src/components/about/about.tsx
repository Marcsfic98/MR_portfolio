import { FaCode, FaRegUser, FaRocket } from "react-icons/fa"; // Adicionei novos ícones
import { FaSquareDribbble } from "react-icons/fa6";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "../../index.css";
import "./about.css";

export function About() {
  return (
    <article className="about_container">
      <h4 className="title">
        <FaRegUser /> Sobre mim
      </h4>
      <h1 data-aos="zoom-in" className="about_title">
        Historia, <span className="txt-gradient">Realizações</span> e Metas.
      </h1>

      <div data-aos="fade-right" className="about_content">
        <section className="txt_about">
          <RoughNotationGroup show={true}>
            <p>
              Minha base técnica nasceu na infraestrutura de redes, o que me
              moldou com uma
              <RoughNotation type="box" color="#ff69b4" strokeWidth={2}>
                {" mentalidade analítica e resiliente "}
              </RoughNotation>
              . Não apenas escrevo código; eu entendo como o dado trafega e a
              arquitetura por trás dele. Essa transição para o desenvolvimento
              me permitiu unir a precisão da infraestrutura com a{" "}
              <strong>
                agilidade do ecossistema Full Stack (React, Node.js e
                TypeScript)
              </strong>
              .
              <br />
              <br />
              Atualmente cursando{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong>,
              destaquei-me como
              <RoughNotation type="underline" color="#ff8c00" strokeWidth={2}>
                {" Líder Técnico no projeto Serviços Já "}
              </RoughNotation>
              , onde exercitei a <strong>comunicação assertiva</strong>, guiando
              o time desde a concepção até a pré-incubação no Senac I.de.i.as.
              <br />
              <br />
              Acredito que tecnologia é sobre pessoas. Minha experiência em
              squads de alta performance consolidou minha capacidade de
              <RoughNotation
                type="bracket"
                brackets={["left", "right"]}
                color="#8a2be2"
                strokeWidth={3}
              >
                {" colaboração extrema e entregas orientadas a valor "}
              </RoughNotation>
              .
              <br />
              <br />
              {/* Seção focada em recrutadores e busca ativa */}
              <span className="hiring_call">
                <FaRocket color="#00d4ff" />{" "}
                <strong>Estou em busca de novos desafios</strong> onde eu possa
                aplicar meu foco em <strong>Clean Code</strong>, testes
                automatizados e escalabilidade para impulsionar resultados
                reais.
              </span>
            </p>
          </RoughNotationGroup>
        </section>

        <aside data-aos="fade-left" className="cards_stack">
          {/* Card de Tech Stack - Essencial para SEO de recrutadores */}
          <div className="card_glass">
            <div className="card_icon icon_yellow">
              <FaCode color="#fff" size={26} />
            </div>
            <div className="card_info">
              <h3>Tech Stack</h3>
              <p>
                Domínio em{" "}
                <strong>React, Next.js, Node.js e React Native</strong>. Foco em
                código testável, performático e componentização.
              </p>
            </div>
          </div>

          <div className="card_glass">
            <div className="card_icon icon_blue">
              <FaSquareDribbble size={26} />
            </div>
            <div className="card_info">
              <h3>Soft Skills</h3>
              <p>
                Liderança técnica, metodologias ágeis (Scrum) e facilidade em
                traduzir requisitos de negócio em soluções técnicas.
              </p>
            </div>
          </div>

          <div className="card_glass">
            <div className="card_icon icon_green">{"🌱"}</div>
            <div className="card_info">
              <h3>Evolução Contínua</h3>
              <p>
                Transição sólida da infra para software. Estudante ativo e
                desenvolvedor focado em aprender e aplicar novas tecnologias
                rapidamente.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
