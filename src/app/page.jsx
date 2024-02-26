import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Info } from "./components/info";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "./styles/home.scss";
import { SocialButtons } from "./components/social-buttons";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialButtons />
        <a className="primary-btn">
          <MdOutlineMarkEmailRead />
          contact me
        </a>
      </div>
    </main>
  );
}
