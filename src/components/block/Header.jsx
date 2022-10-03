import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    console.log("Sign in ....");
    navigate("/signin");
  };

  // Tealium Data Layer - Sample
  // let components = window.utag_data?.components || [];
  // components = [...components, "Header"];
  // window.utag_data = {...window.utag_data, components}

  return (
    <HeaderContainer>
      <HeaderContainerLogo>
        <img src="https://kiyotaro.cloud/images/2021_Tealium_logo.png" alt="" />
      </HeaderContainerLogo>
      <HeaderContainerSignIn>
        <LoginButton onClick={onButtonClick}>Sign In</LoginButton>
      </HeaderContainerSignIn>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  padding-top: 50px;
  z-index: 10;
`;


const HeaderContainerLogo = styled(HeaderContainer)`
    position: relative;
    flex-grow: 9;
    width: 100%;

    > img {
      position: absolute;
      width: 200px;
      height: 70px;
      top: 50%;
      margin-top: -35px;
      margin-left: 30px;
    }
`;

const HeaderContainerSignIn = styled(HeaderContainer)`
  flex-grow: 1;
  position: relative;
  right: 110px;
  margin-right: 70px;
`;


const LoginButton = styled.button`
  position: absolute;
  background-color: #008080;
  color: #fff;
  width: 100px;
  height: 40px;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  border: 0;
  border-radius: 5px;
  top: 50%;
  margin-top: -20px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
