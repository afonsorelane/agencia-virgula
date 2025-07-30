"use client"

import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="/placeholder.svg?height=40&width=160"
              alt="VÍRGULA Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <div className="text-white/60 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} VÍRGULA Agência Criativa. Todos os direitos reservados.</p>
            <p className="mt-1">Criar para Existir</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
