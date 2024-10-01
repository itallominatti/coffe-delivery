import type { Metadata } from "next";
import "./globals.css";
import { type_first } from "@/functions/fonts";
import Header from "@/components/Header";


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
    <html lang="pt-br">
      <body className={type_first.variable}>
        <div className="App">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
