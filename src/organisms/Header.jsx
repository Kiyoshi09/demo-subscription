import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const navigate = useNavigate();

  const onSignIn = () => {
    console.log("Sign in ....");
    navigate("/signin");
  };
  return (
    <div className="header-container">
      <div className="logo-area">
        <img src="https://kiyotaro.cloud/images/2021_Tealium_logo.png" alt="" />
      </div>
      <div className="signin-area">
        <LoginButton onClick={onSignIn}>Sign In</LoginButton>
      </div>
    </div>
  );
};

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
  left: 0;
  top: 50%;
  margin-top: -20px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
