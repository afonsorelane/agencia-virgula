"use client"

import Link from "next/link"
import type { ReactNode } from "react"

export default function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-black font-medium text-sm tracking-wide relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}
