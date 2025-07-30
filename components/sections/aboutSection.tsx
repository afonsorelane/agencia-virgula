"use client"

import Image from "next/image"
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible"

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInWhenVisible>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-black/5 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/5 rounded-full"></div>
              <Image
                src="/assets/img/about.jpg" // Altere para o caminho real da imagem
                alt="Equipe VÍRGULA"
                width={600}
                height={600}
                className="rounded-lg relative z-10 w-full h-auto"
              />
            </div>
          </FadeInWhenVisible>

          <div>
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a VÍRGULA</h2>
              <div className="w-20 h-1 bg-black mb-8"></div>
              <p className="text-gray-700 mb-6">
                Somos uma empresa moçambicana comprometida em transformar ideias em experiências marcantes. Nossa
                actuação abrange o mercado criativo, a representação de autores, a produção de eventos e a gestão de
                conteúdos editoriais, gráficos, musicais e audiovisuais.
              </p>
              <p className="text-gray-700 mb-6">
                Buscamos ser uma referência nesse universo, oferecendo soluções integradas e inovadoras que atendam às
                necessidades e expectativas de nossos colaboradores, clientes e parceiros.
              </p>
              <p className="text-gray-700">
                No intuito de construir um legado no mercado criativo nacional e internacional, conectamos talentos e
                públicos por meio de projectos que inspirem, emocionem e transformem.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  )
}
