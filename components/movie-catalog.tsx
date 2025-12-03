"use client"

import { useState } from "react"
import Navbar from "./navbar"

import { HeroSection } from "./hero-section"
// import { Navigation } from "./navigation"
import { SearchBar } from "./search-bar"
import { MovieFilters } from "./movie-filters"
import { MovieCarousel } from "./movie-carousel"
import { NewMoviesSection } from "./new-movies-section"
import { Footer } from "./footer"
import { MovieDetail } from "./movie-detail"
import type { Movie } from "@/types/movie"

import MatrixBackground from "./ui/matrix-background"

export function MovieCatalog() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedRating, setSelectedRating] = useState("all")

  return (
    <div className="min-h-screen relative">
      <MatrixBackground />
      <div className="relative z-10">
      <Navbar onSearch={setSearchQuery} />

      <section className="container mx-auto px-4 py-12 space-y-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <MovieFilters
          selectedGenre={selectedGenre}
          selectedYear={selectedYear}
          selectedRating={selectedRating}
          onGenreChange={setSelectedGenre}
          onYearChange={setSelectedYear}
          onRatingChange={setSelectedRating}
        />
      </section>

      <HeroSection />

      <main className="container mx-auto px-4 py-8 space-y-20 text-white/80 text-sm uppercase tracking-wider font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <MovieCarousel
          title="Movies Theaters"
          /* TODO: REPLACE GENERIC TEXT - Update category description */
          description="Explore the latest and greatest films currently showing in theaters near you. From action-packed blockbusters to heartwarming dramas, find your next cinematic experience."
          onMovieClick={setSelectedMovie}
          searchQuery={searchQuery}
          selectedGenre={selectedGenre}
          selectedYear={selectedYear}
          selectedRating={selectedRating}
        />

       <NewMoviesSection onMovieClick={setSelectedMovie} />
      </main>

      <Footer />

      {selectedMovie && <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
      </div>
    </div>
  )
}
