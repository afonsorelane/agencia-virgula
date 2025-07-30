"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"


import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible"

export function ServicesSection() {
  const services = [
    {
      title: "Agenciamento",
      description: "Agenciamento de escritores, ilustradores e artistas plásticos.",
      icon: "👥",
    },
    {
      title: "Eventos",
      description: "Organização de eventos culturais, corporativos e de entretenimento.",
      icon: "🎭",
    },
    {
      title: "Curadoria",
      description: "Curadoria artística, assessoria de imprensa e consultoria editorial.",
      icon: "🔍",
    },
    {
      title: "Publicação",
      description: "Publicação, edição e revisão de livros, revistas e artigos.",
      icon: "📚",
    },
    {
      title: "Projetos Culturais",
      description: "Desenvolvimento e gestão de projetos culturais e educativos.",
      icon: "🎨",
    },
    {
      title: "Produção Audiovisual",
      description: "Produção de roteiros para filmes, séries, documentários, entre outros.",
      icon: "🎬",
    },
    {
      title: "Produção Musical",
      description: "Arranjo, edição e produção de composições musicais.",
      icon: "🎵",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços criativos para atender às necessidades dos nossos clientes.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm h-full"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}