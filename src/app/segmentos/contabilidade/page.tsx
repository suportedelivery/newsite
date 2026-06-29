import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TI para Contabilidade",
  description:
    "Soluções de TI para escritórios contábeis em Curitiba. Integração com sistemas contábeis e segurança fiscal.",
  alternates: {
    canonical: "https://www.suportedelivery.com/segmentos/contabilidade",
  },
};

export default function ContabilidadePage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">📊 TI para Contabilidade</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Soluções de tecnologia para escritórios contábeis.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Desafios do Setor Contábil</h2>
            <p className="mt-4 text-gray-600">
              Escritórios contábeis precisam de sistemas confiáveis, segurança
              de dados fiscais e integração com plataformas governamentais.
            </p>

            <h2 className="mt-10 text-2xl font-bold">Nossas Soluções</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Integração com Sistemas</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Suporte para sistemas como TOTUS, Alpha, Winthor e outros
                  utilizados no setor contábil.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Segurança Fiscal</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Proteção de dados fiscais e conformidade com regulamentações
                  da Receita Federal.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Acesso a Plataformas</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Configuração e suporte para acesso a e-CAC, SPED, FGTS
                  Digital e outras plataformas.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold">Backup e Recuperação</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Backup automatizado de databases e arquivos críticos.
                  Recuperação rápida em caso de falha.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20TI%20para%20contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-light"
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
