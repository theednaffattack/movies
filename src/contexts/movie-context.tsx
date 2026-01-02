import { createContext, useContext, useEffect, useState } from "react";
import type { Movie } from "../pages/home";

type ContextValue = {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
};

const MovieContext = createContext<ContextValue>();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }

    // // cleanup
    // return () => {
    //   "empty";
    // };
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(movie: Movie) {
    setFavorites((prev) => [...prev, movie]);
  }

  function removeFromFavorites(movieId: number) {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  }

  function isFavorite(movieId: number) {
    return favorites.some((movie) => movie.id === movieId);
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
