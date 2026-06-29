import Link from "next/link";
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
      <section
        className="relative min-h-[300px] py-20 text-white"
        style={{
          backgroundImage: "url(/images/pfsense-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Firewall pfSense</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Segurança de rede com pfSense. Proteção completa para sua empresa
            contra ameaças digitais.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary">O que é pfSense?</h2>
            <p className="mt-4 text-gray-600">
              pfSense é um firewall/router open source baseado no FreeBSD.
              É utilizado por empresas de todos os tamanhos para proteger suas
              redes e gerenciar o tráfego de internet.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-primary">Funcionalidades</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🔗</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">VPN Site-to-Site</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Conecte filiais e escritórios com tunnels VPN seguros.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🏠</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">VPN Remote Access</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Acesso remoto seguro para colaboradores que trabalham de casa.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🚫</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Filtragem de Conteúdo</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Bloqueie sites e categorias inadequadas para o ambiente
                  corporativo.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">⚖️</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Balanceamento de Carga</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Distribua o tráfego entre múltiplas conexões de internet.
                </p>
              </div>
            </div>

            <h2 className="mt-10 text-3xl font-bold text-primary">Nossos Serviços</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Instalação e configuração de pfSense
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Regras de firewall e NAT
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Configuração de VPN
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Monitoramento e manutenção
              </li>
            </ul>

            <div className="mt-12 rounded-xl bg-primary p-8 text-center text-white">
              <h3 className="text-2xl font-bold">Precisa de segurança de rede?</h3>
              <p className="mt-2 text-blue-100">
                Proteja sua empresa com pfSense. Fale com nossos especialistas.
              </p>
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20pfSense."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-accent-yellow px-8 py-3 text-sm font-semibold text-primary shadow transition hover:bg-yellow-400"
              >
                Fale Conosco via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
