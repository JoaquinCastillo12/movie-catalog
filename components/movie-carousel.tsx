"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Movie } from "@/types/movie"
import { mockMovies } from "@/lib/mock-data"

interface MovieCarouselProps {
  title: string
  description: string
  onMovieClick: (movie: Movie) => void
  searchQuery?: string
  selectedGenre?: string
  selectedYear?: string
  selectedRating?: string
}

export function MovieCarousel({
  title,
  description,
  onMovieClick,
  searchQuery = "",
  selectedGenre = "all",
  selectedYear = "all",
  selectedRating = "all",
}: MovieCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(mockMovies)

  useEffect(() => {
    let filtered = mockMovies

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Filter by genre
    if (selectedGenre !== "all") {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre)
    }

    // Filter by year
    if (selectedYear !== "all") {
      filtered = filtered.filter((movie) => movie.year.toString() === selectedYear)
    }

    // Filter by rating
    if (selectedRating !== "all") {
      const minRating = Number.parseInt(selectedRating.replace("+", ""))
      filtered = filtered.filter((movie) => movie.rating >= minRating)
    }

    setFilteredMovies(filtered)
    setCurrentIndex(0)
  }, [searchQuery, selectedGenre, selectedYear, selectedRating])

  const visibleMovies = 3
  const maxIndex = Math.max(0, filteredMovies.length - visibleMovies)

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const getVisibleMovies = () => {
    return filteredMovies.slice(currentIndex, currentIndex + visibleMovies)
  }

  if (filteredMovies.length === 0) {
    return (
      <section className="space-y-8">
        <div className="flex items-start gap-4 border-l-4 border-primary pl-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-white/60">{description}</p>
          </div>
        </div>
        <div className="text-center py-12">
          <p className="text-white/60 text-lg">No movies found matching your search.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 border-l-4 border-primary pl-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-white/60">{description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="text-white/70 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="text-white/70 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative px-20">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <div className="flex items-center">
            <ChevronLeft className="w-16 h-16" strokeWidth={3} />
            <ChevronLeft className="w-16 h-16 -ml-8" strokeWidth={3} />
          </div>
        </button>

        {/* Cards */}
        <div className="flex items-center justify-center gap-8 perspective-1000">
          {getVisibleMovies().map((movie, index) => (
            <div
              key={movie.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                index === 1 ? "scale-110 z-20" : "scale-90 opacity-70"
              }`}
              style={{
                transform: index === 0 ? "rotateY(15deg)" : index === 2 ? "rotateY(-15deg)" : "rotateY(0deg)",
              }}
              onClick={() => onMovieClick(movie)}
            >
              <div className="relative w-80 h-[450px] rounded-lg overflow-hidden">
                <img
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-semibold">{movie.rating}/9</span>
                </div>

                {/* Time Badge */}
                {index === 1 && (
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded text-white text-sm font-semibold">
                    02:15:00
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-white">{movie.title}</h3>
                  <p className="text-primary text-sm font-semibold">Category: {movie.genre}</p>
                  <p className="text-white/80 text-sm line-clamp-2">{movie.synopsis}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-md">Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <div className="flex items-center">
            <ChevronRight className="w-16 h-16" strokeWidth={3} />
            <ChevronRight className="w-16 h-16 -ml-8" strokeWidth={3} />
          </div>
        </button>
      </div>
    </section>
  )
}
