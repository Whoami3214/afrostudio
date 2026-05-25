"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Noiva",
    event: "Casamento em Luanda",
    image: "c11.jpg",
    text: "A Afro Studio capturou cada momento do nosso casamento de forma mágica. As fotografias e o vídeo superaram todas as nossas expectativas. Um verdadeiro artista que conseguiu contar a nossa história de amor.",
  },
  {
    id: 2,
    name: "Rainel Simão",
    role: "CEO",
    event: "Evento Corporativo",
    image: "r1.jpeg",
    text: "Profissionalismo exemplar. A cobertura do nosso evento anual foi impecável. A qualidade do material entregue ajudou-nos imenso na comunicação interna e nas redes sociais da empresa.",
  },
  {
    id: 3,
    name: "Délcio Mendes",
    role: "Diretor de Marketing",
    event: "Campanha Publicitária",
    image: "c4.jpg",
    text: "Trabalhar com o Josué na nossa campanha foi uma experiência incrível. Ele entendeu perfeitamente a visão da marca e criou conteúdo visual que elevou toda a nossa comunicação.",
  },
  {
    id: 4,
    name: "Helton De Brito",
    role: "Aniversariante",
    event: "Festa de 50 Anos",
    image: "_MG_4224.jpg",
    text: "A festa dos meus 50 anos ficou eternizada de forma espetacular. O aftermovie que o Josué criou emocionou todos os convidados. Recomendo sem qualquer hesitação.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testemunhos" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-[0.3em] mb-4 block">
            Testemunhos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            O Que Dizem os Nossos Clientes
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    <Quote size={48} className="mx-auto mb-8 text-accent/30" />
                    <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 text-balance">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent/30">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h4 className="font-serif text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} — {testimonial.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
              aria-label="Testemunho anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ver testemunho ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
              aria-label="Próximo testemunho"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
