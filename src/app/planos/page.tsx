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
    price: "R$ 897",
    period: "/mês",
    subtitle: "Ideal para pequenas empresas",
    features: [
      "Service Desk Remoto",
      "Monitoramento Básico (Ping/Portas)",
      "Atendimento 8x5 (Seg-Sex)",
      "SLA de Resposta: 8h",
      "1 visita presencial/mês",
      "Manutenção preventiva trimestral",
      "Relatório mensal de atividades",
    ],
    cta: "Solicitar Cotação",
  },
  {
    name: "Business",
    price: "R$ 2.960",
    period: "/mês",
    subtitle: "Segurança e Suporte Híbrido",
    features: [
      "Service Desk Remoto Ilimitado",
      "Visitas Preventivas (Curitiba/Região)",
      "Monitoramento Zabbix Proativo",
      "Atendimento 8x5 (Seg-Sex)",
      "SLA de Resposta: 4h",
      "Até 3 visitas presenciais/mês",
      "Gestão de Backup Diário",
      "Firewall Gerenciado",
      "Relatório semanal de atividades",
    ],
    cta: "Quero este Plano",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    subtitle: "Para Operações Críticas",
    features: [
      "Service Desk Remoto VIP",
      "Visitas Ilimitadas (Corretivas)",
      "Monitoramento Full Stack",
      "Atendimento 24x7 Plantão",
      "SLA de Resposta: 2h",
      "Consultoria Trimestral (CIO)",
      "Projeto de Disaster Recovery",
    ],
    cta: "Falar com Consultor",
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
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Planos e Preços</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Terceirização escalável com responsabilidade técnica
            e previsibilidade orçamentária.
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
                    ? "border-2 border-primary bg-blue-50 shadow-lg relative"
                    : "bg-white shadow-sm"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                    MAIS ESCOLHIDO
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
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

      {/* Comparativo Reativo vs Preventivo */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              Por que fechar um Contrato Mensal?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Entenda a diferença entre o suporte tradicional
              (apagar incêndios) e a gestão inteligente da SuporteDelivery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Modelo Reativo */}
            <div className="rounded-xl border-2 border-red-200 bg-white p-8">
              <h3 className="text-xl font-bold text-red-600">
                🚒 Modelo Reativo (Visita Avulsa)
              </h3>
              <p className="mt-3 text-gray-600">
                A TI é vista como um custo chato. Você só liga
                quando o problema já aconteceu e o prejuízo já começou.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span><strong>Parada Total:</strong> A empresa fica parada até o técnico chegar.</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span><strong>Custo Imprevisível:</strong> Cada chamado é um orçamento surpresa.</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span><strong>SLA Inexistente:</strong> Depende da disponibilidade da agenda do técnico.</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span><strong>Risco de Dados:</strong> O backup só é lembrado quando o HD já queimou.</span>
                </li>
              </ul>
            </div>

            {/* Contrato Preventivo */}
            <div className="rounded-xl border-2 border-green-200 bg-white p-8 relative">
              <div className="absolute -top-3 right-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                RECOMENDADO
              </div>
              <h3 className="text-xl font-bold text-green-600">
                🛡️ Contrato Preventivo (Nossa Gestão)
              </h3>
              <p className="mt-3 text-gray-600">
                A TI é vista como investimento. Nós monitoramos
                seus equipamentos 24x7 para agir antes que a falha ocorra.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>Produtividade Máxima:</strong> Problemas resolvidos via acesso remoto imediato.</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>Valor Fixo:</strong> Mensalidade que cabe no orçamento. Previsibilidade total.</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>SLA Contratual:</strong> Acordos rigorosos de tempo máximo de resposta.</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>Auditoria Contínua:</strong> Antivírus e Backups testados rigorosamente.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chamados Técnicos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Chamados Técnicos
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">📞</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Chamado Avulso</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Precisa de ajuda pontual? Atendemos chamados avulsos emergenciais
                  para resolver seu problema rapidamente.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="text-3xl">🔄</div>
                <h3 className="mt-3 text-lg font-semibold text-primary">Contrato Mensal</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Para sua empresa nunca mais parar. Contrato de suporte
                  contínuo com SLA garantido e custo previsível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia Enterprise */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Tecnologia Enterprise no seu Contrato
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-gray-600">
                  Para entregar um suporte perfeito, usamos as
                  melhores ferramentas Open Source do mercado
                  (<strong>Proxmox VE e pfSense</strong>). O que
                  isso significa para sua empresa?
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span><strong>Custo Zero de Licença:</strong> Você não paga taxas em dólar por renovações de software.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span><strong>Segurança Avançada:</strong> As mesmas tecnologias usadas por gigantes de telecomunicações.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span><strong>Desempenho:</strong> Servidores mais rápidos, redes sem quedas e backups imutáveis contra Ransomware.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-primary p-6 text-white">
                <h3 className="text-lg font-bold">
                  Especialistas, não curiosos.
                </h3>
                <p className="mt-3 text-sm text-blue-100">
                  Muitas empresas de suporte apenas formatam
                  computadores. A SuporteDelivery conta com
                  engenharia de infraestrutura, capacitada
                  para desenhar desde a rede Wi-Fi até o
                  Cluster de Servidores do seu datacenter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
