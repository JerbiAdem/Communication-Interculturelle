"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const growthAreas = [
  {
    category: "Compétences que je développe",
    items: [
      "Conception et architecture de systèmes avancés",
      "Diriger des équipes techniques avec empathie",
      "Communiquer des idées complexes simplement",
    ],
  },
  {
    category: "Perspectives que j'explore",
    items: [
      "Comment concilier ambition et contentement",
      "L'intersection entre technologie et éthique",
      "Ce que signifie vivre de manière authentique",
    ],
  },
  {
    category: "Questions que je porte",
    items: [
      "Comment créer une technologie qui sert réellement l'humanité ?",
      "Que signifie réussir selon mes propres critères ?",
      "Comment préserver la curiosité en développant mon expertise ?",
    ],
  },
  {
    category: "Comment je veux contribuer",
    items: [
      "Construire des outils qui démocratisent l'accès à la technologie",
      "Accompagner les autres dans leur parcours",
      "Créer des espaces pour des connexions et une croissance authentiques",
    ],
  },
]

export function PersonBecoming() {
  return (
    <div className="space-y-8">
      {growthAreas.map((area, index) => (
        <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-serif text-2xl font-bold mb-6">{area.category}</h3>
          <div className="space-y-4">
            {area.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 shrink-0">
                  {itemIndex + 1}
                </Badge>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
