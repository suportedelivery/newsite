import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <span className="text-xl font-bold text-white">SuporteDelivery</span>
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
                <Link href="/servicos/manutencao" className="hover:text-emerald-400">
                  Manutenção de TI
                </Link>
              </li>
              <li>
                <Link href="/servicos/contratos" className="hover:text-emerald-400">
                  Contratos de Suporte
                </Link>
              </li>
              <li>
                <Link href="/servicos/proxmox" className="hover:text-emerald-400">
                  Virtualização Proxmox
                </Link>
              </li>
              <li>
                <Link href="/servicos/pfsense" className="hover:text-emerald-400">
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
                <Link href="/sobre" className="hover:text-emerald-400">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/planos" className="hover:text-emerald-400">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="hover:text-emerald-400">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+554137983434" className="hover:text-emerald-400">
                  (41) 3798-3434
                </a>
              </li>
              <li>
                <a href="tel:+5511970839455" className="hover:text-emerald-400">
                  (11) 97083-9455
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@suportedelivery.com"
                  className="hover:text-emerald-400"
                >
                  contato@suportedelivery.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/554137983434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SuporteDelivery. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
