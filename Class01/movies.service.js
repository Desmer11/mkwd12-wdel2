// NAMED EXPORT
export const filterMoviesByRating = (listOfMovies) => {
  const filteredMovies = listOfMovies.filter((movie) => movie.rating > 3);

  return filteredMovies;
};
