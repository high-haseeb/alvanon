import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Alvanon",
  description: "we don't make clothes, we make clothes fit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-Montserrat'>{children}</body>
    </html>
  );
}
