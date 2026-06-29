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
    image: "/images/manutencao-hero.jpg",
  },
  {
    title: "Contratos de Suporte",
    description:
      "Planos mensais com suporte remoto e presencial. Custo fixo e previsível para sua TI.",
    href: "/servicos/contratos",
    icon: "📋",
    image: "/images/contratos-hero.jpg",
  },
  {
    title: "Virtualização Proxmox",
    description:
      "Servidores virtuais com Proxmox. Reduza custos com infraestrutura open source.",
    href: "/servicos/proxmox",
    icon: "🖥️",
    image: "/images/proxmox-hero.jpg",
  },
  {
    title: "Firewall pfSense",
    description:
      "Segurança de rede com pfSense. Proteção completa para sua empresa contra ameaças.",
    href: "/servicos/pfsense",
    icon: "🛡️",
    image: "/images/pfsense-hero.jpg",
  },
];

const segments = [
  {
    title: "Advocacia",
    description: "TI especializada para escritórios de advocacia.",
    href: "/segmentos/advocacia",
    icon: "⚖️",
    image: "/images/advocacia-hero.jpg",
  },
  {
    title: "Contabilidade",
    description: "Soluções de TI para escritórios contábeis.",
    href: "/segmentos/contabilidade",
    icon: "📊",
    image: "/images/contabilidade-hero.jpg",
  },
  {
    title: "Indústria",
    description: "TI e automação para o setor industrial.",
    href: "/segmentos/industria",
    icon: "🏭",
    image: "/images/industria-hero.jpg",
  },
];

const testimonials = [
  {
    name: "Renan Braga",
    initials: "RB",
    text: "Excelente prestação de serviços! A empresa revolucionou nosso escritório e permitiu que otimizássemos nossos resultados com a tecnologia implantada.",
    color: "bg-accent-blue",
  },
  {
    name: "Mario Amanajas",
    initials: "MA",
    text: "A muitos anos contamos aqui na Empresa com os Serviços da Suporte Delivery. Economizamos mais depois que optamos pelo Contrato com Garantia de Equipamentos.",
    color: "bg-primary",
  },
  {
    name: "Vando Valentini",
    initials: "VV",
    text: "Eles cuidam das Câmeras de Segurança, colocaram um Servidor de Internet para juntar 2 links. Nossos Computadores estão sempre atualizados e funcionando bem.",
    color: "bg-accent-green",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[500px] py-24 text-white"
        style={{
          backgroundImage: "url(/images/hero-cybersecurity.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Suporte de TI Empresarial
            <br />
            <span className="text-accent-yellow">em Curitiba</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
            Contratos de suporte mensal, manutenção de computadores,
            virtualização e segurança da informação. Atendimento remoto e
            presencial para sua empresa.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent-yellow px-8 py-3 text-sm font-semibold text-primary shadow transition hover:bg-yellow-400"
            >
              Solicitar Orçamento
            </a>
            <a
              href="tel:+554137983434"
              className="rounded-lg border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              📞 Ligue Agora
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-primary">
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Soluções completas de TI para sua empresa, com foco em
            performance, segurança e redução de custos.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section
        className="relative py-16 text-white"
        style={{
          backgroundImage: "url(/images/hero-datacenter.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/95" />
        <div className="relative container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">
            Por que a SuporteDelivery?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue text-3xl">
                🚀
              </div>
              <h3 className="mt-4 text-lg font-semibold">Open Source</h3>
              <p className="mt-2 text-sm text-blue-100">
                Utilizamos soluções open source como Proxmox e pfSense para
                reduzir custos com licenças.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-yellow text-3xl">
                💰
              </div>
              <h3 className="mt-4 text-lg font-semibold">Custo Fixo</h3>
              <p className="mt-2 text-sm text-blue-100">
                Planos mensais com custo previsível. Sem surpresas na fatura
                da sua TI.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-green text-3xl">
                📍
              </div>
              <h3 className="mt-4 text-lg font-semibold">Cobertura Regional</h3>
              <p className="mt-2 text-sm text-blue-100">
                Atendemos Curitiba e toda a região metropolitana. Técnicos vão
                até sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-primary">
            Segmentos que Atendemos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Conhecemos as necessidades específicas de cada setor e oferecemos
            soluções sob medida.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {segments.map((segment) => (
              <Link
                key={segment.href}
                href={segment.href}
                className="group overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-3xl">{segment.icon}</div>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {segment.title}
                    </h3>
                    <p className="text-sm text-white/80">{segment.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-primary">
            O que nossos Clientes dizem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Avaliações reais de empresas que confiam na SuporteDelivery.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} text-sm font-bold text-white`}>
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
              className="text-sm font-semibold text-primary hover:underline"
            >
              Ver todos os depoimentos →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: "url(/images/hero-woman-tech.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-red/90 via-accent-yellow/90 to-accent-green/90" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Pronto para otimizar sua TI?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Fale conosco e descubra como podemos ajudar sua empresa a economizar
            e ter mais eficiência tecnológica.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary shadow transition hover:bg-gray-100"
            >
              WhatsApp
            </a>
            <Link
              href="/contato"
              className="rounded-lg border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
