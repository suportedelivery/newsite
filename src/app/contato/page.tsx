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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Contato</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    📞
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contato@suportedelivery.com" className="text-gray-600 hover:text-emerald-600">
                      contato@suportedelivery.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    💬
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    📍
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
