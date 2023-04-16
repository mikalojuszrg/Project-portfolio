import "./globals.scss";

import { Montserrat } from "@next/font/google";
import { ThemeProvider } from "./contexts/ThemeContext";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "By Mikalojus Žirgulis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={montserrat.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
