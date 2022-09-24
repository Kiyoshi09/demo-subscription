import styled from "styled-components";
import { useEffect, useState } from "react"
import { instance } from "../../utils/axios";
import { requests } from "../../utils/request";
import SearchMovieBox from './SearchMovieBox';

const base_url = "https://image.tmdb.org/t/p/original";

export const SearchedRow = ({ keyword }) => {
  const [ movies, setMovies ] = useState([]);
  const [ trailerUrl, setTrailerUrl ] = useState("");
  const [ trailerMovie, setTrailerMovie ] = useState({});

  useEffect(() => {
    const dupCheck = {};

    const fetchData = async () => {
      const request1 = await instance.get(requests.feachNetflixOriginals);
      const request2 = await instance.get(requests.feactActionMovies);
      const request3 = await instance.get(requests.feactComedyMovies);
      const request4 = await instance.get(requests.feactHorrorMovies);
      const request5 = await instance.get(requests.feactRomanceMovies);
      const request6 = await instance.get(requests.feactDocumentMovies);
      const request7 = await instance.get(requests.feactFamilyMovies);
      const request8 = await instance.get(requests.feactFantacyMovies);
      const request9 = await instance.get(requests.feactSFMovies);

      const reqs = [
        ...request1.data.results,
        ...request2.data.results,
        ...request3.data.results,
        ...request4.data.results,
        ...request5.data.results,
        ...request6.data.results,
        ...request7.data.results,
        ...request8.data.results,
        ...request9.data.results
      ];

      const r = reqs.filter((req) => {
        if(dupCheck[req.id]){
          return false;
        }
        else {
          dupCheck[req.id] = "exist";
          return true;
        }
      })

      setMovies(r);
      return r;
    }

    fetchData();
  }, [])


  const handleClick = async (movie) => {
    // Debug
    console.log(`title(Search) : ${movie.title}`);
    console.log(`vote average(Search) : ${movie.vote_average}`);
    console.log(`vote count(Search) : ${movie.vote_count}`);

    setTrailerMovie(movie);

    if(trailerUrl) {
      setTrailerUrl("");
    }
    else {
      let _trailerurl = await instance.get(
        `/movie/${movie.id}/videos?api_key=e647ed11f1c3ffb1522657bb593ee4bb&language=en-US`
      );
      //setTrailerUrl(_trailerurl.data.results[0]?.key)
      setTrailerUrl(_trailerurl.data.results[0]?.key || "dummy" )
    }

    console.log(`trailerUrl : ${trailerUrl}`);
  }

  const onClose = async () => {
    console.log(`Close....`);
    setTrailerUrl("");
  }

  return (
    <RowArea>
      { 
        trailerUrl && 
        <MovieBoxBackground>
          <SearchMovieBox movie={trailerMovie} trailerUrl={trailerUrl} onClose={onClose} />
        </MovieBoxBackground>
      }
      <RowPosters>
        {
          movies.map((movie, i) => {
            //console.log(`movie : ${JSON.stringify(movie)}`)
            // console.log(`movie title : ${movie.title}`)

            if(movie.title.toLowerCase().indexOf(keyword.toLowerCase()) === -1
            && movie.overview.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
              return (<></>);
            }

            return (
              <RowPoster 
                key={movie.id}
                //src={`${base_url}${movie.backdrop_path}`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                onError={e => { e.target.style.display = 'none'; } }
                onClick={ () => handleClick(movie) }
              />
            );
          })
        }
      </RowPosters>
    </RowArea>
  );
}

const RowArea = styled.div`
  margin-left: 20px;
  color: #fff;
  position: relative;
  top: 150px;

  h2 {
    margin: 0 auto;
  }
`;

const RowPosters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;

  &::-webkit-scrollbar {
      display: none;
    }
`;

const RowPoster = styled.img`
  object-fit: contain;
  max-height: 350px;
  margin: 10px;
  transition: transform 450ms;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.10);
  }
`;

const MovieBoxBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 90;
`;