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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0e1a] rounded-xl border border-primary/30 shadow-[0_0_50px_rgba(var(--primary),0.2)] animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-primary/20 text-white hover:text-primary rounded-full transition-colors"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden group">
          <img 
            src={movie.poster || "/placeholder.svg"} 
            alt={movie.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-5xl font-bold text-white mb-4 text-balance drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">{movie.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{movie.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <Calendar className="w-4 h-4" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <Clock className="w-4 h-4" />
                <span>{movie.duration} min</span>
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 shadow-[0_0_10px_rgba(var(--primary),0.2)]">
                {movie.genre}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Trailer Button */}
          <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] transition-all text-lg py-6">
            <Play className="w-5 h-5 mr-2 fill-current" />
            Ver Tráiler
          </Button>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {/* Synopsis */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"/>
                  Sinopsis
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">{movie.synopsis}</p>
              </div>

              {/* Cast */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"/>
                  Reparto
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((actor, index) => (
                    <Badge key={index} variant="outline" className="bg-white/5 text-white/90 border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default py-2 px-4">
                      {actor}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Director */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Director</h3>
                <p className="text-white font-semibold text-lg">{movie.director}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
