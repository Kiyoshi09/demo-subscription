/*eslint no-unused-vars: 0, array-callback-return: 0 */
import styled from "styled-components";
import YouTube from "react-youtube";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react"
import { instance } from "../../utils/axios";
import { Votes } from "./Votes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { memo } from "react";

const base_url = "https://image.tmdb.org/t/p/original";

export const Row = memo(({ title, fetchUrl, isLargeRow }) => {
  console.log("[Rendering] === Row ==="); 

  const [ movies, setMovies ] = useState([]);
  const [ trailerUrl, setTrailerUrl ] = useState("");
  const [ trailerMovie, setTrailerMovie ] = useState({});

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    }
  }

  let nInterval = 0;
  let playerCheckInterval;

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }

    fetchData();

  }, [fetchUrl])

  const handleClick = async (movie) => {
    // Debug
    // console.log(`vote average : ${movie.vote_average}`);
    // console.log(`vote count : ${movie.vote_count}`);
    console.log(`movie object : ${JSON.stringify(movie)}`);

    // Stop tracking the current playing movie
    clearInterval(playerCheckInterval);

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
    clearInterval(playerCheckInterval);
  }

  const onReady = (movie) => {
    console.log(`[${movie.title}] : onReady`);
  }

  const onPlay = (movie) => {
    // window.utag && 
    //   window.utag.link({
    //     "tealium_event": "play_movie",
    //     "movieid": movie.id,
    //     "title": movie.title,
    //     "genre_ids": movie.genre_ids,
    //   });
  }

  const onPause = (movie) => {
    // window.utag && 
    //   window.utag.link({
    //     "tealium_event": "pause_movie",
    //     "movieid": movie.id,
    //     "title": movie.title,
    //     "genre_ids": movie.genre_ids,
    //   });
  }

  const onEnd = (movie) => {
    console.log(`[${movie.title}] : onEnd`);

    // window.utag && 
    //   window.utag.link({
    //     "tealium_event": "end_movie",
    //     "movieid": movie.id,
    //     "title": movie.title,
    //     "genre_ids": movie.genre_ids,
    //   });
  }

  const onStateChange = (e, movie) => {

    switch (e.data) {
      case 0: // ended
        clearInterval(playerCheckInterval);
        nInterval = 0;

        break;

      case 1: // playing
        playerCheckInterval = setInterval(() => {
          nInterval++;

          if(nInterval % 10.0 === 0.0){

          //   window.utag && 
          //     window.utag.link({
          //       "tealium_event": "milestone_movie",
          //       "movieid": movie.id,
          //       "title": movie.title,
          //       "genre_ids": movie.genre_ids,
          //       "milestone": nInterval,
          //     });
          }

        }, 1000);
        break;

      case 2: // paused
        clearInterval(playerCheckInterval);
        break;
    
      default:
        break;
    }

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
            <YouTube 
              videoId={ trailerUrl } 
              opts={ opts } 
              onReady={() => onReady(trailerMovie)}
              onPlay={() => onPlay(trailerMovie)}
              onPause={() => onPause(trailerMovie)}
              onEnd={() => onEnd(trailerMovie)}
              onStateChange={(e) => onStateChange(e, trailerMovie)}
            />
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
});

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