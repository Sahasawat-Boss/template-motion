import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "@/contexts/Provider";
import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// export const metadata = {
//   title: "Keeratipong | Portfolio",
//   description: "Web developer base in Bangkok",
// };
export const metadata = {
  title: "landing-page-template",
  description:
    "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sora.variable} relative flex flex-col bg-slate-100 font-Sora text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Gradient background color */}
        <div className="absolute right-[12rem] top-[-6rem] -z-[10] h-[31.25rem] w-[31.25rem] flex-1 rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#c5afb0] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-[10] h-[31.25rem] w-[50rem] flex-1 rounded-full bg-[#cad8c3] blur-[10rem] dark:bg-[#0f202c] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Providers>
          <Navbar />
          {children}
          {/* <Footer /> */}
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
