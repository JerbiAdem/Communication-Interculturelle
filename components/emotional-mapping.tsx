"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"

const locations = [
  {
    id: 1,
    name: "Tunis",
    country: "Tunisie",
    emotion: "Nostalgie & Racines",
    description: "Là où tout a commencé. Les souvenirs d'enfance, la famille, les traditions.",
    image: "/tunis.jpg?height=300&width=400",
    position: { top: "61%", left: "93.5%" },
    isPulsing: true,
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    emotion: "Transition & Découverte",
    description: "Le point de passage. Premières impressions, premiers défis, premières victoires.",
    image: "/paris.jpg?height=300&width=400",
    position: { top: "23%", left: "85%" },
    isPulsing: false,
  },
  {
    id: 3,
    name: "Cergy",
    country: "France",
    emotion: "Ancrage & Croissance",
    description: "Mon présent. CY Tech, mes études, ma nouvelle vie, mon évolution.",
    image: "/cergy.jpg?height=300&width=400",
    position: { top: "22%", left: "84%" },
    isPulsing: false,
  },
  {
    id: 4,
    name: "New York",
    country: "USA",
    emotion: "Rêve & Ambition",
    description: "L'horizon. Là où je veux aller, ce que je veux accomplir.",
    image: "/new york.jpg?height=300&width=400",
    position: { top: "48%", left: "5%" },
    isPulsing: false,
  },
]

export function EmotionalMapping() {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {/* Interactive Map */}
      <Card className="overflow-hidden bg-muted">
        {/* Use a fixed responsive height and a centered 'contain' background so the whole map image is visible */}
        <div className="relative w-full h-[420px] md:h-[520px] lg:h-[600px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-90"
            style={{ backgroundImage: "url('/map.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 mix-blend-multiply" />

          {/* Location Pins */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ top: location.position.top, left: location.position.left }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
            <div className="relative">
              <MapPin
                className={`h-8 w-8 ${
                  location.isPulsing
                    ? "text-secondary animate-pulse"
                    : hoveredLocation === location.id
                      ? "text-primary"
                      : "text-foreground"
                } transition-colors`}
              />
              {location.isPulsing && (
                <div className="absolute inset-0 animate-ping">
                  <MapPin className="h-8 w-8 text-secondary opacity-75" />
                </div>
              )}
            </div>

            {/* Hover Card */}
            {hoveredLocation === location.id && (
              <Card className="absolute top-10 left-1/2 -translate-x-1/2 w-64 z-10 shadow-xl">
                <CardContent className="p-4 space-y-2">
                  <div className="relative h-32 rounded-md overflow-hidden mb-2">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">{location.country}</p>
                  <p className="text-sm font-semibold text-primary">{location.emotion}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{location.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
        </div>
      </Card>

      {/* Location List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {locations.map((location) => (
          <Card
            key={location.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className={`h-5 w-5 ${location.isPulsing ? "text-secondary" : "text-primary"}`} />
                <h3 className="font-serif text-lg font-bold">{location.name}</h3>
              </div>
              <p className="text-sm font-semibold text-primary">{location.emotion}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
