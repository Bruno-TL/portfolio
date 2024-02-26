import { SectionTitle } from "../sectionTitle";
import "./experience.scss";
export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        +1 years working as a web development, in companies such as Sou Energy
        and Freelancer´s
      </p>
      <div className="experience-time"></div>
    </div>
  );
}
