import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/components/cart/cart-context";
import { cookies } from "next/headers";
import { getCart, getMenu } from "@/lib/shopify";
import { ProductSearchProvider } from "@/context/ProductSearchContext";
import { AnnouncementBar } from "@/components/layout/announcement_bar/announcement-bar";
import { MAIN_MENU } from "@/lib/constants";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://equimas.com.co"),
  applicationName: "Equimas",
  title: {
    default:
      "Equimas | Equipos de Acero e Inoxidables",
    template: "%s | Equimas",
  },
  description:
    "Especialistas en equipos de acero: asadores, módulos a medida, hornos, ollas y estufas industriales. Calidad garantizada en toda Colombia.",
  keywords: [
    "Equimas",
    "equipos de acero",
    "acero inoxidable",
    "asadores profesionales",
    "módulos a medida",
    "hornos de acero",
    "ollas y calderos",
    "estufas de mesa",
    "perritos y hamburguesas",
    "planchas para asar",
    "cocinas industriales",
    "mobiliario de acero",
  ],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Equimas | Equipos de Acero e Inoxidables",
    description:
      "Asadores, Hornos, Módulos a medida y más. Calidad superior en acero para tu negocio u hogar.",
    url: "https://equimas.com.co",
    siteName: "Equimas",
    images: [
      {
        url: "/not-found.png",
        width: 1200,
        height: 630,
        alt: "Equimas - Equipos de Acero",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equimas | Equipos de Acero e Inoxidables",
    description:
      "Asadores, Hornos, Módulos a medida y más. Calidad superior en acero para tu negocio u hogar.",
    images: ["/not-found.png"],
  },
};

import { WhatsAppButton } from "@/components/common/whatsapp-button";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cartId = cookieStore?.get("cartId")?.value;
  const cart = getCart(cartId);

  const menuResponse = (await getMenu(MAIN_MENU)).splice(3, 3);

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Equimas",
              url: "https://equimas.com.co",
              logo: "https://equimas.com.co/favicon.svg",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Equimas",
              url: "https://equimas.com.co/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://equimas.com.co/products?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <CartProvider cartPromise={cart}>
        <ProductSearchProvider>
          <body className={`${poppins.variable} font-poppins antialiased`}>
            <AnnouncementBar />

            <section className="relative">
              <Navbar menuResponse={menuResponse} />

              <main className="max-w-8xl relative mx-auto h-full min-h-[calc(100vh-100px)] w-full">
                {children}
              </main>
            </section>
            <Footer />
            <WhatsAppButton />
          </body>
        </ProductSearchProvider>
      </CartProvider>
    </html>
  );
}
