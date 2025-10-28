import type { Movie } from "@/types/movie"

// API service ready for REST API integration
export class MovieAPI {
  private baseUrl: string

  constructor(baseUrl = "/api") {
    this.baseUrl = baseUrl
  }

  async getMovies(): Promise<Movie[]> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/movies`)
    // return response.json()
    throw new Error("API not implemented yet")
  }

  async getMovieById(id: number): Promise<Movie> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/movies/${id}`)
    // return response.json()
    throw new Error("API not implemented yet")
  }

  async searchMovies(query: string): Promise<Movie[]> {
    // TODO: Replace with actual API call
    // const response = await fetch(`${this.baseUrl}/movies/search?q=${query}`)
    // return response.json()
    throw new Error("API not implemented yet")
  }

  async filterMovies(filters: {
    genre?: string
    year?: number
    rating?: number
  }): Promise<Movie[]> {
    // TODO: Replace with actual API call
    // const params = new URLSearchParams(filters as any)
    // const response = await fetch(`${this.baseUrl}/movies/filter?${params}`)
    // return response.json()
    throw new Error("API not implemented yet")
  }
}

export const movieAPI = new MovieAPI()
