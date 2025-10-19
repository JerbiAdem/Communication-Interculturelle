"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

const objects = [
  {
    id: 1,
    title: "Claviers",
    subtitle: "Ancien vs Nouveau",
    description:
      "Mon vieux clavier arabe de Tunisie à côté de mon clavier mécanique français. Deux outils, deux époques, une même passion.",
    image: "/old-arabic-keyboard-vs-new-mechanical-keyboard.jpg",
  },
  {
    id: 2,
    title: "Cartes SIM",
    subtitle: "Tunisie + France",
    description:
      "Deux cartes SIM côte à côte. Une pour chaque pays, une pour chaque partie de moi. Toujours connecté aux deux mondes.",
    image: "/two-sim-cards-tunisia-france.jpg",
  },
  {
    id: 3,
    title: "Carnet Bilingue",
    subtitle: "Arabe & Français",
    description:
      "Mes notes passent de l'arabe au français sans transition. Parfois les deux langues se mélangent dans la même phrase.",
    image: "/bilingual-notebook-arabic-french-writing.jpg",
  },
  {
    id: 4,
    title: "Stickers d'Ordinateur",
    subtitle: "Identités Mixtes",
    description:
      "Mon laptop raconte mon histoire : stickers de CY Tech, drapeau tunisien, logos de frameworks, calligraphie arabe.",
    image: "/laptop-stickers-cultural-mix-tech.jpg",
  },
]

export function WitnessObjectsGallery() {
  const [selectedObject, setSelectedObject] = useState<(typeof objects)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {objects.map((object) => (
          <Card
            key={object.id}
            className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => setSelectedObject(object)}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={object.image || "/placeholder.svg"}
                alt={object.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-1">{object.title}</h3>
                <p className="text-sm text-white/80">{object.subtitle}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedObject} onOpenChange={() => setSelectedObject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl">{selectedObject?.title}</DialogTitle>
          </DialogHeader>
          {selectedObject && (
            <div className="space-y-4">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={selectedObject.image || "/placeholder.svg"}
                  alt={selectedObject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">{selectedObject.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
