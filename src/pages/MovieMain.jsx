import { useEffect, useState } from "react"
import { Banner } from "../components/atoms/Banner";
import { Row } from "../components/atoms/Row";
import { SearchedRow } from "../components/atoms/SearchedRow";
import { Footer } from "../components/block/Footer";
import { HeaderMovie } from "../components/block/HeaderMovie";
import { requests } from "../utils/request";
import { Auth } from 'aws-amplify';

const titleMap = {
  28: "Action Movies",
  35: "Comedy Movies",
  9648: "Horror Movies",
  14: "Fantacy",
  878: "Science Fiction",
};

const feactMap = {
  28: "feactActionMovies",
  35: "feactComedyMovies",
  9648: "feactHorrorMovies",
  14: "feactFantacyMovies",
  878: "feactSFMovies",
};

export const MovieMain = () => {
  console.log("[Rendering] === MovieMain ===");

  const [ isSearching, setIsSearching ] = useState(0);
  const [ keyword, setKeyword ] = useState("");
  const [ genreOrder, setGenreOrder ] = useState([28, 35, 9648, 14, 878]);

  // function that allows the outside to update the genre order
  window.updateGenreOrder = (a) => {
    if(a.length === 5 
        && a.includes(28) && a.includes(35) && a.includes(9648) && a.includes(14) && a.includes(878)) {
      setGenreOrder(a);
    }
  }

  useEffect(() => {
    const getCurrentUserInfo = async () => {
      const userInfo = await Auth.currentUserInfo();
      console.log(`userInfo : ${JSON.stringify(userInfo)}`);
      const email = userInfo.attributes?.email;

      if(email) {
        window.utag && 
          window.utag.link({
            "tealium_event": "authenticated",
            "email": email,
          });

        sessionStorage.setItem("tealdemo-st-email", email);
      }
    }

    getCurrentUserInfo();
  }, [])

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
          {/* <Row title="Action Movies" fetchUrl={requests.feactActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies}/>
          <Row title="Fantacy" fetchUrl={requests.feactFantacyMovies}/>
          <Row title="Science Fiction" fetchUrl={requests.feactSFMovies}/> */}
          {
            genreOrder.map((g) => (
              <Row key={g} title={titleMap[g]} fetchUrl={requests[feactMap[g]]} />
            ))
          }
        </>
      }
      
      <Footer top="790px" height="30vh"/>
    </>
  );
}