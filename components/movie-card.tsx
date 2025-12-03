"use client"

import { Play, Info, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Movie } from "@/types/movie"

interface MovieCardProps {
  movie: Movie
  onClick: () => void
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card
      className="group relative cursor-pointer overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm 
                 transition-all duration-500 hover:z-50 hover:scale-110 hover:border-neon-purple/80
                 hover:shadow-[0_0_40px_rgba(189,0,255,0.6)] rounded-xl"
      onClick={onClick}
    >
      <div className="aspect-[2/3] relative overflow-hidden bg-secondary">
        <img
          src={movie.poster || "/placeholder.svg"}
          alt={movie.title}
          className="w-full h-full object-cover transition-all duration-700 
                     group-hover:scale-125 group-hover:brightness-125"
          loading="lazy"
        />

        {/* Borde neón + glow ultra potente */}
        <div className="absolute inset-0 rounded-xl border-4 border-transparent 
                        transition-all duration-500 
                        group-hover:border-neon-purple 
                        group-hover:shadow-[0_0_50px_rgba(189,0,255,0.8)] 
                        group-hover:ring-4 group-hover:ring-neon-purple/40 pointer-events-none" 
        />

        {/* Overlay oscuro + contenido al hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 
                        opacity-0 group-hover:opacity-100 transition-all duration-500 
                        flex flex-col justify-end p-5">
          
          {/* Título */}
          <h3 className="text-white font-bold text-xl leading-tight mb-2 drop-shadow-2xl">
            {movie.title}
          </h3>

          {/* Metadatos */}
          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-1.5">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-md" />
              <span className="text-white font-bold">{movie.rating.toFixed(1)}</span>
            </div>
            <span className="text-neon-green font-bold">
              {Math.round(movie.rating * 10)}% Match
            </span>
            <span className="text-gray-300">{movie.year}</span>
          </div>

          {/* Botones Play e Info */}
          <div className="flex gap-4">
            <button className="bg-white text-black p-4 rounded-full hover:bg-neon-purple hover:text-white 
                               transition-all duration-300 shadow-xl hover:shadow-neon-purple/70 
                               hover:scale-110">
              <Play className="w-6 h-6 fill-current" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full 
                               border border-white/40 hover:border-neon-purple hover:bg-neon-purple/30 
                               transition-all duration-300 hover:scale-110">
              <Info className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Rating que sube desde abajo (tu efecto original mejorado) */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 
                        translate-y-8 group-hover:translate-y-0 transition-all duration-500 
                        opacity-0 group-hover:opacity-100">
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
          <span className="text-white font-bold text-lg drop-shadow-lg">
            {movie.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Card>
  )
}