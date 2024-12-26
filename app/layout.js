import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mahfuz Ahmed - Web Developer",
  description: "Mahfuz Ahmed - Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Roboto bg-bg-dark text-light">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
