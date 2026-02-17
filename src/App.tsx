import "./App.css";
import { Hero } from "./pages/hero";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Não esqueça do CSS!

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true, // Se a animação deve acontecer apenas uma vez
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="App">
      <Hero />
    </div>
  );
}
export default App;
