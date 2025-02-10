import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from 'sonner'

const outSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outMono = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenneth's Portfolio",
  description: "Modern & Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="./portfolio-logo.png" sizes="any" />
      </head>
      <body
        className={`${outSans.variable} ${outMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
