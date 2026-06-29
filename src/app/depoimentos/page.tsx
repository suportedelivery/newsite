import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Veja o que nossos clientes dizem sobre a SuporteDelivery. Depoimentos reais de empresas que confiam em nossos serviços.",
  alternates: {
    canonical: "https://www.suportedelivery.com/depoimentos",
  },
};

const testimonials = [
  {
    name: "Renan Braga",
    initials: "RB",
    text: "Excelente prestação de serviços! A empresa revolucionou nosso escritório e permitiu que otimizássemos nossos resultados com a tecnologia implantada, sem contar a simpatia do Sr Edmar, recomendo!!!",
    rating: 5,
  },
  {
    name: "Mario Amanajas",
    initials: "MA",
    text: "A muitos anos contamos aqui na Empresa com os Serviços da Suporte Delivery, o que nos ajudou a reduzir os custos e proporcionar melhores investimentos foram os Contratos de TI, atendem rapidamente remoto e com agendamentos presenciais. Economizamos mais ainda depois que optamos pelo Contrato com Garantia de Equipamentos, assim temos custo fixo e eles assumem os riscos e nunca ficamos parados mais com equipamentos consertando. O principal diferencial deles são o conhecimento técnico que é acima da média de qualquer outra empresa que conheço!",
    rating: 5,
  },
  {
    name: "Vando Valentini",
    initials: "VV",
    text: "Eles cuidam das Câmeras de Segurança, colocaram um Servidor de Internet para juntar 2 links e todos os Repetidores na Igreja, Secretaria, Salão e Casa Paroquial. Automatizaram os Portões para abrir e fechar pelo Celular. Além de corrigir e resolver o Som da Igreja que tinha muitos chiados e ecos. Nossos Computadores estão sempre atualizados e funcionando bem, quando precisamos resolvem rapidamente por acesso Remoto ou nos atendem aqui também.",
    rating: 5,
  },
  {
    name: "Vinícius Masterdil",
    initials: "VM",
    text: "EXCELENTE ATENDIMENTO E SUPORTE TÉCNICO, OFERECEM SERVIÇO DE CONTRATO MENSAL OU AVULSO.",
    rating: 5,
  },
  {
    name: "Não Mais Pelo Santa Felicidade",
    initials: "SF",
    text: "Ficamos muito satisfeitos com o atendimento do profissional (Edmar) e todo o conhecimento que eles possuem. Indicamos com certeza o trabalho deles!",
    rating: 5,
  },
];

export default function DepoimentosPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Depoimentos</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Veja o que nossos clientes dizem sobre a SuporteDelivery.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <div className="flex gap-0.5 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                  <span>Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">
            Quer ser nosso próximo cliente satisfeito?
          </h2>
          <p className="mt-2 text-emerald-100">
            Fale conosco e descubra como podemos ajudar sua empresa.
          </p>
          <a
            href="https://wa.me/554137983434?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </>
  );
}
