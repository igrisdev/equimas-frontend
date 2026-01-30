"use client";

// import Image from "next/image";

import logoImg from "@/assets/images/logo.png";

import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

// Ícono personalizado de TikTok (SVG)
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.5 2c.6 0 1.1 0 1.6.1.2 2.2 1.8 4.1 4 4.5v2.2c-1.4-.1-2.7-.6-3.8-1.4v7.2a5.6 5.6 0 1 1-5.6-5.6c.2 0 .5 0 .7.1v2.3a3.3 3.3 0 1 0 2.6 3.3V2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-background px-6 py-12 text-white lg:px-20">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-4 md:grid-cols-4 md:items-start">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center space-y-3 md:items-start">
          <img
            src="/image.png"
            alt="Equimas Logo"
            className="h-[60px] w-auto object-contain"
          />
          <p className="text-center text-sm md:text-left">
            Tu tienda de productos de acero, calidad comprobada.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <h3 className="text-lg font-semibold">Enlaces</h3>
          <nav className="flex flex-col space-y-1 text-center md:text-left">
            <a href="/about-us" className="text-sm hover:underline">Acerca de nosotros</a>
            <a href="/credit" className="text-sm hover:underline">Opciones de Crédito</a>
          </nav>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/profile.php?id=61577617222740"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-800 p-2 transition hover:bg-blue-600"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Ubicación y Contacto */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Ubicación y Contacto</h3>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <MapPin size={18} />
            <span>Cra 6 # 0N - 02. Popayan, Cauca.</span>
          </div>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <Phone size={18} />
            <span>3218520566</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-xs md:justify-start">
            <Mail size={18} />
            <span>ventas@equimasequiposyrepuestos.com</span>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-white pt-6 text-center text-sm">
        © {new Date().getFullYear()} Equimas. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}
