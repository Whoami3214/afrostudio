"use client"

import { useEffect, useRef } from "react"
import { Play, ChevronDown } from "lucide-react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="logoAfro.jpeg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-couple-dancing-at-wedding-1638/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <span className="text-accent text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in">
          Afro Studio
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight mb-8 text-balance">
          Capturamos momentos que contam histórias
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          eventos corporativos, casamentos, festas e publicidade. 
          Cada projeto é uma obra única, criada com paixão e excelência.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#portfolio"
            className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300"
          >
            <Play size={16} className="group-hover:scale-110 transition-transform" />
            Ver Portfólio
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border border-foreground/30 text-sm uppercase tracking-widest hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  )
}
