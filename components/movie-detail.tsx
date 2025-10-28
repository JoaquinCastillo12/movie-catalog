"use client"

import { X, Star, Calendar, Clock, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Movie } from "@/types/movie"

interface MovieDetailProps {
  movie: Movie
  onClose: () => void
}

export function MovieDetail({ movie, onClose }: MovieDetailProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-xl border border-border shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img src={movie.poster || "/placeholder.svg"} alt={movie.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">{movie.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">{movie.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{movie.duration} min</span>
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                {movie.genre}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Trailer Button */}
          <Button className="mb-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Play className="w-5 h-5 mr-2" />
            Ver Tráiler
          </Button>

          {/* Synopsis */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">Sinopsis</h3>
            <p className="text-muted-foreground leading-relaxed">{movie.synopsis}</p>
          </div>

          {/* Cast */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">Reparto</h3>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor, index) => (
                <Badge key={index} variant="outline" className="bg-secondary/50 text-foreground border-border">
                  {actor}
                </Badge>
              ))}
            </div>
          </div>

          {/* Director */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Director</h3>
            <p className="text-muted-foreground">{movie.director}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
