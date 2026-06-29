"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/segmentos", label: "Segmentos" },
  { href: "/planos", label: "Planos" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="SuporteDelivery"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 transition hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-light md:inline-block"
        >
          Fale Conosco
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition ${
              mobileOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition ${
              mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-lg bg-primary px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
}
