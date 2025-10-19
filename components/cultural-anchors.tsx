"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

const anchors = [
  {
    title: "Le Brunch familial",
    description:
      "Chaque lendemain de fête, on se retrouve autour d'un brunch copieux, mélange de traditions tunisiennes et de touches modernes. \n (photo du brunch post nouvel an)",
    image: "/brunch.jpg",
  },
  {
    title: "L'Aïd et le Sapin de Noël",
    description: "J'ai grandi avec les deux. Pour moi, l'ouverture culturelle n'est pas un concept, c'est un souvenir d'enfance. C'est ma plus grande force. \n (photo de notre petit sapin)",
    image: "/sapin de noel.jpg",
  },
    {
      title: "Rituels qui tiennent",
      description:
        "Le rythme des fêtes, les chansons partagées, les repas qu'on répète — ce sont des gestes qui me maintiennent ancré, où que j'aille.\n (photo d'un repas familial)",
      image: "/repas familial.jpg",
    },
    {
      title: "Leçon d'engagement",
      description: "La persévérance et la responsabilité : on m'a appris à finir ce que j'entreprends, et ça guide tout mon travail.\n (photo de mon badge de stage)",
      image: "/badge acces stage.jpg",
    },
]

export function CulturalAnchors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {anchors.map((anchor, index) => (
        <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-64 flex items-center justify-center bg-gray-50">
            <Image
              src={anchor.image ? encodeURI(anchor.image) : "/placeholder.svg"}
              alt={anchor.title}
              fill
              quality={90}
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-3">
            <h3 className="font-serif text-2xl font-bold">{anchor.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{anchor.description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
