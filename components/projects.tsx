"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Biblio-virt",
    description: " Bibliothèque Virtuelle Une application web Front-end de gestion de bibliothèque virtuelle. Elle permet aux utilisateurs de parcourir un catalogue de livres, d'emprunter des ouvrages et de suivre leur activité de lecture.",
    tags: ["Next.js", "TypeScript", "Tailwind", "rechart"],
    category: "webapp",
    github: "https://github.com/Chrislokwa/biblio-virt",
    demo: "https://demo.com",
    image: "/biblio.png",
  },
  {
    id: 2,
    title: "Hospi",
    description: "une application web moderne de gestion de clinique médicale permettant de gérer les patients, les rendez-vous, les dossiers médicaux, la facturation et l'historique des traitements.",
    tags: ["React", "TypeScript", "", "Tailwind"],
    category: "webapp",
    github: "https://github.com/Chrislokwa/Hospis",
    demo: "https://demo.com",
    image: "/hospi.png",
  },
  {
    id: 3,
    title: "Portfolio Personnel",
    description: "A customizable portfolio template for developers with multiple themes, animations, and responsive design.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    category: "template",
    github: "https://github.com/Chrislokwa/Portfolio",
    demo: "https://demo.com",
    image: "/porto.png",
  },
  {
    id: 4,
    title: "Geek-fin-Saas",
    description: "application web de gestion financières de bases d'une startup",
    tags: ["React", "Node.js", "next", "Prisma"],
    category: "webapp",
    github: "https://github.com/Chrislokwa/geek_fin_saas",
    demo: "https://demo.com",
    image: "/geek.png",
  },
  {
    id: 5,
    title: "Happy-events",
    description: "Application de gestion d'invitations avec QR Code pour événements (mariages, anniversaires, conférences, événements d'entreprise).",
    tags: ["React", "Taiwind", "Next"],
    category: "webapp",
    github: "https://github.com/Chrislokwa/Happy-events",
    demo: "https://demo.com",
    image: "/event.png",
  },
  {
    id: 6,
    title: "Cabinet-Ndobo",
    description: "Site web professionnel du Cabinet Ndobo, cabinet d'avocats offrant des services juridiques de qualité supérieure.",
    tags: ["Next.js", "Node express", "Tailwind"],
    category: "webapp",
    github: "https://github.com/Chrislokwa/cabinet-ndobo",
    demo: "https://demo.com",
    image: "/cabi.png",
  },
]

const categories = [
  { value: "all", label: "All Projects" },
  { value: "webapp", label: "Web Apps" },
  { value: "template", label: "Templates" },
]

export function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-scifi-cyan">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-scifi-cyan to-scifi-magenta mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Découvrez mes derniers travaux mettant en valeur les technologies web modernes et les solutions créatives
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              onClick={() => setFilter(category.value)}
              className="font-rajdhani"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-scifi-bg-secondary to-scifi-bg-tertiary rounded-t-lg relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-scifi-cyan/30 flex items-center justify-center">
                      <span className="font-orbitron text-scifi-cyan text-xs">PROJETS</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-scifi-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-scifi-cyan transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-3">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

