export interface Movie {
  id: number
  title: string
  year: number
  genre: string
  rating: number
  poster: string
  synopsis: string
  cast: string[]
  director: string
  duration: number
  trailer?: string
}
