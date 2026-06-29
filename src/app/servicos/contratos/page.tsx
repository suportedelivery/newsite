import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contratos de Suporte",
  description:
    "Planos mensais de suporte de TI. Custo fixo, suporte remoto ilimitado e visitas presenciais em Curitiba.",
  alternates: {
    canonical: "https://www.suportedelivery.com/servicos/contratos",
  },
};

const plans = [
  {
    name: "Essentials",
    price: "R$ 897",
    period: "/mês",
    description: "Para pequenas empresas com até 10 equipamentos.",
    features: [
      "Suporte remoto ilimitado",
      "1 visita presencial/mês",
      "Horário comercial",
      "Manutenção preventiva trimestral",
    ],
    cta: "Contratar",
  },
  {
    name: "Business",
    price: "R$ 2.960",
    period: "/mês",
    description: "Para empresas em crescimento com até 30 equipamentos.",
    features: [
      "Suporte remoto ilimitado",
      "Até 3 visitas presenciais/mês",
      "Horário estendido",
      "Manutenção preventiva mensal",
    ],
    cta: "Contratar",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para empresas grandes com infraestrutura complexa.",
    features: [
      "Suporte 24/7",
      "Visitante ilimitado",
      "SLA garantido",
      "Gerente de conta dedicado",
      "Manutenção preventiva semanal",
      "Backup monitoring",
    ],
    cta: "Fale Conosco",
  },
];

export default function ContratosPage() {
  return (
    <>
      <section
        className="relative min-h-[300px] py-20 text-white"
        style={{
          backgroundImage: "url(/images/contratos-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Contratos de Suporte</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Planos mensais com custo fixo e previsível. Escolha o melhor para
            sua empresa.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-8 ${
                  plan.featured
                    ? "border-2 border-primary bg-blue-50 shadow-lg"
                    : "bg-white shadow-sm"
                }`}
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-primary">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={
                    plan.name === "Enterprise"
                      ? "https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20o%20plano%20Enterprise."
                      : "https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20o%20plano%20" +
                        plan.name +
                        "."
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold ${
                    plan.featured
                      ? "bg-primary text-white hover:bg-primary-light"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-primary">Perguntas Frequentes</h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-6">
            <details className="rounded-lg bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-semibold">
                Posso trocar de plano depois?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Sim, você pode alterar seu plano a qualquer momento. A mudança
                entra em vigor no próximo ciclo de faturamento.
              </p>
            </details>
            <details className="rounded-lg bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-semibold">
                O que está incluído na garantia de equipamentos?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Se um equipamento com defeito estiver coberto pelo contrato,
                nós assumimos o custo do reparo ou substituição.
              </p>
            </details>
            <details className="rounded-lg bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-semibold">
                Atendem fora do horário comercial?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Sim, para planos Business e Enterprise temos atendimento
                estendido e 24/7 respectivamente.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
