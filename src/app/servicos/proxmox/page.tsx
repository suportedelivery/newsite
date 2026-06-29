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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Virtualização Proxmox</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Soluções de virtualização com Proxmox VE. Reduza custos com
            licenças e otimize seu data center.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">O que é Proxmox?</h2>
            <p className="mt-4 text-gray-600">
              Proxmox VE é uma plataforma de virtualização open source que
              permite executar múltiplos sistemas operacionais em um único
              servidor físico. É uma alternativa gratuita e poderosa ao VMware.
            </p>

            <h2 className="mt-10 text-2xl font-bold">Vantagens do Proxmox</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">100% Open Source</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Sem custos de licença. Economia de até 70% comparado ao
                  VMware.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Alta Disponibilidade</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Cluster com replicação automática e failover para garantir
                  continuidade.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Backup Integrado</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Sistema de backup incrementais com ZFS e PBS (Proxmox Backup
                  Server).
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Interface Web</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Gerenciamento completo via navegador. Sem necessidade de
                  software adicional.
                </p>
              </div>
            </div>

            <h2 className="mt-10 text-2xl font-bold">Nossos Serviços</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                Migração de VMware para Proxmox
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                Instalação e configuração de cluster
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                Configuração de backup e restore
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                Monitoramento e manutenção
              </li>
            </ul>

            <div className="mt-10 text-center">
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Proxmox."
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
