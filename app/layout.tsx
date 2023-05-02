import "./globals.scss";

import { Montserrat } from "@next/font/google";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";

const montserrat = Montserrat({
  weight: ["400", "700"],
  variable: "--font-montserrat",
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
        <body className={montserrat.variable}>
          <ThemeWrapper>{children}</ThemeWrapper>
        </body>
      </ThemeProvider>
    </html>
  );
}
