import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça nossos serviços de TI: manutenção de computadores, contratos de suporte, virtualização Proxmox e firewall pfSense.",
  alternates: {
    canonical: "https://www.suportedelivery.com/servicos",
  },
};

const services = [
  {
    title: "Manutenção de TI",
    description:
      "Manutenção preventiva e corretiva de computadores, servidores e rede. Diagnóstico completo e soluções rápidas.",
    href: "/servicos/manutencao",
    icon: "🔧",
    features: [
      "Formatação e instalação de sistemas",
      "Limpeza e manutenção preventiva",
      "Reparo de hardware e software",
      "Suporte remoto e presencial",
    ],
  },
  {
    title: "Contratos de Suporte",
    description:
      "Planos mensais com suporte dedicado. Custo fixo e atendimento prioritário.",
    href: "/servicos/contratos",
    icon: "📋",
    features: [
      "Suporte remoto ilimitado",
      "Visitas presenciais agendadas",
      "Custo fixo mensal",
    ],
  },
  {
    title: "Virtualização Proxmox",
    description:
      "Infraestrutura virtual com Proxmox VE. Reduza custos com licenças e otimize seu data center.",
    href: "/servicos/proxmox",
    icon: "🖥️",
    features: [
      "Migração de VMware para Proxmox",
      "Alta disponibilidade (HA)",
      "Backup automatizado",
      "Redução de até 70% em custos",
    ],
  },
  {
    title: "Firewall pfSense",
    description:
      "Segurança de rede com pfSense. Firewall open source para empresas de todos os tamanhos.",
    href: "/servicos/pfsense",
    icon: "🛡️",
    features: [
      "VPN Site-to-Site e Remote Access",
      "Filtragem de conteúdo e URLs",
      "Balanceamento de carga",
      "Relatórios de tráfego",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Nossos Serviços</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Soluções completas de TI para sua empresa. Conheça cada um dos
            nossos serviços.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div
                key={service.href}
                className={`flex flex-col items-center gap-8 md:flex-row ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="text-5xl">{service.icon}</div>
                  <h2 className="mt-4 text-2xl font-bold">{service.title}</h2>
                  <p className="mt-3 text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-emerald-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-6 inline-block rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    Saiba Mais
                  </Link>
                </div>
                <div className="flex-1 rounded-xl bg-gray-50 p-8 text-center text-gray-400">
                  Imagem do serviço
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Precisa de um serviço específico?</h2>
          <p className="mt-2 text-emerald-100">
            Fale conosco e montaremos uma solução sob medida para sua empresa.
          </p>
          <a
            href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </>
  );
}
