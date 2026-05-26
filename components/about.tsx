
"use client"

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden bg-black rounded-lg shadow-2xl">
              <video
                src="video1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-accent/30 -z-10 rounded-lg" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-accent text-sm uppercase tracking-[0.3em] mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
              Mais de 4 anos a criar memórias inesquecíveis
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A AfroStudio é uma empresa criativa especializada em design gráfico, fotografia e produção audiovisual,
                focada em transformar ideias em experiências visuais únicas e memoráveis.
                Nascida da paixão pela arte e pela comunicação visual, a AfroStudio combina criatividade,
                técnica e inovação para entregar resultados com identidade e impacto.
              </p>
              <p>
                Com uma abordagem moderna e estratégica, trabalhamos cada projeto de forma personalizada, valorizando os detalhes e a essência de cada cliente.
                A nossa inspiração vem da cultura, da estética e da autenticidade africana, refletindo-se em trabalhos que contam histórias e despertam emoções.
              </p>
              <p>
                Atuamos em diversas áreas, desde a criação de marcas e conteúdos visuais até a cobertura de eventos e produção de campanhas,
                sempre com o compromisso de qualidade, originalidade e evolução constante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="font-serif text-4xl text-foreground">250+</span>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Eventos</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-foreground">4+</span>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">Anos</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
