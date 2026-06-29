import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SuporteDelivery | Suporte de TI Empresarial em Curitiba",
    template: "%s | SuporteDelivery",
  },
  description:
    "Suporte de TI empresarial em Curitiba. Contratos de manutenção, virtualização Proxmox, firewall pfSense. Atendimento remoto e presencial para sua empresa.",
  keywords: [
    "suporte de TI",
    "manutenção de computadores",
    "contrato de suporte",
    "TI empresarial",
    "Curitiba",
    "Proxmox",
    "pfSense",
    "virtualização",
    "firewall",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.suportedelivery.com",
    siteName: "SuporteDelivery",
    title: "SuporteDelivery | Suporte de TI Empresarial em Curitiba",
    description:
      "Suporte de TI empresarial em Curitiba. Contratos de manutenção, virtualização Proxmox, firewall pfSense.",
    images: [
      {
        url: "https://www.suportedelivery.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SuporteDelivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuporteDelivery | Suporte de TI Empresarial em Curitiba",
    description:
      "Suporte de TI empresarial em Curitiba. Contratos de manutenção, virtualização Proxmox, firewall pfSense.",
    images: ["https://www.suportedelivery.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.suportedelivery.com",
    languages: {
      "pt-BR": "https://www.suportedelivery.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,'document','script','dataLayer','GTM-K56KQK2');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VX6PDL1ZP6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VX6PDL1ZP6');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K56KQK2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
