import NavBar from "./components/NavBar/NavBar";

import RegisterModal from "./components/modal/RegisterModal";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ToasterProvider /> */}
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
