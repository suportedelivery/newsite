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
    image: "/images/advocacia-hero.jpg",
  },
  {
    title: "Contabilidade",
    description:
      "Soluções de TI para escritórios contábeis. Integração com sistemas contábeis e segurança fiscal.",
    href: "/segmentos/contabilidade",
    icon: "📊",
    image: "/images/contabilidade-hero.jpg",
  },
  {
    title: "Indústria",
    description:
      "TI e automação para o setor industrial. Redes industriais, SCADA e controle de processos.",
    href: "/segmentos/industria",
    icon: "🏭",
    image: "/images/industria-hero.jpg",
  },
];

export default function SegmentosPage() {
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
          <h1 className="text-4xl font-bold md:text-5xl">Segmentos que Atendemos</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
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
                    <h2 className="mt-2 text-2xl font-bold text-white">
                      {segment.title}
                    </h2>
                    <p className="text-sm text-white/80">{segment.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
