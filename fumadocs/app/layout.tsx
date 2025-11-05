import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binance API Node Documentation",
  description: "Documentation for binance-api-node - A complete API wrapper for the Binance API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
