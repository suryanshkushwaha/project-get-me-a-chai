import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Get Me A Chai - Fund your projects with chai",
  description: "This website is a crowdfunding platform for creators.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className="flex flex-col min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  );
}
