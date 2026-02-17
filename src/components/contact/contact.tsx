import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const ContactSection = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Enviando...");

    const formData = new FormData(event.target);

    // Adicione sua Access Key do Web3Forms aqui:
    formData.append("access_key", "1e126385-a3f3-46a9-bdb9-19468f48dd3d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Mensagem enviada com sucesso! ✨");
        event.target.reset();
        // Limpa a mensagem após 5 segundos
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("Erro ao enviar. Tente novamente.");
        console.error("Erro:", data);
      }
    } catch (error) {
      setResult("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      {/* Cabeçalho */}
      <div className="contact-header" data-aos="fade-down">
        <div className="contact-badge">
          <span>
            <FaPhone />
          </span>{" "}
          Contato
        </div>
        <h2>
          Vamos trabalhar <span>juntos?</span>
        </h2>
        <p>
          Disponível para novos projetos e colaborações. Vamos discutir como
          transformar ideias em soluções bem executadas.
        </p>
      </div>

      {/* Caixa de Contato Principal */}
      <div className="contact-container">
        {/* Lado Esquerdo - Formulário */}
        <div className="form-column" data-aos="fade-right" data-aos-delay="200">
          <p className="contact-intro-text">
            Obrigado por visitar meu portfólio. Para mais informações ou para
            conversar sobre oportunidades, fique à vontade para entrar em
            contato.
          </p>

          <form className="contact-form" onSubmit={onSubmit}>
            {/* Honeypot para evitar SPAM (invisível para o usuário) */}
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />

            <input type="text" name="name" placeholder="Seu nome:" required />
            <input
              type="email"
              name="email"
              placeholder="Seu email:"
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem:"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>

          {result && (
            <p
              className={`form-status ${
                result.includes("sucesso") ? "success" : "error"
              }`}
            >
              {result}
            </p>
          )}
        </div>

        {/* Lado Direito - Redes Sociais */}
        <div
          className="contact-links"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <a
            href="https://github.com/Marcsfic98"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <div className="social-icon">
              <SiGithub size={20} />
            </div>
            <div className="social-info">
              <span>GitHub</span>
              <p>github.com/Marcsfic98</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/marcsfic/"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <div className="social-icon">
              <SiLinkedin size={20} />
            </div>
            <div className="social-info">
              <span>Linkedin</span>
              <p>linkedin.com/in/marcsfic/</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/marcos_ribeiro.ts/"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <div className="social-icon">
              <SiInstagram size={20} />
            </div>
            <div className="social-info">
              <span>Instagram</span>
              <p>@marcos_ribeiro.ts</p>
            </div>
          </a>
        </div>
      </div>

      <p className="footer-quote" data-aos="zoom-in" data-aos-offset="0">
        Se você tem um projeto em mente, eu tenho o código. Vamos colocar essa
        ideia pra rodar!
      </p>
    </section>
  );
};

export default ContactSection;
