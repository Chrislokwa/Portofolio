"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const roles = [
  "Front-End Developer",
  "UI/UX Enthusiast",
  "React Specialist",
  "Next.js Developer",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Particles */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <p className="text-scifi-cyan mb-4 font-rajdhani tracking-widest uppercase">
            Bienvenue dans mon univers numérique
          </p>
        </div>

        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="text-white">Bonjour, Je&apos;Suis </span>
          <span className="text-glow-cyan text-scifi-cyan">Chris LOKWA Benge</span>
        </h1>

        <div className="h-12 md:h-16 flex items-center justify-center mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
          <span className="text-xl md:text-2xl text-gray-300 font-rajdhani">
            A <span className="text-scifi-magenta typing-cursor">{displayText}</span>
          </span>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Je suis un développeur passionné spécialisé dans la création d&apos;expériences web modernes 
          et immersives. Avec une expertise en React, Next.js et Tailwind CSS, 
          je transforme les idées en interfaces élégantes et performantes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="group cursor-pointer">
           Voir mes Projets
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="cursor-pointer">
            <a href="#contact">Me Contacter</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://github.com/Chrislokwa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-scifi-border hover:border-scifi-cyan hover:bg-scifi-cyan/10 transition-all duration-300 hover-glow"
          >
            <Github className="h-5 w-5 text-gray-400 hover:text-scifi-cyan" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-scifi-border hover:border-scifi-cyan hover:bg-scifi-cyan/10 transition-all duration-300 hover-glow"
          >
            <Linkedin className="h-5 w-5 text-gray-400 hover:text-scifi-cyan" />
          </a>
          <a
            href="mailto:christlokwa056@gmail.com"
            className="p-3 rounded-full border border-scifi-border hover:border-scifi-cyan hover:bg-scifi-cyan/10 transition-all duration-300 hover-glow"
          >
            <Mail className="h-5 w-5 text-gray-400 hover:text-scifi-cyan" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up opacity-0" style={{ animationDelay: "0.7s" }}>
          <div className="w-6 h-10 border-2 border-scifi-cyan/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-scifi-cyan rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

