//import { useState } from 'react';
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const Registration = () => {
  const location = useLocation();
  const email = location.state.email
  //const [ data, setData ] = useState( location.state )

  return (
    <RegistrationArea>
      Registration page : { email }
    </RegistrationArea>
  );
}

const RegistrationArea = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;