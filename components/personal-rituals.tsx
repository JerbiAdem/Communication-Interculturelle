"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

const rituals = [
  {
    title: "Mise au point matinale",
    description:
      "Je commence chaque jour par une réflexion calme, en posant des intentions avant que le monde n'exige mon attention. [Moi Tunisien] : 'Prépare un vrai thé à la menthe.' [Moi Ingénieur] : 'Vérifie Trello d'abord.'",
    image: "/peaceful-morning-routine-setup.jpg",
  },
  {
    title: "Approche de résolution",
    description:
      "Je décompose les défis en parties plus petites, esquisse des solutions et j'itère jusqu'à obtenir de la clarté. Parfois une simple note sur papier change toute la direction.",
    image: "/notebook-with-problem-solving-sketches.jpg",
  },
  {
    title: "Méthode d'apprentissage",
    description:
      "J'apprends en faisant : petit projet, grosse leçon. [Moi Ingénieur] : 'Prototype d'abord, perfectionne après.' [Moi Tunisien] : 'Est-ce utile pour ma communauté ?'",
    image: "/learning-setup-with-books-and-laptop.jpg",
  },
  {
    title: "Recharge & réflexion",
    description:
      "Je trouve l'équilibre par des promenades, la lecture et des conversations qui remettent en question ma façon de penser.",
    image: "/peaceful-reflection-space.jpg",
  },
]

export function PersonalRituals() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {rituals.map((ritual, index) => (
        <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={ritual.image || "/placeholder.svg"}
              alt={ritual.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 space-y-2">
            <h3 className="font-serif text-lg font-bold">{ritual.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{ritual.description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
