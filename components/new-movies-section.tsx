"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Movie } from "@/types/movie"
import { mockMovies } from "@/lib/mock-data"

interface NewMoviesSectionProps {
  onMovieClick: (movie: Movie) => void
}

export function NewMoviesSection({ onMovieClick }: NewMoviesSectionProps) {
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const featuredMovie = mockMovies[featuredIndex]
  const recentMovies = mockMovies.slice(0, 3)

  return (
    <section className="space-y-8">
      {/* Section Header */}

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Featured Movie */}
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white">New Movies</h3>
              <p className="text-white/60 text-sm">Pages: 2/32</p>
            </div>
            <button className="text-white/70 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Movie List */}
          <div className="space-y-4">
            {recentMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => onMovieClick(movie)}
              >
                <img
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-24 h-32 object-cover rounded"
                />
                <div className="flex-1 space-y-2">
                  <h4 className="text-white font-semibold">{movie.title}</h4>
                  <p className="text-primary text-sm">{movie.genre}</p>
                  <p className="text-white/60 text-sm line-clamp-2">Wolves have recently returned to Scandinavia</p>
                  <div className="flex items-center gap-4 text-white/60 text-xs">
                    <span>1 Month Ago</span>
                    <span>01:20:13</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
