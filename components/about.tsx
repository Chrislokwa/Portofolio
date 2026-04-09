"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const highlights = [
  "1+ An Experience",
  "10+ Projets Complete",
]

export function About() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-scifi-cyan">À Propos de</span>{" "}
            <span className="text-white">Moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-scifi-cyan to-scifi-magenta mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-border">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Photo de la section a propos */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-48 h-48 rounded-lg border-2 border-scifi-cyan/50 bg-scifi-bg-secondary flex items-center justify-center relative overflow-hidden group">
                    {/* Image - montre quand apres chargement, cache apres une erreur */}
                    {!imageError && (
                      <img 
                        src="/costar.png" 
                        alt="Profile Photo"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    )}
                    {/* Fallback placeholder - shows when image fails to load */}
                    {imageError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <div className="w-24 h-24 rounded-full border-2 border-scifi-cyan/30 flex items-center justify-center mb-2">
                          <span className="font-orbitron text-scifi-cyan text-xs">PHOTO</span>
                        </div>
                        <p className="text-gray-400 text-xs">Image non disponible</p>
                      </div>
                    )}
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-scifi-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-orbitron text-xl text-scifi-cyan mb-4">
                    Building the Future, One Component at a Time
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    Je suis Chris Lokwa Benge, étudiant en L3/LMD en Informatique et Gestion 
                    à l'ecole Informatique de Finance (EIFI) en République Démocratique du Congo 🇨🇩. 
                    Passionné par la technologie, 
                    je me spécialise dans le développement web moderne avec un fort intérêt pour les interfaces élégantes, 
                    performantes et bien structurées.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    Je travaille principalement avec Next.js, React, TypeScript, Tailwind CSS et Shadcn/UI, et j'aime concevoir des interfaces futuristes, propres et intuitives. 
                    J'accorde une grande importance à l'expérience utilisateur, 
                    à la structure du code et aux bonnes pratiques de développement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-scifi-border bg-scifi-bg-secondary/50 text-center hover:border-scifi-cyan transition-colors duration-300"
              >
                <span className="text-scifi-cyan font-rajdhani font-semibold">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

