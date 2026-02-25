"use client"

import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    id: 1,
    role: "Développeur front-end",
    company: "Freelance",
    period: "2023 - Present",
    description: "Développement de sites web et applications front-end avec des technologies modernes.",
  },
  {
    id: 2,
    role: "Directeur financier (CDF)",
    company: "Geek-genius tech",
    period: "2024 - a nos jour",
    description: "Charge de la gestion fiancier, budgetairs, croissant de economique de la startup.",
  },
  
  {
    id: 3,
    role: "Stagiaire",
    company: "Congolaise de voies Maritimes",
    period: "2022",
    description: "Accomplisement de taches financiers de bases de l'entreprise",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Work </span>
            <span className="text-scifi-cyan">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-scifi-cyan to-scifi-magenta mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="hover:border-scifi-cyan/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                  <div>
                    <h4 className="font-orbitron text-lg text-scifi-cyan">{exp.role}</h4>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-scifi-purple bg-scifi-purple/10 px-3 py-1 rounded self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

