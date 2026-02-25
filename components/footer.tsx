"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Chrislokwa",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:christlokwa056@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-8 border-t border-scifi-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-scifi-cyan font-orbitron">CLB</span>. 
            All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-scifi-border hover:border-scifi-cyan hover:bg-scifi-cyan/10 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 text-gray-400 hover:text-scifi-cyan" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-scifi-border hover:border-scifi-cyan hover:bg-scifi-cyan/10 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-gray-400 group-hover:text-scifi-cyan transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  )
}

