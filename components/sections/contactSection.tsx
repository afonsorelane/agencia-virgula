"use client"

import React from "react"
import { Button } from "@/components/ui/button" // Ajusta o caminho conforme teu projeto
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible"

// Ícones importados do lucide-react (ou outra lib que usas)
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react"


export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contacto</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Estamos prontos para transformar suas ideias em realidade. Entre em contacto conosco para saber mais sobre
              nossos serviços.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeInWhenVisible>
            <div>
              <h3 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-black hover:bg-white/90 py-6">Enviar Mensagem</Button>
              </form>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-white/70 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Endereço</h4>
                    <p className="text-white/70">Av. Principal, 123, Maputo, Moçambique</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-white/70 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-white/70">info@virgula.co.mz</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-white/70 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p className="text-white/70">+258 84 123 4567</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium mb-4">Siga-nos</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}