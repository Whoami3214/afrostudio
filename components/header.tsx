"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#sobre" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Testemunhos", href: "#testemunhos" },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#hero" className="font-serif text-2xl tracking-wide text-foreground">
          Afro Studio
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          href="#contacto"
          className="hidden md:inline-flex px-6 py-2.5 border border-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Orçamento
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 border border-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Pedir Orçamento
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
