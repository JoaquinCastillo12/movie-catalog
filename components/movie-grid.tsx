"use client"

import { useMemo } from "react"
import { MovieCard } from "./movie-card"
import { mockMovies } from "@/lib/mock-data"
import type { Movie } from "@/types/movie"

interface MovieGridProps {
  searchQuery: string
  selectedGenre: string
  selectedYear: string
  selectedRating: string
  onMovieClick: (movie: Movie) => void
}

export function MovieGrid({ searchQuery, selectedGenre, selectedYear, selectedRating, onMovieClick }: MovieGridProps) {
  const filteredMovies = useMemo(() => {
    return mockMovies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesGenre = selectedGenre === "all" || movie.genre === selectedGenre
      const matchesYear = selectedYear === "all" || movie.year.toString() === selectedYear
      const matchesRating = selectedRating === "all" || movie.rating >= Number.parseFloat(selectedRating)

      return matchesSearch && matchesGenre && matchesYear && matchesRating
    })
  }, [searchQuery, selectedGenre, selectedYear, selectedRating])

  if (filteredMovies.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">No se encontraron películas</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
      ))}
    </div>
  )
}
