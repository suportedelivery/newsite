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
      <section
        className="relative min-h-[300px] py-20 text-white"
        style={{
          backgroundImage: "url(/images/manutencao-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Manutenção de TI</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Manutenção preventiva e corretiva para manter sua empresa
            funcionando sem interrupções.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary">O que fazemos</h2>
            <p className="mt-4 text-gray-600">
              Nossa equipe de técnicos especializados cuida de toda a sua
              infraestrutura de TI, desde computadores individuais até servidores
              e redes complexas.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🔧</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Manutenção Preventiva</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Limpeza, atualização de drivers, verificação de hardware e
                  otimização do sistema para evitar problemas.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">⚡</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Manutenção Corretiva</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Diagnóstico e reparo de falhas de hardware e software. Troca
                  de componentes defeituosos.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">💻</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Formatação e Instalação</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Formatação de computadores com instalação de sistema
                  operacional e softwares necessários.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🌐</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Suporte Remoto</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Atendimento remoto rápido para resolver problemas sem precisar
                  de deslocamento.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-primary p-8 text-center text-white">
              <h3 className="text-2xl font-bold">Precisa de manutenção?</h3>
              <p className="mt-2 text-blue-100">
                Solicite um orçamento sem compromisso. Atendemos Curitiba e região metropolitana.
              </p>
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20de%20TI."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-accent-yellow px-8 py-3 text-sm font-semibold text-primary shadow transition hover:bg-yellow-400"
              >
                Solicitar Orçamento via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
