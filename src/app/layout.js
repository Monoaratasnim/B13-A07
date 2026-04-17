import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#f9fafb] overflow-x-hidden">
        <Navbar />
        <Toaster position="top-right" />

        <main className="flex-grow pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
