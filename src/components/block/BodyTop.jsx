import styled from "styled-components";
import { EmailInput } from "../atoms/EmailInput";

export const BodyTop = () => {

  console.log("[Rendering] === BodyTop ===");

  return (
    <div className="body-top-container">
      <ImageWrapper>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/c86afdf7-1b44-4911-80fd-f97d0130fcd8/US-en-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/c86afdf7-1b44-4911-80fd-f97d0130fcd8/US-en-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/c86afdf7-1b44-4911-80fd-f97d0130fcd8/US-en-20221010-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/c86afdf7-1b44-4911-80fd-f97d0130fcd8/US-en-20221010-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""
        ></img>
      </ImageWrapper>

      <MainText1>
        <Textp size="4rem" center weight="500">
          Unlimited movies, TV
          <br />
          shows, and anime.
        </Textp>
      </MainText1>

      <MainText2>
        <Textp size="1.7rem" center>
          Watch anywhere. Cancel anytime.
        </Textp>
      </MainText2>

      <MainText3>
        <Textp center size="1.2rem">
          Ready to watch? Enter your email to create or restart your membership.
        </Textp>
      </MainText3>
      
      <div>
        <EmailInput top={"450px"}/>
      </div>
    </div>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  height: 693.368px;

  > img {
    position: absolute;
    width: 100%;
    height: 693px;
    object-fit: cover;
    top: -100px;
  }

  &:after {
    content: '';
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const MainText1 = styled.div`
  position: absolute;
  top: 150px;
  left: calc(50% - 350px);
  line-height: normal;
`;

const MainText2 = styled.div`
  position: absolute;
  top: 310px;
  left: calc(50% - 350px);
  line-height: normal;
`;

const MainText3 = styled.div`
  position: absolute;
  top: 370px;
  left: calc(50% - 350px);
  line-height: normal;
`;


const Textp = styled.p`
  display: inline-block;
  margin: 12px;
  width: ${(props) => props.width || "700px"};
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.size || "1rem"};
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-weight: ${(props) => props.weight || 400};
`;
