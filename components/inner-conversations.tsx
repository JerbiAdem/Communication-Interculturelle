import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const messages = [
  {
    persona: "tunisian",
    avatar: "🇹🇳",
    name: "Moi Tunisien",
    text: "C'est l'heure. La famille attend ton appel. C'est important de garder le lien, de les rassurer. Tu ne peux pas rater ça.",
    color: "bg-secondary/10 text-accent-foreground",
  },
  {
    persona: "foreign student",
    avatar: "🇫🇷",
    name: "Moi Etudiant Etranger",
    text: "Mais c'est la première vraie soirée. Tout le monde y va. Si je n'y vais pas, je vais encore rester seul. J'ai besoin de m'intégrer, de rencontrer des gens.",
    color: "bg-primary/10 text-accent-foreground",
  },
  {
    persona: "engineer",
    avatar: "💻",
    name: "Moi Ingénieur",
    text: "Aucun de vous deux ne voit le rendu de projet pour lundi ? L'intégration et la famille, c'est bien, mais on est ici pour une seule chose : le diplôme. La priorité, c'est le travail.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    persona: "tunisian",
    avatar: "🇹🇳",
    name: "Moi Tunisien",
    text: "La réussite, c'est bien, mais sans la famille pour la partager, ça ne vaut rien.",
    color: "bg-secondary/10 text-accent-foreground",
  },
  {
    persona: "foreign student",
    avatar: "🇫🇷",
    name: "Moi Etudiant Etranger",
    text: "Et la réussite, c'est aussi le réseau ! Cette soirée, c'est du 'networking' informel. C'est tout aussi important que le projet",
    color: "bg-primary/10 text-accent-foreground",
  },
  {
    persona: "engineer",
    avatar: "💻",
    name: "Moi Ingénieur",
    text: "Stop. C'est un problème d'optimisation à trois variables : Famille (F), Social (S), Travail (T). On ne peut pas avoir F=1, S=1 et T=1 en même temps. Donc j'appelle la famille maintenant, un appel plus court et concentré. Je vais à la soirée pendant 2 heures précises pour créer du lien. Je rentre, et je 'commit' 3 heures de travail intense sur le projet.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    persona: "tunisian",
    avatar: "🇹🇳",
    name: "Moi Tunisien",
    text: "Un appel 'court et concentré' ? Ce n'est pas comme ça qu'on parle à sa mère...",
    color: "bg-secondary/10 text-accent-foreground",
  },
  {
    persona: "foreign student",
    avatar: "🇫🇷",
    name: "Moi Etudiant Etranger",
    text: "C'est la solution la plus rationnelle. Ce n'est pas parfait, c'est un compromis. C'est ça, l'adaptation.",
    color: "bg-primary/10 text-accent-foreground",
  }

]

export function InnerConversations() {
  return (
    <Card className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
      {messages.map((message, index) => (
        <div key={index} className={`flex gap-3 ${message.persona === "foreign student" ? "flex-row-reverse" : ""}`}>
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarFallback className="text-lg">{message.avatar}</AvatarFallback>
          </Avatar>
          <div className={`flex flex-col ${message.persona === "foreign student" ? "items-end" : "items-start"} max-w-[80%]`}>
            <span className="text-xs text-muted-foreground mb-1">{message.name}</span>
            <div className={`rounded-2xl px-4 py-3 ${message.color}`}>
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  )
}
