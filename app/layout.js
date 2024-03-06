import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./ui";
import { StateContext } from "@/app/context/StateContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tec Haven",
  description: "Tec Haven - Elevate Your Sound, Ignite Your Senses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <StateContext>
          <Toaster />
          <header>
            <Navbar />
          </header>
          <main className="main-container">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </StateContext>
      </body>
    </html>
  );
}
