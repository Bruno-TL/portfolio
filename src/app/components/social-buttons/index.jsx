import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "./socialBtn.scss";

export function SocialButtons() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/t.bruno__/" target="_blank">
        <FaInstagram color="white" size="30px" />
      </a>
      <a href="https://github.com/Bruno-TL" target="_blank">
        <FaGithub color="white" size="30px" />
      </a>
      <a href="https://www.linkedin.com/in/t-bruno-dev-js/" target="_blank">
        <CiLinkedin color="white" size="30px" />
      </a>
    </div>
  );
}
