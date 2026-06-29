import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a SuporteDelivery. Empresa de TI em Curitiba especializada em suporte empresarial, virtualização e segurança.",
  alternates: {
    canonical: "https://www.suportedelivery.com/sobre",
  },
};

export default function SobrePage() {
  return (
    <>
      <section
        className="relative min-h-[300px] py-20 text-white"
        style={{
          backgroundImage: "url(/images/sobre-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Sobre Nós</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Conheça a SuporteDelivery e nossa história.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-primary">Nossa História</h2>
            <p className="mt-4 text-gray-600">
              A SuporteDelivery nasceu da paixão por tecnologia e da
              necessidade de oferecer um Suporte de TI verdadeiramente
              dedicado para Empresas. Começamos em São Paulo à 25 anos e em
              2023 migramos para Curitiba onde atendemos Empresas de todos
              os portes na região metropolitana.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-primary">Nossa Missão</h2>
            <p className="mt-4 text-gray-600">
              Simplificar a tecnologia para empresas, oferecendo soluções
              eficientes, seguras e com custo acessível. Acreditamos que
              tecnologia deve ser um diferencial, não um obstáculo.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-primary">Nossos Valores</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">👁️</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Transparência</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Comunicação clara, custos previsíveis e sem surpresas.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">⭐</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Excelência</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Buscamos sempre a melhor solução para cada cliente.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">💡</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Inovação</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Utilizamos tecnologias modernas e open source para
                  reduzir custos.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🤝</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Compromisso</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Seu sucesso é o nosso sucesso. Estamos juntos nessa.
                </p>
              </div>
            </div>

            <h2 className="mt-10 text-3xl font-bold text-primary">Cobertura</h2>
            <p className="mt-4 text-gray-600">
              Atendemos Curitiba e toda a Região Metropolitana, incluindo:
              Araucária, São José dos Pinhais, Pinhais, Colombo, Campo Largo
              e cidades vizinhas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
