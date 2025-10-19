"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const bridges = [
  {
    from: "Perspective tunisienne",
    to: "Innovation technologique",
    description:
      "Apporter débrouillardise et adaptabilité de mon parcours tunisien pour résoudre des défis techniques par des solutions créatives et efficaces",
    example: "Avoir grandi avec des ressources limitées m'a appris à optimiser et à penser de manière créative face aux contraintes",
  },
  {
    from: "Pont culturel",
    to: "Position unique",
    description:
      "Mon expérience entre les cultures me donne des moyens pour concevoir des technologies adaptées à différents contextes",
    example:
      "Comprendre les deux perspectives m'aide à concevoir des solutions culturellement conscientes et pertinentes à l'échelle mondiale",
  },
  {
    from: "Philosophie d'intégration",
    to: "Croissance personnelle",
    description:
      "Je ne choisis pas entre mes identités - je les synthétise en une perspective unique qui enrichit tout ce que je fais",
    example: "Mes valeurs tunisiennes de communauté et l'accent français sur l'innovation se complètent parfaitement",
  },
]

export function BridgingWorlds() {
  return (
    <div className="space-y-8">
      {bridges.map((bridge, index) => (
        <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-semibold">
                {bridge.from}
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="flex-1 text-right">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold">
                {bridge.to}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">{bridge.description}</p>
            <div className="pl-4 border-l-2 border-accent">
              <p className="text-muted-foreground italic leading-relaxed">{bridge.example}</p>
            </div>
          </div>
        </Card>
      ))}

      {/* Personal Philosophy
      <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <h3 className="font-serif text-2xl font-bold mb-4">Ma philosophie d'intégration</h3>
          <p className="text-lg leading-relaxed mb-4">
            Je crois que mes expériences diverses ne me divisent pas - elles multiplient mon potentiel. Chaque culture
            dont j'ai fait partie m'a donné des outils, des perspectives et des valeurs qui s'assemblent pour créer
            quelque chose d'unique.
          </p>
          <p className="text-lg leading-relaxed">
            Je ne suis pas seulement Tunisien, Français ou futur citoyen du monde - je suis tout cela à la fois, et cette
            synthèse est ma plus grande force. Elle me permet de voir des problèmes que d'autres manquent, de connecter
            des idées au-delà des frontières et de construire des ponts là où d'autres voient des murs.
          </p>
      </Card> */}
    </div>
  )
}
