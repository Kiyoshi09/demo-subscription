import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EmailInput = () => {
  const navigate = useNavigate();

  const onGetStarted = () => {
    const email = document.getElementById("email").value;
    console.log(`input email : ${email}`);

    if(validator.isEmail(email)) {
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
      <div className="main-input-email">
        <input id="email" name="email" type="email" placeholder="Email Address" />
        <label id="email_label">Email Address</label>
      </div>
      <div className="main-register-email">
        <RegisterButton onClick={onGetStarted}>Get Started</RegisterButton>
      </div>
      <ToastContainer />
    </>
  );
};


const RegisterButton = styled.button`
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
`;
