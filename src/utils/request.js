const API_KEY = "e647ed11f1c3ffb1522657bb593ee4bb";

export const requests = {
  // feachTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  // feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // feactTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  // feactActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  // feactComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  // feactHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  // feactRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  // feactDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`

  feachTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `/movie/top_rated?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  feactRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  feactFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  feactFantacyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  feactSFMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
};
