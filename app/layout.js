import localFont from "next/font/local";
import "./globals.css";
import Header from "./comonents/header";
import Footer from "./comonents/footer";
import Topdetails from "./comonents/top-details";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ConstructionSite",
  description: "the construction module",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topdetails />
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
