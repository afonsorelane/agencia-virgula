"use client"

import { motion } from "framer-motion"
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible"

export const ValuesSection = () => {
  const values = [
    { title: "Valorização do talento criativo", icon: "✨" },
    { title: "Cooperação", icon: "🤝" },
    { title: "Inovação", icon: "💡" },
    { title: "Qualidade", icon: "🏆" },
    { title: "Comprometimento", icon: "🎯" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Nossos valores fundamentam nossa atuação e refletem o compromisso que temos com nossos clientes, parceiros
              e colaboradores.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div
                className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col items-center justify-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="text-4xl mb-4">{value.icon}</span>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}
