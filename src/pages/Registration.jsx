import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { MyAuthenticator } from "../components/atoms/MyAuthenticator";

export const Registration = () => {
  console.log("[Rendering] === Registration ==="); 

  const location = useLocation();
  const email = location.state?.email

  return (
    <RegistrationArea>
      <MyAuthenticator initialState="signUp" email={email}>
        {/* <div>
          <p> You just created your account : { email } </p>
        </div> */}

        <Navigate replace to="/moviemain?from=signup" />

      </MyAuthenticator>
    </RegistrationArea>
  );
}

const RegistrationArea = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;