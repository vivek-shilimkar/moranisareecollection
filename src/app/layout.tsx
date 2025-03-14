import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Knot N Threads - Traditional Handloom Cotton Sarees",
  description: "Shop Chettinad Cotton Traditional Sarees and Handloom Cotton Sarees. Perfect collection of Traditional Cotton Sarees tailored to meet your needs.",
  icons: {
    icon: [
      {
        url: "https://web-assets.same.dev/610373270/30836308.png",
        href: "https://web-assets.same.dev/610373270/30836308.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
