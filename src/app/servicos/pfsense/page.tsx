import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firewall pfSense",
  description:
    "Segurança de rede com pfSense. Firewall open source para empresas. VPN, filtragem e proteção contra ameaças.",
  alternates: {
    canonical: "https://www.suportedelivery.com/servicos/pfsense",
  },
};

export default function PfSensePage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Firewall pfSense</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Segurança de rede com pfSense. Proteção completa para sua empresa
            contra ameaças digitais.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">O que é pfSense?</h2>
            <p className="mt-4 text-gray-600">
              pfSense é um firewall/router open source baseado no FreeBSD.
              É utilizado por empresas de todos os tamanhos para proteger suas
              redes e gerenciar o tráfego de internet.
            </p>

            <h2 className="mt-10 text-2xl font-bold">Funcionalidades</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">VPN Site-to-Site</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Conecte filiais e escritórios com tunnels VPN seguros.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">VPN Remote Access</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Acesso remoto seguro para colaboradores que trabalham de casa.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Filtragem de Conteúdo</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Bloqueie sites e categorias inadequadas para o ambiente
                  corporativo.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Balanceamento de Carga</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Distribua o tráfego entre múltiplas conexões de internet.
                </p>
              </div>
            </div>

            <h2 className="mt-10 text-2xl font-bold">Nossos Serviços</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                Instalação e configuração de pfSense
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                Regras de firewall e NAT
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                Configuração de VPN
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                Monitoramento e manutenção
              </li>
            </ul>

            <div className="mt-10 text-center">
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20pfSense."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-emerald-600 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
