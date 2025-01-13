import "./globals.css";

export const metadata = {
  title: "Mahfuz Ahmed - Web Developer",
  description: "Mahfuz Ahmed - Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Roboto bg-bg-dark text-light">
        {children}
      </body>
    </html>
  );
}
