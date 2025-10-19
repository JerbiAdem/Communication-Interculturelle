"use client"

import { Lightbulb, Hammer, Users, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const drives = [
  {
    icon: Lightbulb,
    title: "La joie de comprendre des systèmes complexes",
    description:
      "Il y a une satisfaction particulière à démêler le fonctionnement des choses, des preuves mathématiques aux bases de code complexes",
  },
  {
    icon: Hammer,
    title: "Créer des choses qui comptent",
    description: "Je suis motivé par le désir de concevoir des solutions qui améliorent réellement la vie et l'expérience des gens",
  },
    {
      icon: Users,
      title: "Rendre la technologie plus humaine",
      description: "J'ai vu des gens bloqués par un outil simple. Ma motivation, c'est de créer des choses qui aident vraiment, pas qui frustrent.",
    },
    {
      icon: TrendingUp,
      title: "Devenir meilleur chaque jour",
      description: "Le chemin pour être plus habile, plus réfléchi et plus utile — petit à petit, une itération après l'autre.",
    },
]

export function WhatDrivesMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {drives.map((drive, index) => {
        const Icon = drive.icon
        return (
          <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-serif text-xl font-bold leading-tight">{drive.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{drive.description}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
