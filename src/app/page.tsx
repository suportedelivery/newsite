import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SuporteDelivery | Suporte de TI Empresarial em Curitiba",
  description:
    "Suporte de TI empresarial em Curitiba. Contratos de manutenção, virtualização Proxmox, firewall pfSense. Atendimento remoto e presencial.",
  alternates: {
    canonical: "https://www.suportedelivery.com",
  },
};

const services = [
  {
    title: "Manutenção de TI",
    description:
      "Manutenção preventiva e corretiva de computadores, servidores e rede para sua empresa.",
    href: "/servicos/manutencao",
    icon: "🔧",
  },
  {
    title: "Contratos de Suporte",
    description:
      "Planos mensais com suporte remoto e presencial. Custo fixo e previsível para sua TI.",
    href: "/servicos/contratos",
    icon: "📋",
  },
  {
    title: "Virtualização Proxmox",
    description:
      "Servidores virtuais com Proxmox. Reduza custos com infraestrutura open source.",
    href: "/servicos/proxmox",
    icon: "🖥️",
  },
  {
    title: "Firewall pfSense",
    description:
      "Segurança de rede com pfSense. Proteção completa para sua empresa contra ameaças.",
    href: "/servicos/pfsense",
    icon: "🛡️",
  },
];

const niches = [
  {
    title: "Advocacia",
    description: "TI especializada para escritórios de advocacia.",
    href: "/nichos/advocacia",
    icon: "⚖️",
  },
  {
    title: "Contabilidade",
    description: "Soluções de TI para escritórios contábeis.",
    href: "/nichos/contabilidade",
    icon: "📊",
  },
  {
    title: "Indústria",
    description: "TI e automação para o setor industrial.",
    href: "/nichos/industria",
    icon: "🏭",
  },
];

const testimonials = [
  {
    name: "Renan Braga",
    initials: "RB",
    text: "Excelente prestação de serviços! A empresa revolucionou nosso escritório e permitiu que otimizássemos nossos resultados com a tecnologia implantada.",
  },
  {
    name: "Mario Amanajas",
    initials: "MA",
    text: "A muitos anos contamos aqui na Empresa com os Serviços da Suporte Delivery. Economizamos mais depois que optamos pelo Contrato com Garantia de Equipamentos.",
  },
  {
    name: "Vando Valentini",
    initials: "VV",
    text: "Eles cuidam das Câmeras de Segurança, colocaram um Servidor de Internet para juntar 2 links. Nossos Computadores estão sempre atualizados e funcionando bem.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Suporte de TI Empresarial
            <br />
            <span className="text-emerald-200">em Curitiba</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
            Contratos de suporte mensal, manutenção de computadores,
            virtualização e segurança da informação. Atendimento remoto e
            presencial para sua empresa.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-emerald-700 shadow transition hover:bg-emerald-50"
            >
              Solicitar Orçamento
            </a>
            <a
              href="tel:+554137983434"
              className="rounded-lg border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-emerald-700"
            >
              📞 Ligue Agora
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Nossos Serviços</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Soluções completas de TI para sua empresa, com foco em
            performance, segurança e redução de custos.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-emerald-600">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">
            Por que a SuporteDelivery?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                🚀
              </div>
              <h3 className="mt-4 text-lg font-semibold">Open Source</h3>
              <p className="mt-2 text-sm text-gray-600">
                Utilizamos soluções open source como Proxmox e pfSense para
                reduzir custos com licenças.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                💰
              </div>
              <h3 className="mt-4 text-lg font-semibold">Custo Fixo</h3>
              <p className="mt-2 text-sm text-gray-600">
                Planos mensais com custo previsível. Sem surpresas na fatura
                da sua TI.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                📍
              </div>
              <h3 className="mt-4 text-lg font-semibold">Cobertura Regional</h3>
              <p className="mt-2 text-sm text-gray-600">
                Atendemos Curitiba e toda a região metropolitana. Técnicos vão
                até sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nichos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">
            Atendemos Seu Nicho
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Conhecemos as necessidades específicas de cada setor e oferecemos
            soluções sob medida.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {niches.map((nicho) => (
              <Link
                key={nicho.href}
                href={nicho.href}
                className="group rounded-xl bg-white p-6 text-center shadow transition hover:shadow-lg"
              >
                <div className="text-4xl">{nicho.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-emerald-600">
                  {nicho.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{nicho.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">
            O que nossos Clientes dizem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Avaliações reais de empresas que confiam na SuporteDelivery.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl bg-gray-50 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">Cliente Google</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700">&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/depoimentos"
              className="text-sm font-semibold text-emerald-600 hover:underline"
            >
              Ver todos os depoimentos →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-emerald-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Pronto para otimizar sua TI?</h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-100">
            Fale conosco e descubra como podemos ajudar sua empresa a economizar
            e ter mais eficiência tecnológica.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-emerald-700 shadow transition hover:bg-emerald-50"
            >
              WhatsApp
            </a>
            <Link
              href="/contato"
              className="rounded-lg border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-emerald-700"
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
