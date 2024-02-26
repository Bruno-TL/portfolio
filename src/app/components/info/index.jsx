import { SectionTitle } from "../sectionTitle";
import "./info.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🗣️ EN - Intermediary</span>
        <span>🔰 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🧑🏽‍🎓</span>
        <span>Analysis and systems development - Estácio de Sá</span>
        <span>Full Stack Development - Digital College</span>
      </div>
    </div>
  );
}
