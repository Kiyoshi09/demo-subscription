import styled from 'styled-components';
import YouTube from "react-youtube";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Votes } from "./Votes";

const SearchMovieBox = ({movie, trailerUrl, onClose}) => {

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    <Wrapper>
      <div style={{display: "flex", justifyContent: "flex-end" }}>
        <SearchedMovieCloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faWindowClose} size="2x" style={{padding: "5px", color: "white"}}/>
        </SearchedMovieCloseButton>
      </div>
      <TrailerArea>
          <div style={{width: "100%", textAlign: "center", paddingTop: "15px"}}>
            <YouTube videoId={ trailerUrl } opts={ opts } />
          </div>
          <div style={{width: "10%"}}></div>
          <div style={{width: "80%"}}>
            <h1 style={{color: "white", marginTop: "0px"}}>{movie.title}</h1>
            <ReleaseYear>{movie.release_date.split('-')[0]}</ReleaseYear>
            <div style={{display: "flex", alignItems: "center"}}>
              <ReactStars 
                size={30} 
                value={
                    (movie.vote_average - 5.0) < 0.0 ? movie.vote_average : movie.vote_average - 5.0
                  } 
                isHalf={true} 
                edit={false} 
              />
              <span style={{paddingLeft: "20px", fontSize: "1.2rem"}}>({movie.vote_count.toLocaleString()})</span>
            </div>
            <p style={{color: "white", paddingRight: "40px"}}>{movie.overview}</p>
            <Votes />
          </div>
        </TrailerArea>
    </Wrapper>
  );
}

// const Wrapper = styled.div`
//   position: relative;
//   top: 100px;
//   left: 7%;
//   width: 80%;
//   height: 600px;
//   background-color: black;
// `;

const Wrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 10%;
  width: 80%;
  height: 600px;
  background-color: black;
  z-index: 100;
`;

const TrailerArea = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
`;

const ReleaseYear = styled.span`
  display: inline-block;
  width: 70px;
  color: #fff;
  text-align: center;
  border: 1.5px solid #fff;
`;

const SearchedMovieCloseButton = styled.button`
  background-color: transparent; 
  border: 0 solid;

  &:hover {
    cursor: pointer;
  }
`;

export default SearchMovieBox;