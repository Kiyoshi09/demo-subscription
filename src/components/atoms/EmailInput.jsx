import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EmailInput = ({ top }) => {
  console.log("[Rendering] === EmailInput ==="); 

  const navigate = useNavigate();

  const onGetStarted = () => {
    const email = document.getElementById("email").value;

    if(validator.isEmail(email)) {

      window.utag && 
          window.utag.link({
            "tealium_event": "get_started",
            "email": email,
          });

      navigate("/registration", { state: { email } });
    }
    else {
      toast.error("Please input a valid email", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <EmailInputContainer top={ top }>
        <input id="email" name="email" type="email" placeholder="Email Address" />
        <label id="email_label">Email Address</label>
      </EmailInputContainer>
      <RegisterButtonContainer  top={ top }>
        <button onClick={onGetStarted}>Get Started</button>
      </RegisterButtonContainer>
      <ToastContainer />
    </>
  );
};

const EmailInputContainer = styled.div`
  position: absolute;
  top: ${ props => props.top };
  left: calc(50% - 350px);

  input {
    position: relative;
    width: 550px;
    height: 60px;
    padding-left: 10px;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    border: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    &:invalid {
      border: 2.0px solid red;
    }

    &:focus {
      outline: 0;
    }

    &:focus+label {
      background: #008080;
      display: inline-block;
      left: 0;
      top: -19px;
      width: 20%;
      color: white;
      font-size: 70%;
      padding: 1px 6px;
      text-transform: uppercase;
      z-index: 2;
    }
  }

  label {
      position: relative;
      display: inline-block;
      left: calc(-100% + 150px);
      width: 150px;
      padding-left: 15px;
      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
      color: #999;
      z-index: -1;
      transition:
        color 0.2s,
        top 0.2s,
        bottom 0.2s,
        right 0.2s,
        left 0.2s;
    }
`;

const RegisterButtonContainer = styled.div`
  position: absolute;
  top: ${ props => props.top };
  left: calc(50% + 200px);

  > button {
    position: absolute;
    background-color: #008080;
    color: #fff;
    width: 170px;
    height: 60px;
    padding: 7px 17px;
    font-weight: 400;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    border: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
    &:focus {
      outline: 0;
    }
  }
`;