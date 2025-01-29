import type { Metadata } from "next";
import "./globals.css";
import Navbar1 from "./component/navbar1";
import Topsale from "./component/topsale";
import Footer from "./component/footer";


export const metadata: Metadata = {
  title: "Bandage",
  description: "Bandage Multi Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
        <body>
          {/* Hide Topsale on mobile */}
          <div className="hidden lg:block">
            <Topsale />
          </div>
          <Navbar1 />
          {children}
          <Footer />
        </body>
      </html>
   
  );
}
