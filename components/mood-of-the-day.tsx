"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart, Zap, HelpCircle, Award, Play, Pause } from "lucide-react"

const moods = [
  { id: "nostalgia", label: "Nostalgie", icon: Heart, color: "text-secondary" },
  { id: "energy", label: "Énergie", icon: Zap, color: "text-accent-foreground" },
  { id: "doubt", label: "Doute", icon: HelpCircle, color: "text-muted-foreground" },
  { id: "pride", label: "Fierté", icon: Award, color: "text-primary" },
]

export function MoodOfTheDay() {
  const [selectedMood, setSelectedMood] = useState("nostalgia")
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const audio = document.getElementById("current-audio") as HTMLAudioElement | null
    if (!audio) return
    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 flex items-center justify-center bg-gray-50">
        <Image src={encodeURI("/mood.jpg?height=800&width=800")} alt="Photo du jour" fill quality={90} className="object-contain" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm uppercase tracking-wider mb-2">Aujourd'hui</p>
          <p className="font-serif text-3xl font-bold">19 Octobre 2025</p>
        </div>
      </div>

      <CardContent className="p-6 space-y-6">
        {/* Mood Selector */}
        <div>
          <h3 className="font-semibold mb-3">Mon humeur du jour</h3>
          <div className="flex gap-3 flex-wrap">
            {moods.map((mood) => {
              const Icon = mood.icon
              return (
                <Button
                  key={mood.id}
                  variant={selectedMood === mood.id ? "default" : "outline"}
                  onClick={() => setSelectedMood(mood.id)}
                  className="gap-2"
                >
                  <Icon className={`h-4 w-4 ${selectedMood === mood.id ? "" : mood.color}`} />
                  {mood.label}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Current Music */}
        <div>
          <h3 className="font-semibold mb-3">En écoute</h3>
          <Card className="bg-muted">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="h-16 w-16 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎵</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold">Alf Leila w Leila</p>
                <p className="text-sm text-muted-foreground">Chanson emblématique de Om Kalthoum et de loin ma chanson préférée.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </div>
              <audio id="current-audio" src="/audio/Alf.Lela.W.Lela.mp3" />
            </CardContent>
          </Card>
        </div>

        {/* Quote */}
        <div className="border-l-4 border-primary pl-4">
          <p className="italic text-muted-foreground leading-relaxed">
            "L'identité n'est pas ce que nous sommes, mais ce que nous devenons."
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Réflexion personnelle</p>
        </div>
      </CardContent>
    </Card>
  )
}
