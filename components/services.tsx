"use client"

import { Camera, Video, Palette, Film } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Fotografia",
    description: "Captura profissional de momentos únicos com qualidade premium. Equipamento de última geração e técnicas avançadas de iluminação.",
    features: ["Casamentos & Eventos", "Retratos Corporativos", "Produtos & E-commerce", "Edição Profissional"],
  },
  {
    icon: Video,
    title: "Vídeo",
    description: "Produção cinematográfica completa, desde a filmagem até a pós-produção. Conteúdo que conta histórias e emociona.",
    features: ["Cobertura Multicâmara", "Drones 4K", "Estabilização Avançada", "Color Grading Cinema"],
  },
  {
    icon: Film,
    title: "Aftermovies",
    description: "Resumos emocionantes dos seus eventos, editados com música e narrativa que capturam a essência do momento.",
    features: ["Highlight Videos", "Trailers Promocionais", "Same Day Edit", "Versões para Redes Sociais"],
  },
  {
    icon: Palette,
    title: "Branding Visual",
    description: "Criação de conteúdo visual estratégico para fortalecer a identidade da sua marca no mercado.",
    features: ["Sessões de Produto", "Conteúdo para Redes", "Campanhas Publicitárias", "Identidade Visual"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-[0.3em] mb-4 block">
            Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            O Que Oferecemos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluções completas de fotografia e vídeo para transformar 
            os seus momentos em memórias inesquecíveis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 bg-card border border-border hover:border-accent/50 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-12 bg-card border border-border">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">
            Projeto Personalizado?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Cada projeto é único. Entre em contacto para discutirmos 
            as suas necessidades específicas e criarmos algo extraordinário.
          </p>
          <a
            href="#contacto"
            className="inline-flex px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300"
          >
            Fale Connosco
          </a>
        </div>
      </div>
    </section>
  )
}
