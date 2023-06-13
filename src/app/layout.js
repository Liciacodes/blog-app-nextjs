import "./globals.css";
import { Inter } from "next/font/google";
import { Quicksand } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "a blog app created with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" mx-6 lg:mx-10 ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
