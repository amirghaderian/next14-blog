import { Footer, Navabar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Next 14 AMIR",
  description: "Create by amir!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className=" container w-[1100px] m-auto px-[50px] h-screen flex-col justify-between items-start ">
        <Navabar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
