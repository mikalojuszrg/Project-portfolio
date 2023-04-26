import "./globals.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Montserrat } from "@next/font/google";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";

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
        <body className={montserrat.className}>
          <ThemeWrapper>{children}</ThemeWrapper>
        </body>
      </ThemeProvider>
    </html>
  );
}
