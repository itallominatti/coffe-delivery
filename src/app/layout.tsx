import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Coffe delivery",
  description: "Loja virtual para compra de cafés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
