import { Inter } from "@next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnalyticsWrapper } from "@/components/Analytics";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head />
      <body
        className={cn(
          "text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50",
          inter.className
        )}
      >
        <Header />
        <main className="container mx-auto py-10 px-4">{children}</main>
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
