import { FaPhone } from "react-icons/fa";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import "./Contact.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Cabeçalho */}
      <div className="contact-header">
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
        <div className="form-column">
          <p className="contact-intro-text">
            Obrigado por visitar meu portfólio. Para mais informações ou para
            conversar sobre oportunidades, fique à vontade para entrar em
            contato.
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Seu nome:" required />
            <input type="email" placeholder="Seu email:" required />
            <textarea placeholder="Sua mensagem:" required></textarea>
            <button type="submit" className="btn-submit">
              Enviar mensagem
            </button>
          </form>
        </div>

        {/* Lado Direito - Redes Sociais */}
        <div className="contact-links">
          <a href="https://github.com" className="social-card">
            <div className="social-icon">
              <SiGithub size={20} />
            </div>
            <div className="social-info">
              <span>GitHub</span>
              <p>https://github.com</p>
            </div>
          </a>

          <a href="https://linkedin.com" className="social-card">
            <div className="social-icon">
              <SiLinkedin size={20} />
            </div>
            <div className="social-info">
              <span>Linkedin</span>
              <p>https://www.linkedin.com</p>
            </div>
          </a>

          <a href="https://instagram.com" className="social-card">
            <div className="social-icon">
              <SiInstagram size={20} />
            </div>
            <div className="social-info">
              <span>Instagram</span>
              <p>https://www.instagram.com</p>
            </div>
          </a>
        </div>
      </div>

      <p className="footer-quote">
        Se você tem um projeto em mente, eu tenho o código. Vamos colocar essa
        ideia pra rodar!
      </p>
    </section>
  );
};

export default ContactSection;
