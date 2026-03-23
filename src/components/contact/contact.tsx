import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, type FormEvent } from "react";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import "./contact.css";

const ContactSection = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Enviando...");

    const target = event.currentTarget;
    const formData = new FormData(target);
    formData.append("access_key", "1e126385-a3f3-46a9-bdb9-19468f48dd3d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Mensagem enviada com sucesso! ✨");
        target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setResult("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contato">
      <div className="contact-header" data-aos="fade-down">
        <div className="contact-badge">
          <FaPhone size={14} />
          <span>Contato</span>
        </div>
        <h2>
          Vamos trabalhar <span>juntos?</span>
        </h2>
        <p>
          Disponível para novos projetos e colaborações. Vamos transformar
          ideias em soluções reais.
        </p>
      </div>

      <div className="contact-container" data-aos="zoom-in">
        <div className="form-column">
          <p className="contact-intro-text">
            Obrigado por visitar meu portfólio. Sinta-se à vontade para enviar
            uma mensagem diretamente por aqui.
          </p>

          <form className="contact-form" onSubmit={onSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />
            <div className="input-group">
              <input type="text" name="name" placeholder="Seu nome" required />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Sua mensagem"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensagem <FaPaperPlane size={14} />
                </>
              )}
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

        <div className="contact-links-column">
          <div className="links-grid">
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
                <p>Marcsfic98</p>
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
                <span>LinkedIn</span>
                <p>marcsfic</p>
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
      </div>

      <p className="footer-quote" data-aos="fade-up">
        "Se você tem o projeto, eu tenho o código."
      </p>
    </section>
  );
};

export default ContactSection;
