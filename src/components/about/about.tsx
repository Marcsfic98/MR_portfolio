import { FaRegUser } from "react-icons/fa";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "../../index.css";
import "./about.css";

export function About() {
  return (
    <article className="about_container">
      <h4 className="title">
        <FaRegUser /> Sobre mim
      </h4>
      <h1 className="about_title">
        Prazer em <span className="txt-gradient">conhecê-lo!</span>
      </h1>

      <div className="about_content">
        {/* LADO ESQUERDO: TEXTO COM NOTAÇÕES */}
        <section className="txt_about">
          <RoughNotationGroup show={true}>
            <p>
              Minha trajetória na tecnologia começou onde poucos desenvolvedores
              costumam transitar: no
              <RoughNotation type="box" color="#ff69b4">
                {' "chão de fábrica" '}
              </RoughNotation>
              , atuando como{" "}
              <RoughNotation type="underline" color="#ff8c00" strokeWidth={2}>
                Técnico de Redes
              </RoughNotation>
              .
              <br />
              <br />
              Essa vivência prática me proporcionou uma compreensão profunda da
              base de qualquer aplicação, permitindo que hoje, como Engenheiro
              de Software, eu projete
              <RoughNotation
                type="bracket"
                brackets={["left", "right"]}
                color="#8a2be2"
                strokeWidth={3}
              >
                {" sistemas resilientes e escaláveis "}
              </RoughNotation>
              .
              <br />
              <br />
            </p>

            <p>
              Atualmente, sou o <strong>Desenvolvedor Responsável</strong> pelo
              <RoughNotation type="circle" color="#32cd32" padding={8}>
                {" Serviços Já "}
              </RoughNotation>
              , um projeto estratégico em fase de pré-incubação na{" "}
              <strong>Incubadora I.de.i.as (Senac)</strong>. Neste desafio, atuo
              na intersecção entre a Engenharia e o Produto, liderando desde a
              modelagem do banco de dados até a entrega de
              <RoughNotation type="underline" color="#ff69b4">
                {" interfaces de alta performance "}
              </RoughNotation>
              .
            </p>
          </RoughNotationGroup>
        </section>

        {/* LADO DIREITO: CARDS COM EFEITO VIDRO */}
        <aside className="cards_stack">
          <div className="card_glass">
            <div className="card_icon icon_blue">{"</>"}</div>
            <div className="card_info">
              <h3>Front-End</h3>
              <p>
                Interfaces modernas e responsivas com foco na experiência do
                usuário
              </p>
            </div>
          </div>

          <div className="card_glass">
            <div className="card_icon icon_purple">{"db"}</div>
            <div className="card_info">
              <h3>Back-End</h3>
              <p>
                Sistemas seguros e escaláveis, com arquiteturas bem estruturadas
              </p>
            </div>
          </div>

          <div className="card_glass">
            <div className="card_icon icon_green">{"☆"}</div>
            <div className="card_info">
              <h3>Qualidade</h3>
              <p>
                Código limpo, versionamento com Git e práticas ágeis de
                desenvolvimento
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
