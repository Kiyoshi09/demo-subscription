import styled from 'styled-components';
import { useLayoutEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { instance } from "../../utils/axios";
import { requests } from "../../utils/request";
import MainMovieBox from './MainMovieBox';

export const Banner = () => {
  console.log("[Rendering] === Banner ==="); 

  const [ movie, setMovie ] = useState({});
  const [ trailerUrl, setTrailerUrl ] = useState("");

  const [ isPlaying, setIsPlaying ] = useState(false);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.feachNetflixOriginals);
      //console.log(`Banner results: ${JSON.stringify(request.data.results)}`);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, [])

  const truncate = (str, n) => {
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    }
  }

  const onPlayMovie = async (movie) => {
    console.log(`Open....`);
    setIsPlaying(true);

    let trailerurl = await instance.get(
      `/movie/${movie.id}/videos?api_key=e647ed11f1c3ffb1522657bb593ee4bb&language=en-US`
    );
    setTrailerUrl(trailerurl.data.results[0]?.key)
  }

  const onClickMyList = async (movie) => {
    toast("🥹 sorry but My List is under construction...", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
  
  const onClose = async () => {
    console.log(`Close....`);
    setTrailerUrl("");
    setIsPlaying(false);
  }

  return (
    <BannerHeader url={movie?.backdrop_path}>
      <BannerContents>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.orignal_name}
        </BannerTitle>
        <div>
          <BannerButton onClick={ () => onPlayMovie(movie) }>Play</BannerButton>
          <BannerButton onClick={ () => onClickMyList(movie) }>My List</BannerButton>
          <ToastContainer />
        </div>
        <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>

        {
          isPlaying &&
          <MainMovieBox movie={movie} trailerUrl={trailerUrl} onClose={onClose} />
        }

      </BannerContents>

      <BannerFadeBottom />
    </BannerHeader>
  );
}

const BannerHeader = styled.header`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  color: #fff;
  object-fit: cover;
  width: 100%;
  height: 900px;
  background-size: cover;
  background-image: ${props => props.url && `url(https://image.tmdb.org/t/p/original${props.url})`};
  background-position: "center center";
`;

const BannerContents = styled.div`
  color: #fff;
  object-fit: contain;
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const BannerTitle = styled.h1`
  color: #fff;
  object-fit: contain;
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const BannerDescription = styled.h1`
  color: #fff;
  object-fit: contain;
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1.4rem;
  max-width: 360px;
  height: 80px;
`;

const BannerFadeBottom = styled.div`
  color: #fff;
  object-fit: contain;
  height: 720px;
  background-image: linear-gradient(180deg,
      transparent,
      rgba(37, 37, 37, 0.41),
      #111);
`;
