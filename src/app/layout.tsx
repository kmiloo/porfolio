import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Interactivo",
  description:
    "Portasadadsadsdsafolio interactivo de alto rendimiento con visualizadores y playground tecnico.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className={`${inconsolata.className} flex min-h-full flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
