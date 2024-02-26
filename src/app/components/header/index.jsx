import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <>
      <div className="header">
        <div>
          <h1>Hi, i´m T.Bruno! 🖖🏼</h1>
          <h2>Front-End Developer</h2>
        </div>
        <Image
          className="img"
          src="/profile-pic.png"
          width={200}
          height={200}
          alt="img"
        />
      </div>
    </>
  );
}
