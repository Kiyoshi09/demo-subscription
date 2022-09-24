import styled from 'styled-components';

export const BodyMiddle1 = () => {
  return (
    <BoddyMiddle1Container>
      <Spacer1 />
      <MessageContainer>
        <h1>Enjoy on your TV.</h1>
        <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
      </MessageContainer>
      <ImageContainer>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        <AnimationContainer>
          <video className="video" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-jp-0819.m4v" autoPlay muted loop></video>
        </AnimationContainer>
      </ImageContainer>
      <Spacer2 />
    </BoddyMiddle1Container>
  );
};

const BoddyMiddle1Container = styled.div`
  display: flex;
  position: relative;
  top: -100px;
  border-top: 0.5rem solid #222;
  border-bottom: 0.5rem solid #222;
  height: 466.363px;
  align-items: center;
  justify-content: center;

`;

const Spacer1 = styled.div`
  width: 70%;
`;

const MessageContainer = styled.div`
  position: relative;
  color: #fff;
  width: 100%;

  > h1 {
    font-size: 3rem;
  }

  > h2 {
    font-size: 1.4rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  color: #fff;
  width: 100%;
  padding-left: 60px;

  > img {
    position: relative;
    width: 500px;
    z-index: 1;    
  }
`;

const AnimationContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 118px;

  > video {
    width: 390px;
  }
`;

const Spacer2 = styled.div`
  width: 70%;
`;