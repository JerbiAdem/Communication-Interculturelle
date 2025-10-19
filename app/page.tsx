"use client"

import { useState } from "react"
import { CoreValues } from "@/components/core-values"
import { WhatDrivesMe } from "@/components/what-drives-me"
import { DailyRitualsCarousel } from "@/components/daily-rituals-carousel"
import { CulturalAnchors } from "@/components/cultural-anchors"
import { BridgingWorlds } from "@/components/bridging-worlds"
import { InnerConversations } from "@/components/inner-conversations"
import { Navigation } from "@/components/navigation-bar"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MoodOfTheDay } from "@/components/mood-of-the-day"
import { EmotionalMapping } from "@/components/emotional-mapping"

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Dark/Light Mode Toggle */}
      <Button
        onClick={toggleTheme}
        size="icon"
        variant="outline"
        className="glass fixed right-6 top-6 z-50 rounded-full bg-transparent"
        aria-label="Basculer le thème"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance leading-tight">Qui suis-je ?</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Un parcours des racines tunisiennes aux horizons français, explorant les valeurs, les expériences et les
            rêves qui façonnent la personne que je deviens
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Mes valeurs fondamentales</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Les principes qui guident mes décisions et définissent mon caractère
          </p>
          <CoreValues />
        </div>
      </section>

      {/* What Drives Me */}
      <section id="drives" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Ce qui me motive</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Les motivations profondes qui alimentent ma curiosité et mon ambition
          </p>
          <WhatDrivesMe />
        </div>
      </section>

      {/* Personal Rituals */}
      <section id="rituals" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Mes rituels personnels</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Les pratiques quotidiennes qui me recentrent et façonnent ma manière d'aborder la vie
          </p>
          <DailyRitualsCarousel />
        </div>
      </section>

      {/* Cultural Anchors */}
      <section id="anchors" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Mes ancrages culturels</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            L'héritage et les traditions tunisiennes qui m'ancrent et façonnent ma vision du monde
          </p>
          <CulturalAnchors />
        </div>
      </section>


      {/* Emotional Mapping */}
      <section id="mapping" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Cartographie émotionnelle</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Mon parcours personnel cartographié à travers des lieux et les émotions qu'ils évoquent
          </p>
          <EmotionalMapping />
        </div>
      </section>

      {/* Bridging Worlds */}
      <section id="bridging" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Créer des ponts entre les mondes</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Comment j'intègre mes expériences et perspectives issues de différentes cultures
          </p>
          <BridgingWorlds />
        </div>
      </section>

      {/* Inner Conversations */}
      <section id="conversations" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Conversations intérieures</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Le dialogue entre mes différentes identités lorsqu'elles naviguent entre décisions et perspectives
          </p>
          <InnerConversations />
        </div>
      </section>

      {/* Mood Tracker */}
      <section id="mood-tracker" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Suivi d'humeur</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Un outil pour réfléchir à mon paysage émotionnel et à son évolution
          </p>
          <MoodOfTheDay />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">Un parcours personnel de la Tunisie à la France et au-delà</p>
          <p className="text-sm text-muted-foreground">Explorer l'identité, le patrimoine et la personne que je deviens</p>
        </div>
      </footer>
    </div>
  )
}
