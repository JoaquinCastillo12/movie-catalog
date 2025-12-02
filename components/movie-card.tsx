"use client"

import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Movie } from "@/types/movie"

interface MovieCardProps {
  movie: Movie
  onClick: () => void
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]"
      onClick={onClick}
    >
      <div className="aspect-[2/3] relative overflow-hidden bg-secondary">
        <img
          src={movie.poster || "/placeholder.svg"}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 text-white">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{movie.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-1 mb-1">{movie.title}</h3>
        <p className="text-sm text-muted-foreground">{movie.year}</p>
      </div>
    </Card>
  )
}
