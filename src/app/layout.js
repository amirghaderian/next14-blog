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
        <div className=" container w-[1536px] m-auto px-[50px] ">
        <Navabar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
