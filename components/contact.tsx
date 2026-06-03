"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE_ID = "service_zgvkfhg"
const EMAILJS_TEMPLATE_ID = "template_5qjfym3"
const EMAILJS_PUBLIC_KEY = "PRn7GdmUz_tHuq2MR"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Não fornecido",
          service: formData.service,
          event_date: formData.eventDate || "Não especificada",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", service: "", eventDate: "", message: "" })
    } catch (err) {
      setError("Erro ao enviar mensagem. Tente novamente ou contacte-nos diretamente.")
      console.error("EmailJS error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-[0.3em] mb-4 block">
            Contacto
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Vamos Criar Algo Extraordinário
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Entre em contacto para discutirmos o seu projeto. 
            Respondemos a todos os pedidos em menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="text-center py-16 border border-border">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Send size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl mb-4">Mensagem Enviada Com Sucesso!</h3>
                <p className="text-muted-foreground">
                  Obrigado pelo seu contacto. Entraremos em contacto consigo em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border focus:border-accent outline-none transition-colors"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border focus:border-accent outline-none transition-colors"
                      placeholder="email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm uppercase tracking-wider mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border focus:border-accent outline-none transition-colors"
                      placeholder="+244 932 153 880"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm uppercase tracking-wider mb-2">
                      Serviço *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="casamento">Casamento</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="festa">Festa Privada</option>
                      <option value="publicidade">Publicidade</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm uppercase tracking-wider mb-2">
                    Data do Evento
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border focus:border-accent outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border focus:border-accent outline-none transition-colors resize-none"
                    placeholder="Conte-nos sobre o seu projeto..."
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-accent disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    "A enviar..."
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-xl mb-6">Informações de Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Telefone</p>
                    <a href="tel:+244932153880" className="hover:text-accent transition-colors">
                      +244 932 153 880
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={20} className="text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:afrosstudio32@gmail.com" className="hover:text-accent transition-colors">
                      afrosstudio32@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Localização</p>
                    <p>Luanda, Angola</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Contact Buttons */}
            <div>
              <h3 className="font-serif text-xl mb-6">Contacto Rápido</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/244932153880?text=Olá! Gostaria de saber mais sobre os vossos serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com/josue_mendes_photograph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-[#E4405F]/10 border border-[#E4405F]/30 hover:bg-[#E4405F]/20 transition-colors"
                >
                  <Instagram size={20} className="text-[#E4405F]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 border border-accent/30 bg-accent/5">
              <h4 className="font-serif text-lg mb-2">Disponibilidade 2026</h4>
              <p className="text-sm text-muted-foreground">
                Ainda com datas disponíveis para casamentos e eventos. 
                Reserve o quanto antes para garantir a sua data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}