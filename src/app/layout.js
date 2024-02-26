import { Inter, Poppins } from "next/font/google";
import "./globals.scss";

export const metadata = {
  title: "T.Bruno Dev",
  description: "T.Bruno is software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
