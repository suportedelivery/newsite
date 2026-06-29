"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textoZap = `*NOVA SOLICITAÇÃO VIA SITE*

*Nome/Empresa:* ${formData.nome}
*Email:* ${formData.email}
*Telefone:* ${formData.telefone}
*Assunto:* ${formData.assunto}
*Mensagem:* ${formData.mensagem}`;

    const url = `https://wa.me/554137983434?text=${encodeURIComponent(textoZap)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url(/images/contato-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Contato</h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Fale conosco e descubra como podemos ajudar sua empresa.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl font-bold">Envie sua mensagem</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nome / Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData({ ...formData, telefone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Assunto
                    </label>
                    <select
                      className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      value={formData.assunto}
                      onChange={(e) =>
                        setFormData({ ...formData, assunto: e.target.value })
                      }
                    >
                      <option value="">Selecione</option>
                      <option value="Contrato de Suporte">Contrato de Suporte</option>
                      <option value="Manutenção">Manutenção de TI</option>
                      <option value="Proxmox">Virtualização Proxmox</option>
                      <option value="pfSense">Firewall pfSense</option>
                      <option value="Orçamento">Solicitar Orçamento</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    value={formData.mensagem}
                    onChange={(e) =>
                      setFormData({ ...formData, mensagem: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Enviar via WhatsApp
                </button>
              </form>
            </div>

            {/* Informações */}
            <div>
              <h2 className="text-2xl font-bold">Outros canais</h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <a href="tel:+554137983434" className="text-gray-600 hover:text-emerald-600">
                      (41) 3798-3434
                    </a>
                    <p className="text-gray-600">
                      <a href="tel:+5511970839455" className="hover:text-emerald-600">
                        (11) 97083-9455
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contato@suportedelivery.com" className="text-gray-600 hover:text-emerald-600">
                      contato@suportedelivery.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 0H9v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/554137983434"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-600"
                    >
                      Clique aqui para conversar
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Área de Cobertura</p>
                    <p className="text-gray-600">
                      Curitiba e Região Metropolitana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
