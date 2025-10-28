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
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 border-l-4 border-primary pl-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">New Movies</h2>
            <p className="text-white/60">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFeaturedIndex((prev) => Math.max(0, prev - 1))}
            disabled={featuredIndex === 0}
            className="text-white/70 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => setFeaturedIndex((prev) => Math.min(mockMovies.length - 1, prev + 1))}
            disabled={featuredIndex >= mockMovies.length - 1}
            className="text-white/70 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Featured Movie */}
        <div
          className="relative h-[500px] rounded-lg overflow-hidden group cursor-pointer"
          onClick={() => onMovieClick(featuredMovie)}
        >
          <img
            src={featuredMovie.poster || "/placeholder.svg"}
            alt={featuredMovie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Time Badge */}
          <div className="absolute top-4 left-4 bg-primary px-3 py-2 rounded text-white text-sm font-semibold">
            02:15:00
          </div>

          {/* Rating */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-white font-semibold">{featuredMovie.rating}/9</span>
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-primary/90 rounded-full p-6">
              <Play className="w-12 h-12 text-white fill-white" />
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
            <h3 className="text-3xl font-bold text-white">{featuredMovie.title}</h3>
            <p className="text-white/80 text-sm line-clamp-3">{featuredMovie.synopsis}</p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-md">Read more</Button>
          </div>
        </div>

        {/* Recent Movies List */}
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
