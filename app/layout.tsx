import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque/wdth.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumen Dental | Clínica dental con tiempo para ti",
  description:
    "Revisión, limpieza, blanqueamiento y ortodoncia invisible. Reserva tu cita en línea en menos de un minuto. Sitio de demostración.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
