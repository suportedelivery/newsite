import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TI para Advocacia",
  description:
    "Soluções de TI para escritórios de advocacia em Curitiba. Segurança de dados, backup de processos e conformidade com a OAB.",
  alternates: {
    canonical: "https://www.suportedelivery.com/nichos/advocacia",
  },
};

export default function AdvocaciaPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">⚖️ TI para Advocacia</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Soluções de tecnologia especializadas para escritórios de advocacia.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Desafios do Setor Jurídico</h2>
            <p className="mt-4 text-gray-600">
              Escritórios de advocacia lidam com dados altamente sensíveis e
              confidenciais. A segurança da informação e a disponibilidade dos
              sistemas são críticas para o sucesso do negócio.
            </p>

            <h2 className="mt-10 text-2xl font-bold">Nossas Soluções</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Backup de Processos</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Backup automatizado de todos os documentos e processos.
                  Recuperação rápida em caso de falha.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Segurança de Dados</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Criptografia de dados, controle de acesso e conformidade com
                  a LGPD e regulamentações da OAB.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Sistemas Jurídicos</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Suporte para sistemas como PJe, SAJ e outros utilizados no
                  meio jurídico.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Rede e Acesso Remoto</h3>
                <p className="mt-2 text-sm text-gray-600">
                  VPN seguro para acesso remoto aos sistemas do escritório.
                  Trabalhe de qualquer lugar.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20TI%20para%20advocacia."
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
