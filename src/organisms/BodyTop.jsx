import styled from "styled-components";
import { EmailInput } from "../atoms/EmailInput";

export const BodyTop = () => {
  return (
    <div className="body-top-container">
      <div className="img-wrapper">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/d4d7caf2-171e-45ee-8bc4-d6e189600314/JP-en-20220606-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/d4d7caf2-171e-45ee-8bc4-d6e189600314/JP-en-20220606-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/d4d7caf2-171e-45ee-8bc4-d6e189600314/JP-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/d4d7caf2-171e-45ee-8bc4-d6e189600314/JP-en-20220606-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        ></img>
      </div>

      <div className="main-text1">
        <Textp size="4rem" center weight="500">
          Unlimited movies, TV
          <br />
          shows, and anime.
        </Textp>
      </div>
      <div className="main-text2">
        <Textp size="1.7rem" center>
          Watch anywhere. Cancel anytime.
        </Textp>
      </div>
      <div className="main-text3">
        <Textp center size="1.2rem">
          Ready to watch? Enter your email to create or restart your membership.
        </Textp>
      </div>
      <div>
        <EmailInput />
      </div>
    </div>
  );
};

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
