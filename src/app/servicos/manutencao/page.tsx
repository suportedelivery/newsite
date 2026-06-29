import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manutenção de TI",
  description:
    "Manutenção preventiva e corretiva de computadores, servidores e rede em Curitiba. Suporte técnico especializado.",
  alternates: {
    canonical: "https://www.suportedelivery.com/servicos/manutencao",
  },
};

export default function ManutencaoPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Manutenção de TI</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Manutenção preventiva e corretiva para manter sua empresa
            funcionando sem interrupções.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">O que fazemos</h2>
            <p className="mt-4 text-gray-600">
              Nossa equipe de técnicos especializados cuida de toda a sua
              infraestrutura de TI, desde computadores individuais até servidores
              e redes complexas.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Manutenção Preventiva</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Limpeza, atualização de drivers, verificação de hardware e
                  otimização do sistema para evitar problemas.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Manutenção Corretiva</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Diagnóstico e reparo de falhas de hardware e software. Troca
                  de componentes defeituosos.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Formatação e Instalação</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Formatação de computadores com instalação de sistema
                  operacional e softwares necessários.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Suporte Remoto</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Atendimento remoto rápido para resolver problemas sem precisar
                  de deslocamento.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20de%20TI."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-emerald-600 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
