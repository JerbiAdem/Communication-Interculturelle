"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const anchors = {
  traditions: [
    {
      title: "Family Gatherings",
      description: "The ritual of sharing meals and stories that connect generations",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Cultural Heritage",
      description: "The values and wisdom passed down that shape my worldview",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  books: [
    {
      title: "Thinking, Fast and Slow",
      description: "M'a appris comment notre esprit fonctionne et comment prendre de meilleures décisions",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The Pragmatic Programmer",
      description: "A façonné mon approche de la création logicielle avec soin et savoir-faire",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  people: [
    {
      title: "Mes mentors",
      description: "Des enseignants qui ont cru en moi et m'ont poussé à réfléchir plus profondément",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Innovateurs que j'admire",
      description: "Des visionnaires qui ont montré que la technologie peut être à la fois puissante et humaine",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
}

export function AnchorsInspirations() {
  return (
    <Tabs defaultValue="traditions" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
        <TabsTrigger value="traditions">Traditions</TabsTrigger>
        <TabsTrigger value="books">Livres & Idées</TabsTrigger>
        <TabsTrigger value="people">Personnes</TabsTrigger>
      </TabsList>

      <TabsContent value="traditions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {anchors.traditions.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="books">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {anchors.books.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="people">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {anchors.people.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
