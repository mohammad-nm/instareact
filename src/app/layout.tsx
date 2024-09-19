import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";
import { Nunito } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: "InstaReact",
  description: "InstaReact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={nunito.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
