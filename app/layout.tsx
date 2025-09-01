import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Derin | Software Developer",
  description: "",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manRope.variable} antialiased bg-[#1E1E1E] p-3`}
        style={{ "fontFamily": "var(--font-manrope)" }}
      >
        {children}
      </body>
    </html>
  );
}
