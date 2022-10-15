/* eslint react-hooks/exhaustive-deps: 0 */
import App from "../../App";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import { Registration } from "../../pages/Registration";
import { SignIn } from "../../pages/SignIn";
import { MovieMain } from "../../pages/MovieMain";

export const TealiumTrackingRoutes = () => {
  let location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      //console.log(`=== TealiumTrackingRoutes useEffect utag : ${typeof window.utag}`);
      window.utag && window.utag.view({"path_name": location.pathname, ...window.utag_data});
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="registration" element={<Registration />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="moviemain" element={<MovieMain />} />
    </Routes>
  )
}