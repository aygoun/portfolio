import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Armand Blin",
  description: "Armand Blin personal portfolio for an ML Engineer.",
  metadataBase: new URL("https://localhost"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
