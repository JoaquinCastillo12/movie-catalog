"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MovieFiltersProps {
  selectedGenre: string
  selectedYear: string
  selectedRating: string
  onGenreChange: (value: string) => void
  onYearChange: (value: string) => void
  onRatingChange: (value: string) => void
}

export function MovieFilters({
  selectedGenre,
  selectedYear,
  selectedRating,
  onGenreChange,
  onYearChange,
  onRatingChange,
}: MovieFiltersProps) {
  const genres = ["all", "Acción", "Comedia", "Drama", "Ciencia Ficción", "Terror", "Romance", "Thriller"]
  const years = ["all", "2024", "2023", "2022", "2021", "2020", "2019", "2018"]
  const ratings = ["all", "9+", "8+", "7+", "6+"]

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Select value={selectedGenre} onValueChange={onGenreChange}>
        <SelectTrigger className="w-[200px] bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
          <SelectValue placeholder="Género" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1f2e] border-white/10">
          {genres.map((genre) => (
            <SelectItem key={genre} value={genre} className="text-white hover:bg-primary/20">
              {genre === "all" ? "Todos los géneros" : genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedYear} onValueChange={onYearChange}>
        <SelectTrigger className="w-[200px] bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
          <SelectValue placeholder="Año" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1f2e] border-white/10">
          {years.map((year) => (
            <SelectItem key={year} value={year} className="text-white hover:bg-primary/20">
              {year === "all" ? "Todos los años" : year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedRating} onValueChange={onRatingChange}>
        <SelectTrigger className="w-[200px] bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
          <SelectValue placeholder="Calificación" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1f2e] border-white/10">
          {ratings.map((rating) => (
            <SelectItem key={rating} value={rating} className="text-white hover:bg-primary/20">
              {rating === "all" ? "Todas las calificaciones" : rating}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
