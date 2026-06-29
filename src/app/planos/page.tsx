import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos e Preços",
  description:
    "Planos de suporte de TI mensais. Custo fixo, suporte remoto e presencial. Escolha o melhor para sua empresa.",
  alternates: {
    canonical: "https://www.suportedelivery.com/planos",
  },
};

const plans = [
  {
    name: "Essentials",
    price: "R$ 497",
    period: "/mês",
    description: "Para pequenas empresas com até 10 equipamentos.",
    features: [
      "Suporte remoto ilimitado",
      "Até 2 visitas presenciais/mês",
      "Horário comercial (8h-18h)",
      "Manutenção preventiva trimestral",
      "Relatório mensal de atividades",
    ],
    cta: "Contratar Agora",
  },
  {
    name: "Business",
    price: "R$ 997",
    period: "/mês",
    description: "Para empresas em crescimento com até 30 equipamentos.",
    features: [
      "Suporte remoto ilimitado",
      "Até 4 visitas presenciais/mês",
      "Horário estendido (7h-20h)",
      "Garantia de equipamentos",
      "Manutenção preventiva mensal",
      "Relatório semanal de atividades",
      "Prioridade no atendimento",
    ],
    cta: "Contratar Agora",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para empresas grandes com infraestrutura complexa.",
    features: [
      "Suporte 24/7",
      "Visitas ilimitadas",
      "SLA garantido (tempo de resposta)",
      "Gerente de conta dedicado",
      "Manutenção preventiva semanal",
      "Backup monitoring",
      "Relatórios personalizados",
      "Reunião mensal de acompanhamento",
    ],
    cta: "Fale Conosco",
  },
];

export default function PlanosPage() {
  return (
    <>
      <section
        className="relative min-h-[300px] py-20 text-white"
        style={{
          backgroundImage: "url(/images/planos-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Planos e Preços</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Escolha o plano ideal para sua empresa. Todos incluem suporte
            remoto e atendimento presencial.
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
          <h2 className="text-center text-2xl font-bold text-primary">
            Por que contratar suporte de TI?
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-red-600">❌ Sem contrato</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Custo imprevisível por chamado</li>
                <li>• Tempo de resposta indefinido</li>
                <li>• Manutenção apenas quando quebra</li>
                <li>• Sem garantia de equipamentos</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-primary">✓ Com contrato</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Custo fixo e previsível</li>
                <li>• Tempo de resposta garantido</li>
                <li>• Manutenção preventiva contínua</li>
                <li>• Garantia de equipamentos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
