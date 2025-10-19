"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Tv , Calendar, PhoneCall } from "lucide-react"
import Image from "next/image"

const rituals = [
  {
    icon: Calendar,
    label: "L'Organisateur",
    title: "Mon QG : Notion",
    description:
      "La première chose que j'ouvre le matin. Honnêtement, sans ça, je serais perdu. Tout y est : le projet de C++, les deadlines, mais aussi ma liste de courses. Dans un pays où tout est nouveau pour moi, voir mon planning sous contrôle, ça me calme. C'est mon \"cerveau\" externe.",
    color: "text-primary",
    image: "/notion.png",
  },
  {
    icon: PhoneCall,
    label: "L'Ancrage",
    title: "Le débrief avec la famille",
    description:
      "Peu importe l'heure, peu importe ma fatigue, je les appelle. J'ai besoin de leur raconter ma journée, les trucs que j'ai vus, les petites galères, les mini-victoires. Entendre leur voix, c'est ce qui me donne la force pour le lendemain. C'est ma dose de 'normalité'.",
    color: "text-secondary",
    image: "/family.jpg",
  },
  {
    icon: Tv,
    label: "La Déconnexion",
    title: "Ma \"pause cerveau\"",
    description:
      "OK, j'avoue : ma série turque. Elle est interminable, et alors ? C'est le seul moment de la journée où j'ai le droit de ne penser à rien. Ni au code, ni à l'adaptation, ni aux cours. C'est juste mon moment à moi, ma bulle, et c'est sacré.",
    color: "text-accent-foreground",
    image: "/harim soltan.png",
  },
  {
    icon: Coffee,
    label: "L'Autonomie",
    title: "Le 'chef' de ma cuisine",
    description:
      "J'avoue, c'est parfois juste des pâtes. Mais faire la cuisine, c'est mon moment de contrôle. C'est moi qui décide. C'est concret, ça me détend. Et quand j'essaie de recréer un plat de chez moi... c'est ma petite victoire de la journée. C'est l'autonomie qui a bon goût.",
    color: "text-primary",
    image: "/cuisine.jpg",
  },
]

export function DailyRitualsCarousel() {
  return (
    <div className="overflow-x-auto pb-4 -mx-6 px-6">
      <div className="flex gap-6 min-w-max">
        {rituals.map((ritual, index) => {
          const Icon = (ritual as any).icon
          return (
            <Card key={index} className="w-80 flex-shrink-0 glass hover:shadow-lg transition-shadow">
              {ritual.image && (
                <div className="relative h-40 overflow-hidden bg-gray-50">
                  <Image
                    src={encodeURI(ritual.image)}
                    alt={ritual.title}
                    fill
                    quality={80}
                    className="object-contain"
                  />
                </div>
              )}
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full bg-muted ${ritual.color}`}>
                    {Icon ? (
                      <Icon className="h-6 w-6" />
                    ) : ritual.image ? (
                      <div className="relative h-6 w-6 rounded-full overflow-hidden">
                        <Image src={encodeURI(ritual.image)} alt={ritual.title} fill className="object-cover" />
                      </div>
                    ) : null}
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {ritual.label}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold">{ritual.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{ritual.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
