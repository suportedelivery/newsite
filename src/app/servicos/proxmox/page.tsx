import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtualização Proxmox",
  description:
    "Migração de VMware para Proxmox. Virtualização open source para empresas. Reduza custos com infraestrutura.",
  alternates: {
    canonical: "https://www.suportedelivery.com/servicos/proxmox",
  },
};

export default function ProxmoxPage() {
  return (
    <>
      <section
        className="relative min-h-[300px] py-20 text-white"
        style={{
          backgroundImage: "url(/images/proxmox-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Virtualização Proxmox</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Soluções de virtualização com Proxmox VE. Reduza custos com
            licenças e otimize seu data center.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary">O que é Proxmox?</h2>
            <p className="mt-4 text-gray-600">
              Proxmox VE é uma plataforma de virtualização open source que
              permite executar múltiplos sistemas operacionais em um único
              servidor físico. É uma alternativa gratuita e poderosa ao VMware.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-primary">Vantagens do Proxmox</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">💰</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">100% Open Source</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Sem custos de licença. Economia de até 70% comparado ao
                  VMware.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🔄</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Alta Disponibilidade</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Cluster com replicação automática e failover para garantir
                  continuidade.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">💾</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Backup Integrado</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Sistema de backup incrementais com ZFS e PBS (Proxmox Backup
                  Server).
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🖥️</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Interface Web</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Gerenciamento completo via navegador. Sem necessidade de
                  software adicional.
                </p>
              </div>
            </div>

            <h2 className="mt-10 text-3xl font-bold text-primary">Nossos Serviços</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Migração de VMware para Proxmox
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Instalação e configuração de cluster
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Configuração de backup e restore
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Monitoramento e manutenção
              </li>
            </ul>

            <div className="mt-12 rounded-xl bg-primary p-8 text-center text-white">
              <h3 className="text-2xl font-bold">Quer migrar para Proxmox?</h3>
              <p className="mt-2 text-blue-100">
                Fale conosco e descubra quanto sua empresa pode economizar.
              </p>
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Proxmox."
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
