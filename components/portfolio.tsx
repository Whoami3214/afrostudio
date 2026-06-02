"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

const categories = [
  { id: "all", name: "Todos" },
  { id: "corporate", name: "Corporativo" },
  { id: "weddings", name: "Casamentos" },
  { id: "parties", name: "Festas" },
  { id: "advertising", name: "Publicidade" },
]

const portfolioItems = [
  {
    id: 1,
    category: "corporate",
    title: "Actividade +KWANZA",
    subtitle: "Evento Corporativo",
    image: "sem.jpeg",
  },
  {
    id: 2,
    category: "weddings",
    title: "Ana & Pedro",
    subtitle: "Casamento em Luanda",
    image: "casamento1.jpeg",
  },
  {
    id: 3,
    category: "parties",
    title: "Festa de Aniversário",
    subtitle: "Festa Privada",
    image: "_MG_1259.jpg",
  },
  {
    id: 4,
    category: "advertising",
    title: "Actividade ZTE",
    subtitle: "Evento Publicitário",
    image: "c1.jpg",
    /*video: "https://cdn.coverr.co/videos/coverr-luxury-car-interior-2951/1080p.mp4",*/
  },
  {
    id: 5,
    category: "weddings",
    title: "Sofia & Miguel",
    subtitle: "Casamento no Huambo",
    image: "_MG_2279.jpg",
  },
  {
    id: 6,
    category: "corporate",
    title: "Actividade +KWANZA",
    subtitle: "Evento Corporativo",
    image: "camacho2.jpeg ",
  },
  {
    id: 7,
    category: "advertising",
    title: "Actividade ZTE",
    subtitle: "Evento Publicitário",
    image: "c5.jpg",
  },
  {
    id: 8,
    category: "parties",
    title: "Festa de Aniversário",
    subtitle: "Festa Privada",
    image: "_MG_4223.jpg",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-[0.3em] mb-4 block">
            Portfólio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Trabalhos Selecionados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma seleção dos nossos melhores trabalhos em fotografia e vídeo, 
            capturando momentos únicos em cada categoria.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-foreground text-background"
                  : "bg-transparent border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 || index === 3 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              /*onClick={() => item.video && setSelectedVideo(item.video)}*/
            >
              <div className={`relative ${index === 0 || index === 3 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                   {item.video && (
                    <div className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center mb-4">
                      <Play size={24} className="ml-1" />
                    </div>
                  )}
                  <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://heyzine.com/flip-book/598c6582a2.html"
            className="inline-flex px-8 py-4 border border-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Ver Portfólio Completo
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={32} />
          </button>
          <video
            autoPlay
            controls
            className="max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <source src={selectedVideo} type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  )
}
