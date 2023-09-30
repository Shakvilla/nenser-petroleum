"use client";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Outfit } from "next/font/google";
import Footer from "@/components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const outfit = Outfit({ subsets: ["latin"] });

// export const metadata = {
//   title: "Nenser Petroleum",
//   description: "Bulk distributer of petroleum products ",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: "1200",
    });
  }, []);
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="">
          <Navbar />
          {children}
          <div className="mt-48 mb-8">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
