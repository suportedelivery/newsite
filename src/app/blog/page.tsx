import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre TI, segurança da informação, virtualização e dicas para sua empresa. Conteúdo atualizado semanalmente.",
  alternates: {
    canonical: "https://www.suportedelivery.com/blog",
  },
};

// TODO: Integrar com API do trysoro.com para buscar posts reais
const posts = [
  {
    slug: "terceirizacao-custos",
    title: "Como a Terceirização de TI Reduz Custos",
    excerpt:
      "Descubra como terceirizar o suporte de TI pode economizar até 40% nos custos operacionais da sua empresa.",
    date: "2026-06-25",
    category: "Gestão de TI",
  },
  {
    slug: "quando-contratar-suporte",
    title: "Quando Contratar Suporte de TI?",
    excerpt:
      "Saiba os sinais de que sua empresa precisa de um contrato de suporte de TI profissional.",
    date: "2026-06-18",
    category: "Gestão de TI",
  },
  {
    slug: "proxmox-vs-vmware",
    title: "Proxmox vs VMware: Qual a Melhor Opção?",
    excerpt:
      "Comparativo completo entre Proxmox e VMware para virtualização empresarial.",
    date: "2026-06-11",
    category: "Virtualização",
  },
  {
    slug: "ransomware-backup",
    title: "Ransomware: Por que Backup Não Basta",
    excerpt:
      "Entenda por que ter apenas backup não protege sua empresa contra ataques de ransomware.",
    date: "2026-06-04",
    category: "Segurança",
  },
];

export default function BlogPage() {
  return (
    <>
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url(/images/blog-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Artigos atualizados sobre TI, segurança e dicas para sua empresa.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  {post.category}
                </span>
                <h2 className="mt-2 text-xl font-bold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-emerald-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-emerald-600 hover:underline"
                  >
                    Ler mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
