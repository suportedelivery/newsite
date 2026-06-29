import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TI para Indústria",
  description:
    "Soluções de TI e automação para o setor industrial em Curitiba. Redes industriais, SCADA e controle de processos.",
  alternates: {
    canonical: "https://www.suportedelivery.com/segmentos/industria",
  },
};

export default function IndustriaPage() {
  return (
    <>
      <section
        className="relative min-h-[300px] py-20 text-white"
        style={{
          backgroundImage: "url(/images/industria-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">🏭 TI para Indústria</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Soluções de tecnologia e automação para o setor industrial.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary">Desafios do Setor Industrial</h2>
            <p className="mt-4 text-gray-600">
              Indústrias precisam de redes robustas, sistemas de automação
              confiáveis e suporte rápido para evitar paradas na produção.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-primary">Nossas Soluções</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🔗</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Redes Industriais</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Projeto e implementação de redes industriais com switches
                  gerenciáveis e fibra óptica.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">⚙️</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Automação e SCADA</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Integração com sistemas SCADA e automação industrial.
                  Monitoramento em tempo real.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🛡️</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Segurança de Rede</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Firewalls industriais, segmentação de rede e proteção contra
                  ameaças cibernéticas.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🚨</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Suporte Emergencial</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Atendimento emergencial para evitar paradas na produção.
                  SLA garantido para indústrias.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-primary p-8 text-center text-white">
              <h3 className="text-2xl font-bold">Precisa de TI industrial?</h3>
              <p className="mt-2 text-blue-100">
                Fale com nossos especialistas em automação industrial.
              </p>
              <a
                href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20TI%20para%20ind%C3%BAstria."
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
