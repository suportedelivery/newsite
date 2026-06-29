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
      <section
        className="relative min-h-[300px] py-20 text-white"
        style={{
          backgroundImage: "url(/images/contabilidade-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">📊 TI para Contabilidade</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Soluções de tecnologia para escritórios contábeis.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary">Desafios do Setor Contábil</h2>
            <p className="mt-4 text-gray-600">
              Escritórios contábeis precisam de sistemas confiáveis, segurança
              de dados fiscais e integração com plataformas governamentais.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-primary">Nossas Soluções</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">💻</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Integração com Sistemas</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Suporte para sistemas como TOTUS, Alpha, Winthor e outros
                  utilizados no setor contábil.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🔐</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Segurança Fiscal</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Proteção de dados fiscais e conformidade com regulamentações
                  da Receita Federal.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">📊</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Acesso a Plataformas</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Configuração e suporte para acesso a e-CAC, SPED, FGTS
                  Digital e outras plataformas.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">💾</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Backup e Recuperação</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Backup automatizado de databases e arquivos críticos.
                  Recuperação rápida em caso de falha.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-primary p-8 text-center text-white">
              <h3 className="text-2xl font-bold">Precisa de TI para seu escritório contábil?</h3>
              <p className="mt-2 text-blue-100">
                Fale com nossos especialistas em TI fiscal.
              </p>
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20TI%20para%20contabilidade."
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
