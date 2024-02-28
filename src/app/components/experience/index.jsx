import { SectionTitle } from "../sectionTitle";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";

import "./experience.scss";
export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        +1 years working as a web development, in companies such as Sou Energy
        and Freelancer
      </p>
      <div className="experience-time">
        <div className="experience-language">
          <FaReact color="blue" size="50px" />
          <div className="experience-unit">
            <div className="experience-measure measure-4">
              <span>2 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <TbBrandReactNative color="blue" size="50px" />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>3 months</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <FaVuejs color="green" size="50px" />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>+1 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <FaLaravel color="orange" size="50px" />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>+1 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <FaMagento color="orange" size="50px" />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>+1 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <RiJavascriptFill color="yellow" size="50px" />
          <div className="experience-unit">
            <div className="experience-measure measure-4">
              <span>2 years</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <SiPhp color="blue" size="50px" />
          <div className="experience-unit">
            <div className="experience-measure measure-4">
              <span>2 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
