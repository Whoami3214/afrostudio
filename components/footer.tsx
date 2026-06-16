import Link from "next/link"
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/josue_mendes_photograph" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@josuemendes" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/josuemendes" },
  { name: "Email", icon: Mail, href: "mailto:afrosstudio32@gmail.com" },
]

const footerLinks = {
  services: [
    { name: "Casamentos", href: "#portfolio" },
    { name: "Eventos Corporativos", href: "#portfolio" },
    { name: "Festas", href: "#portfolio" },
    { name: "Publicidade", href: "#portfolio" },
  ],
  company: [
    { name: "Sobre", href: "#sobre" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contacto", href: "#contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#hero" className="font-serif text-3xl tracking-wide inline-block mb-4">
              AfroStudio
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              A AFROSTUDIO é uma Agência de Marketing, dedicada a impulsionar o crescimento de negócios por meio de estratégias criativas e orientadas para resultados.
              Atuamos na gestão de redes sociais,
              marketing digital, publicidade, branding e desenvolvimento de soluções de comunicação que fortalecem a presença das marcas no mercado.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AfroStudio. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
