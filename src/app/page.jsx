import { Header } from "./components/header";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="experience">
        <h3>Experience</h3>
        <p>
          +1 years working as a web development, in companies such as Sou Energy
          and Freelancer´s
        </p>
        <div className="experience-time"></div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🗣️ EN - Intermediary</span>
            <span>🔰 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>🧑🏽‍🎓</span>
            <span>Analysis and systems development - Estácio de Sá</span>
            <span>Full Stack Development - Digital College</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social"></div>
          <button>contact me</button>
        </div>
      </div>
    </main>
  );
}
