"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react"
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
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(mockMovies)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  useEffect(() => {
    let filtered = mockMovies

    if (searchQuery.trim()) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    if (selectedGenre !== "all") {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre)
    }
    if (selectedYear !== "all") {
      filtered = filtered.filter((movie) => movie.year.toString() === selectedYear)
    }
    if (selectedRating !== "all") {
      const minRating = Number.parseInt(selectedRating.replace("+", ""))
      filtered = filtered.filter((movie) => movie.rating >= minRating)
    }

    setFilteredMovies(filtered)
  }, [searchQuery, selectedGenre, selectedYear, selectedRating])

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    container?.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)
    return () => {
      container?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [filteredMovies])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = clientWidth * 0.85
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  if (filteredMovies.length === 0) {
    return (
      <section className="space-y-4 py-8">
        <div className="px-4 md:px-12">
          <h2 className="text-2xl font-semibold text-white mb-1">{title}</h2>
          <p className="text-white/60 text-sm">{description}</p>
        </div>
        <div className="text-center py-12">
          <p className="text-white/60">No se encontraron películas.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="group/section relative space-y-4 py-8">
      {/* Header */}
      <div className="px-4 md:px-12">
        <h2 className="text-3xl font-bold text-white mb-1 hover:text-neon-purple transition-colors cursor-pointer inline-flex items-center gap-2">
          {title}
          <ChevronRight className="w-6 h-6 opacity-0 group-hover/section:opacity-100 transition-opacity text-neon-purple" />
        </h2>
        <p className="text-white/60 text-sm max-w-2xl">{description}</p>
      </div>

      {/* Carousel */}
      <div className="relative group/carousel">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-40 w-16 bg-gradient-to-r from-black via-black/90 to-transparent flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:w-20"
          >
            <ChevronLeft className="w-12 h-12 text-white drop-shadow-2xl" />
          </button>
        )}

        {/* Scrollable Movies */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto px-4 md:px-12 pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-[160px] md:w-[200px] h-[240px] md:h-[300px] relative group/card snap-start"
              onClick={() => onMovieClick(movie)}
            >
              {/* Base Poster */}
              <div className="absolute inset-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 group-hover/card:z-50">
                <img
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover/card:brightness-125 group-hover/card:scale-110"
                  loading="lazy"
                />

                {/* Neon Border + Glow on Hover */}
                <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-500 
                  group-hover/card:border-neon-purple group-hover/card:shadow-[0_0_30px_rgba(189,0,255,0.6)] 
                  group-hover/card:ring-4 group-hover/card:ring-neon-purple/30"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-lg leading-tight mb-2 drop-shadow-lg">
                    {movie.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs mb-3">
                    <span className="text-neon-green font-bold">{movie.rating * 10}% Match</span>
                    <span className="text-gray-300">{movie.year}</span>
                    <span className="text-gray-400 border border-gray-500 px-1.5 py-0.5 rounded text-[10px]">HD</span>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-white text-black p-3 rounded-full hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-lg hover:shadow-neon-purple/50">
                      <Play className="w-5 h-5 fill-current" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full border border-white/30 hover:border-neon-purple hover:bg-neon-purple/20 transition-all duration-300">
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-40 w-16 bg-gradient-to-l from-black via-black/90 to-transparent flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:w-20"
          >
            <ChevronRight className="w-12 h-12 text-white drop-shadow-2xl" />
          </button>
        )}
      </div>
    </section>
  )
}