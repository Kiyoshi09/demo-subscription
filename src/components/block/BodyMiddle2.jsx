import styled from 'styled-components';

export const BodyMiddle2 = () => {
  console.log("[Rendering] === BodyMiddle2 ===");

  return (
    <BoddyMiddle2Container>
      <Spacer1 />
      <ImageContainer>
        <img src="https://occ-0-3188-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="" />
      </ImageContainer>
      <MessageContainer>
        <h1>Create profiles for kids.</h1>
        <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
      </MessageContainer>
      <Spacer2 />
    </BoddyMiddle2Container>
  );
};

const BoddyMiddle2Container = styled.div`
  display: flex;
  position: relative;
  top: -100px;
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
  padding: 0 10px;

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

  > img {
    position: relative;
    width: 500px;
    z-index: 1;
  }
`;

const Spacer2 = styled.div`
  width: 70%;
`;