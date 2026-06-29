import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Segmentos",
  description:
    "Soluções de TI para advocacia, contabilidade e indústria. Conhecemos as necessidades do seu setor.",
  alternates: {
    canonical: "https://www.suportedelivery.com/segmentos",
  },
};

const segments = [
  {
    title: "Advocacia",
    description:
      "TI especializada para escritórios de advocacia. Segurança de dados, backup de processos e conformidade com a OAB.",
    href: "/segmentos/advocacia",
    icon: "⚖️",
  },
  {
    title: "Contabilidade",
    description:
      "Soluções de TI para escritórios contábeis. Integração com sistemas contábeis e segurança fiscal.",
    href: "/segmentos/contabilidade",
    icon: "📊",
  },
  {
    title: "Indústria",
    description:
      "TI e automação para o setor industrial. Redes industriais, SCADA e controle de processos.",
    href: "/segmentos/industria",
    icon: "🏭",
  },
];

export default function SegmentosPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Segmentos que Atendemos</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Conhecemos as necessidades específicas de cada setor e oferecemos
            soluções sob medida.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {segments.map((segment) => (
              <Link
                key={segment.href}
                href={segment.href}
                className="group rounded-xl bg-white p-8 shadow transition hover:shadow-lg"
              >
                <div className="text-5xl">{segment.icon}</div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-primary">
                  {segment.title}
                </h2>
                <p className="mt-3 text-gray-600">{segment.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  Saiba Mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
