"use client"

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible"

export const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeInWhenVisible>
            <div className="bg-white p-10 rounded-lg shadow-sm h-full">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-gray-700">
                Fornecer soluções criativas e de alta qualidade, promovendo a cultura, a educação e o entretenimento,
                através de conteúdos diversos, agenciamento, eventos e formação.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="bg-white p-10 rounded-lg shadow-sm h-full">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12 19c-4.2 0-7-1.4-7-4.2V6.2C5 3.4 7.8 2 12 2s7 1.4 7 4.2V15c0 2.8-2.8 4-7 4Z" />
                  <path d="M12 19v3" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-gray-700">
                Ser uma referência no mercado criativo, representação de autores, produção de eventos e gestão de
                conteúdo editorial, gráfico, musical e audiovisual, oferecendo uma experiência integrada e inovadora aos
                clientes e parceiros.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
