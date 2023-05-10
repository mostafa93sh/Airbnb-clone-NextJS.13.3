import NavBar from "./components/NavBar/NavBar";
import Modal from "./components/modal/Modal";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Modal actionLabel="" onSubmit={() => {}} onClose={() => {}} />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
