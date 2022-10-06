import { useState } from "react"
import { Banner } from "../components/atoms/Banner";
import { Row } from "../components/atoms/Row";
import { SearchedRow } from "../components/atoms/SearchedRow";
import { Footer } from "../components/block/Footer";
import { HeaderMovie } from "../components/block/HeaderMovie";
import { requests } from "../utils/request";

export const MovieMain = () => {
  console.log("[Rendering] === MovieMain ===");

  const [ isSearching, setIsSearching ] = useState(0);
  const [ keyword, setKeyword ] = useState("");

  return (
    <>
      <HeaderMovie SearchMode={setIsSearching} SearchKeyword={setKeyword} />
      {
        isSearching &&
        <>
          <SearchedRow keyword={keyword} />
        </>
      }
      {
        isSearching ||
        <>
          <Banner />
          <Row title="Tealium Prime Video ORIGINALS" fetchUrl={requests.feachNetflixOriginals} isLargeRow/>
          <Row title="Top Rated" fetchUrl={requests.feactTopRated}/>
          <Row title="Action Movies" fetchUrl={requests.feactActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies}/>
          <Row title="Fantacy" fetchUrl={requests.feactFantacyMovies}/>
          <Row title="Science Fiction" fetchUrl={requests.feactSFMovies}/>
        </>
      }
      
      <Footer top="790px" height="30vh"/>
    </>
  );
}