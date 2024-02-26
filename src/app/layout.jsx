import { Poppins } from "next/font/google";
import "./globals.scss";

export const metadata = {
  title: "T.Bruno Dev",
  description: "T.Bruno is software engineer",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
