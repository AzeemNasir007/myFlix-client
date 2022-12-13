import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Top Gun: Maverick",
      description: "Maverick leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
      director: "Joseph Kosinski",
      genre: "Action"
    },
    {
      id: 2,
      title: "Ford v Ferrari",
      description: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_FMjpg_UX1000_.jpg",
      director: "James Mangold",
      genre: "Drama"
    },
    {
      id: 3,
      title: "Unbroken",
      description: "Olympian Louis Zamperini spends a harrowing 47 days in a raft with two fellow crewmen before he's caught by the Japanese navy and sent to a prisoner-of-war camp.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTY3ODg2OTgyOF5BMl5BanBnXkFtZTgwODk1OTAwMzE@._V1_FMjpg_UX1000_.jpg",
      director: "Angelina Jolie",
      genre: "Biography"
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>

  );
};