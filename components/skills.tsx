"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "UI/UX Design", level: 85, category: "Design" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Git / Version Control", level: 90, category: "Tools" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-scifi-cyan">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-scifi-cyan to-scifi-magenta mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-rajdhani flex items-center gap-2">
                    {skill.name}
                    <Badge variant="secondary" className="text-xs py-0 h-5">
                      {skill.category}
                    </Badge>
                  </span>
                  <span className="text-scifi-cyan font-rajdhani">{skill.level}%</span>
                </div>
                <div className="h-2 bg-scifi-bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-scifi-cyan to-scifi-purple rounded-full progress-bar relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-scifi-cyan rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

