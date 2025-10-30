import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Athanase Ngaiporo - Développeur Web Full Stack",
  description:
    "Portfolio professionnel d'Athanase Ngaiporo, développeur web full stack passionné par les technologies modernes, la blockchain et la cybersécurité.",
  keywords: [
    "Athanase Ngaiporo",
    "développeur web",
    "full stack",
    "React",
    "Next.js",
    "blockchain",
    "cybersécurité",
  ],
  authors: [{ name: "Athanase Ngaiporo" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navigation />
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
