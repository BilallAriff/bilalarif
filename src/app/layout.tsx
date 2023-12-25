import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeRegistery from "../../theme/ThemeRegistery.js";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

const NunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilal Arif",
  description: "Software Engineer on the UX/UI Side",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <ThemeRegistery options={{ key: "mui-theme" }}>
        <body className={NunitoSans.className}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {children}
          </AppRouterCacheProvider>
        </body>
      </ThemeRegistery>
    </html>
  );
}
