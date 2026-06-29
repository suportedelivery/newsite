import Link from "next/link";
import type { Metadata } from "next";

// TODO: Integrar com API do trysoro.com para buscar posts reais
const posts: Record<string, { title: string; date: string; category: string; content: string }> = {
  "terceirizacao-custos": {
    title: "Como a Terceirização de TI Reduz Custos",
    date: "2026-06-25",
    category: "Gestão de TI",
    content: `
A terceirização do suporte de TI tornou-se uma estratégia essencial para empresas que buscam reduzir custos mantendo a qualidade do serviço.

## O que é Terceirização de TI?

Terceirizar a TI significa contratar uma empresa externa para cuidar da tecnologia da sua organização. Isso inclui manutenção de computadores, suporte técnico, gestão de servidores e segurança da informação.

## Como Reduz Custos?

### 1. Eliminação de Custos Fixos
Ao terceirizar, você não precisa manter uma equipe de TI completa internamente. Isso elimina custos com salários, encargos, treinamentos e benefícios.

### 2. Custo por Equipamento
O modelo de contrato mensal por equipamento permite que você pague apenas pelo que precisa, sem surpresas.

### 3. Manutenção Preventiva
A manutenção preventiva reduz drasticamente o número de chamados emergenciais, que são os mais caros.

### 4. Economia com Licenças
Empresas de terceirização frequently utilizam soluções open source como Proxmox e pfSense, eliminando custos de licenciamento.

## Resultados Reais

Empresas que terceirizam a TI relatam economias de 30% a 50% nos custos operacionais de tecnologia, além de ganhos significativos em produtividade.

## Conclusão

A terceirização de TI não é apenas uma opção para pequenas empresas. Grandes organizações também se beneficiam ao focar em seu core business enquanto especialistas cuidam da tecnologia.
    `,
  },
  "quando-contratar-suporte": {
    title: "Quando Contratar Suporte de TI?",
    date: "2026-06-18",
    category: "Gestão de TI",
    content: `
Sua empresa precisa de suporte de TI profissional? Conheça os sinais de que é hora de contratar um serviço especializado.

## Sinais de que é Hora de Contratar

### 1. Computadores Lentos
Se seus computadores estão demorando cada vez mais para iniciar e executar tarefas, é um sinal claro de que precisam de manutenção.

### 2. Problemas Recorrentes
Se você está sempre ligando para o mesmo técnico para resolver os mesmos problemas, é hora de um contrato profissional.

### 3. Falta de Segurança
Se sua empresa não possui firewall, backup automatizado ou controle de acesso, está em risco.

### 4. Crescimento da Empresa
Conforme sua empresa cresce, a complexidade da TI aumenta. O que funcionava para 5 funcionários pode não funcionar para 20.

### 5. Perda de Dados
Se você já perdeu dados importantes por falta de backup, entende a importância do suporte profissional.

## Benefícios do Contrato

- Custo fixo e previsível
- Suporte remoto e presencial
- Manutenção preventiva
- Segurança da informação

## Como Escolher

Pesquise empresas com experiência no seu nicho, verifique referências e peça um diagnóstico gratuito antes de contratar.
    `,
  },
  "proxmox-vs-vmware": {
    title: "Proxmox vs VMware: Qual a Melhor Opção?",
    date: "2026-06-11",
    category: "Virtualização",
    content: `
Comparativo completo entre Proxmox VE e VMware para ajudar você a escolher a melhor solução de virtualização para sua empresa.

## O que é Virtualização?

Virtualização permite executar múltiplos sistemas operacionais em um único servidor físico, otimizando o uso de recursos e reduzindo custos.

## Proxmox VE

### Vantagens
- 100% open source (gratuito)
- Interface web intuitiva
- Suporte a containers (LXC) e VMs
- Backup integrado (PBS)
- Cluster com alta disponibilidade

### Desvantagens
- Comunidade menor que VMware
- Documentação menos extensa

## VMware

### Vantagens
- Líder de mercado
- Amplamente documentado
- Grande ecossistema de parceiros

### Desvantagens
- Custos de licenciamento elevados
- Complexidade de gerenciamento
- Lock-in com fornecedor

## Comparativo de Custos

| Item | Proxmox | VMware |
|------|---------|--------|
| Licenciamento | Gratuito | A partir de US$ 5.000/ano |
| Suporte | Opcional | Incluído |
| Treinamento | Gratuito | Pago |

## Conclusão

Para a maioria das empresas brasileiras, Proxmox oferece melhor custo-benefício. VMware pode ser preferível em ambientes enterprise com necessidades específicas.
    `,
  },
  "ransomware-backup": {
    title: "Ransomware: Por que Backup Não Basta",
    date: "2026-06-04",
    category: "Segurança",
    content: `
Muitas empresas acreditam que ter backup é suficiente para se proteger contra ransomware. Isso é um erro perigoso.

## O que é Ransomware?

Ransomware é um tipo de malware que criptografa os arquivos da vítima e exige um resgate para liberar o acesso. É uma das maiores ameaças cibernéticas atualmente.

## Por que Backup Não Basta?

### 1. Ataque ao Backup
Criminosos modernos atacam primeiro os sistemas de backup antes de criptografar os arquivos originais.

### 2. Tempo de Recuperação
Mesmo com backup, a recuperação pode levar dias ou semanas, causando prejuízos enormes.

### 3. Perda de Dados
Se o backup não for frequentemente testado, você pode descobrir que ele está corrompido quando precisar dele.

## O que Fazer Além de Backup?

### 1. Firewalls Avançados
Utilize firewalls como pfSense com filtros de conteúdo e proteção contra ameaças.

### 2. Treinamento de Funcionários
A maioria dos ataques começa com phishing. Treine seus funcionários para reconhecer e-mails suspeitos.

### 3. Segmentação de Rede
Isole sistemas críticos para limitar o impacto de um ataque.

### 4. Plano de Resposta a Incidentes
Tenha um plano claro de ação em caso de ataque.

## Conclusão

Backup é importante, mas deve fazer parte de uma estratégia completa de segurança da informação.
    `,
  },
};

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return { title: "Post não encontrado" };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
    alternates: {
      canonical: `https://www.suportedelivery.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="py-16 text-center">
        <h1 className="text-3xl font-bold">Post não encontrado</h1>
        <Link href="/blog" className="mt-4 inline-block text-emerald-600 hover:underline">
          ← Voltar ao Blog
        </Link>
      </section>
    );
  }

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
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-yellow">
            {post.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold text-white">{post.title}</h1>
          <time className="mt-4 block text-sm text-blue-200">
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl prose prose-emerald">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                  .replace(/^- (.+)$/gm, '<li>$1</li>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/\|(.+)\|/g, (match) => {
                    const cells = match.split('|').filter(Boolean).map(c => c.trim());
                    return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
                  }),
              }}
            />
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Link
              href="/blog"
              className="text-sm font-semibold text-emerald-600 hover:underline"
            >
              ← Voltar ao Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
