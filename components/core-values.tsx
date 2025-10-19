"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

const values = [
  {
    title: "Pourquoi ?",
    description: "Je suis celui qui demande toujours 'pourquoi'. Ça m'a été transmis par mon éducation où il fallait justifier ses choix, et c'est devenu mon moteur en tant qu'ingénieur. \n (photo de moi bébé voulant absolument apprendre à écrire)",
    image: "/bebe moi.jpg",
  },
  {
    title: "Partir sans oublier",
    description: "Mon premier voyage sans mes parents m'a appris l'indépendance. Aujourd'hui, je veux être autonome dans mes choix, mais je reste profondément loyal à mes amis et ma famille.\n (photo de mon premier voyage seul à l'étranger)",
    image: "/premier voyage.jpg",
  },
  {
    title: "Idéalisme appliqué",
    description: "Je rêve grand mais j'expérimente petit — j'essaie, j'échoue vite, je corrige. C'est comme ça que les grandes idées prennent forme.\n (photo de moi testant la caméra Raspebrry Pi pour un projet - ça marche enfin !)",
    image: "/tester caméra du projet.jpg",
  },
  {
    title: "Résilience discrète",
    description: "La persévérance, sans fracas. J'avance même quand personne ne regarde.\n (photo de moi avec mon projet qui fonctionne enfin.)",
    image: "/projet.jpg",
  },
]

export function CoreValues() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {values.map((value, index) => (
        <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-64 flex items-center justify-center bg-gray-50">
            <Image
              src={value.image ? encodeURI(value.image) : "/placeholder.svg"}
              alt={value.title}
              fill
              quality={90}
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-3">
            <h3 className="font-serif text-2xl font-bold">{value.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
