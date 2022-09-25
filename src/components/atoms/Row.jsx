import styled from "styled-components";
import YouTube from "react-youtube";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react"
import { instance } from "../../utils/axios";
import { Votes } from "./Votes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const base_url = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [ movies, setMovies ] = useState([]);
  const [ trailerUrl, setTrailerUrl ] = useState("");
  const [ trailerMovie, setTrailerMovie ] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }

    fetchData();

  }, [fetchUrl])

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = async (movie) => {
    // Debug
    // console.log(`title : ${movie.title}`);
    // console.log(`vote average : ${movie.vote_average}`);
    // console.log(`vote count : ${movie.vote_count}`);

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
  }

  const onCloseTrailerArea = () => {
    setTrailerUrl("");
  }

  return (
    <RowArea>
      <h2>{ title }</h2>
      <RowPosters>
        {
          movies.map((movie, i) => {
            
            if(isLargeRow){
              return (
                <RowPosterLarge 
                  key={movie.id}
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                  onError={e => {e.target.style.display = 'none';} }
                  //onError={e => {e.target.src = 'https://www.kiyotaro.cloud/images/tealium-logo-small.jpeg';} }
                  onClick={ () => handleClick(movie) }
                />
              );
            }
            else {
              return (
                <RowPoster 
                  key={movie.id}
                  //src={`${base_url}${movie.backdrop_path}`}
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                  onError={e => {e.target.style.display = 'none';} }
                  //onError={e => {e.target.src = 'https://www.kiyotaro.cloud/images/tealium-logo-small.jpeg';} }
                  onClick={ () => handleClick(movie) }
                />
              );
            }

          })
        }
      </RowPosters>
      { 
        trailerUrl && 
        <TrailerArea>
          <div style={{width: "100%", textAlign: "center"}}>
            <YouTube videoId={ trailerUrl } opts={ opts } />
          </div>
          <div style={{width: "10%"}}></div>
          <div style={{width: "100%"}}>
            <div style={{display: "flex", alignItems: "center"}}>
              <h1 style={{color: "white", width: "100%"}}>{trailerMovie.title}</h1>
              <TrailerCloseButton onClick={onCloseTrailerArea}>
                <FontAwesomeIcon icon={faWindowClose} size="2x" style={{padding: "5px", color: "white"}}/>
              </TrailerCloseButton>
            </div>
            <ReleaseYear>{trailerMovie.release_date.split('-')[0]}</ReleaseYear>
            <div style={{display: "flex", alignItems: "center"}}>
              <ReactStars 
                size={30} 
                value={
                    (trailerMovie.vote_average - 5.0) < 0.0 ? trailerMovie.vote_average : trailerMovie.vote_average - 5.0
                  } 
                isHalf={true} 
                edit={false} 
              />
              <span style={{paddingLeft: "20px", fontSize: "1.2rem"}}>({trailerMovie.vote_count.toLocaleString()})</span>
            </div>
            <p style={{color: "white", paddingRight: "40px"}}>{trailerMovie.overview}</p>
            <Votes mid={trailerMovie.id} poster={trailerMovie.poster_path}/>
          </div>
        </TrailerArea>
      }
    </RowArea>
  );
}

const RowArea = styled.div`
  margin-left: 20px;
  color: #fff;
  position: relative;
  top: 820px;

  h2 {
    margin: 0 auto;
  }
`;

const RowPosters = styled.div`
  display: flex;
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
  width: 100%;
  max-height: 200px;
  margin: 10px;
  transition: transform 450ms;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

const RowPosterLarge = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 250px;
  margin: 10px;
  transition: transform 450ms;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
    transform: scale(1.20);
  }
`;

const TrailerArea = styled.div`
  display: flex;
`;

const ReleaseYear = styled.span`
  display: inline-block;
  width: 70px;
  color: #fff;
  text-align: center;
  border: 1.5px solid #fff;
`;

const TrailerCloseButton = styled.button`
  margin-right: 10%; 
  background-color: transparent; 
  border: 0 solid;

  &:hover {
    cursor: pointer;
  }
`;