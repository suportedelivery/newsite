import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img
              src="/logo.png"
              alt="SuporteDelivery"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm leading-relaxed">
              Suporte de TI empresarial em Curitiba e região metropolitana.
              Soluções completas para sua empresa.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos/manutencao" className="hover:text-accent-yellow">
                  Manutenção de TI
                </Link>
              </li>
              <li>
                <Link href="/servicos/contratos" className="hover:text-accent-yellow">
                  Contratos de Suporte
                </Link>
              </li>
              <li>
                <Link href="/servicos/proxmox" className="hover:text-accent-yellow">
                  Virtualização Proxmox
                </Link>
              </li>
              <li>
                <Link href="/servicos/pfsense" className="hover:text-accent-yellow">
                  Firewall pfSense
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-accent-yellow">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/planos" className="hover:text-accent-yellow">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="hover:text-accent-yellow">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent-yellow">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#mapa" className="hover:text-accent-yellow">
                  Área de Cobertura
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+554137983434" className="hover:text-accent-yellow">
                  (41) 3798-3434
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+5511970839455" className="hover:text-accent-yellow">
                  (11) 97083-9455
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:contato@suportedelivery.com"
                  className="hover:text-accent-yellow"
                >
                  contato@suportedelivery.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 0H9v2h2V9z" clipRule="evenodd" />
                </svg>
                <a
                  href="https://wa.me/554137983434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-yellow"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SuporteDelivery. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
