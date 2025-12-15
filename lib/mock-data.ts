import type { Movie } from "@/types/movie"

// Mock data - Ready to be replaced with API calls
export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "El Origen",
    year: 2010,
    genre: "Ciencia Ficción",
    rating: 8.8,
    poster: "/inception-movie-poster.png",
    synopsis:
      "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños recibe la tarea inversa de plantar una idea en la mente de un CEO.",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy", "Ellen Page"],
    director: "Christopher Nolan",
    duration: 148,
    movie: "/Inception.mp4"
  },
  {
    id: 2,
    title: "Interestelar",
    year: 2014,
    genre: "Ciencia Ficción",
    rating: 8.6,
    poster: "/interstellar-movie-poster.jpg",
    synopsis:
      "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de garantizar la supervivencia de la humanidad.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    director: "Christopher Nolan",
    duration: 169,
    movie: "/Interstellar.mp4"
  },
  {
    id: 3,
    title: "El Caballero Oscuro",
    year: 2008,
    genre: "Acción",
    rating: 9.0,
    poster: "/dark-knight-poster.png",
    synopsis:
      "Cuando la amenaza conocida como el Joker emerge de su misterioso pasado, causa estragos y caos en la gente de Gotham.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    director: "Christopher Nolan",
    duration: 152,
    movie: "/dark-knight-movie.mp4"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Thriller",
    rating: 8.9,
    poster: "/pulp-fiction-poster.png",
    synopsis:
      "Las vidas de dos sicarios de la mafia, un boxeador, la esposa de un gánster y dos bandidos se entrelazan en cuatro historias de violencia y redención.",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    director: "Quentin Tarantino",
    duration: 154,
    movie: "/pulp-fiction-movie.mp4"
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    poster: "/forrest-gump-poster.png",
    synopsis:
      "Las presidencias de Kennedy y Johnson, la guerra de Vietnam, el escándalo Watergate y otros eventos históricos se desarrollan desde la perspectiva de un hombre de Alabama.",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    director: "Robert Zemeckis",
    duration: 142,
    movie: "/Forrest Gump.mp4"
  },
  {
    id: 6,
    title: "Matrix",
    year: 1999,
    genre: "Ciencia Ficción",
    rating: 8.7,
    poster: "/matrix-movie-poster.png",
    synopsis:
      "Un hacker descubre que su realidad es una simulación creada por máquinas y se une a una rebelión para liberar a la humanidad.",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    movie: "/Matrix.mp4"
  },
  {
    id: 7,
    title: "El Padrino",
    year: 1972,
    genre: "Drama",
    rating: 9.2,
    poster: "/classic-mob-poster.png",
    synopsis:
      "El patriarca envejecido de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    director: "Francis Ford Coppola",
    duration: 175,
    movie: "/The Godfather.mp4"
  },
  {
    id: 8,
    title: "Gladiador",
    year: 2000,
    genre: "Acción",
    rating: 8.5,
    poster: "/gladiator-movie-poster.jpg",
    synopsis:
      "Un ex general romano busca venganza contra el corrupto emperador que asesinó a su familia y lo envió a la esclavitud.",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed"],
    director: "Ridley Scott",
    duration: 155,
    movie: "/Gladiator.mp4"
  },
  {
    id: 9,
    title: "El Silencio de los Inocentes",
    year: 1991,
    genre: "Thriller",
    rating: 8.6,
    poster: "/silence-of-the-lambs-poster.png",
    synopsis:
      "Una joven cadete del FBI busca la ayuda de un asesino en serie encarcelado para atrapar a otro asesino en serie.",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"],
    director: "Jonathan Demme",
    duration: 118,
    movie: "/Silence of the Lambs.mp4"
  },
  {
    id: 10,
    title: "Titanic",
    year: 1997,
    genre: "Romance",
    rating: 7.9,
    poster: "/titanic-movie-poster.png",
    synopsis:
      "Un aristócrata de diecisiete años se enamora de un artista amable pero pobre a bordo del lujoso y desafortunado R.M.S. Titanic.",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
    director: "James Cameron",
    duration: 194,
    movie: "/Titanic.mp4"
  },
  {
    id: 11,
    title: "El Resplandor",
    year: 1980,
    genre: "Terror",
    rating: 8.4,
    poster: "/the-shining-movie-poster.jpg",
    synopsis:
      "Una familia se dirige a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.",
    cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd", "Scatman Crothers"],
    director: "Stanley Kubrick",
    duration: 146,
    movie: "/The Shining.mp4"
  },
  {
    id: 12,
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    rating: 8.0,
    poster: "/la-la-land-movie-poster.jpg",
    synopsis:
      "Mientras navegan por sus carreras en Los Ángeles, un pianista y una actriz se enamoran mientras intentan reconciliar sus aspiraciones para el futuro.",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"],
    director: "Damien Chazelle",
    duration: 128,
    movie: "/La La Land.mp4"
  },
  {
    id: 13,
    title: "Parásitos",
    year: 2019,
    genre: "Thriller",
    rating: 8.5,
    poster: "/parasite-movie-poster.png",
    synopsis:
      "La codicia y la discriminación de clases amenazan la relación simbiótica recién formada entre la rica familia Park y el clan Kim.",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    director: "Bong Joon-ho",
    duration: 132,
    movie: "/Parasite.mp4"
    },
  {
    id: 14,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Acción",
    rating: 8.4,
    poster: "/generic-superhero-team-poster.png",
    synopsis:
      "Después de los eventos devastadores de Infinity War, los Vengadores se reúnen una vez más para revertir las acciones de Thanos.",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    director: "Anthony Russo, Joe Russo",
    duration: 181,
    movie: "/Avengers: Endgame.mp4"
  },
  {
    id: 15,
    title: "El Gran Hotel Budapest",
    year: 2014,
    genre: "Comedia",
    rating: 8.1,
    poster: "/grand-budapest-hotel-movie-poster.jpg",
    synopsis:
      "Un conserje legendario de un famoso hotel europeo y su protegido se ven envueltos en el robo de una pintura renacentista.",
    cast: ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan", "Willem Dafoe"],
    director: "Wes Anderson",
    duration: 99,
    movie: "/The Grand Budapest Hotel.mp4"
  },
]

// API endpoints ready for integration
export const API_ENDPOINTS = {
  movies: "/api/movies",
  movieDetail: (id: number) => `/api/movies/${id}`,
  search: "/api/movies/search",
  filter: "/api/movies/filter",
}
