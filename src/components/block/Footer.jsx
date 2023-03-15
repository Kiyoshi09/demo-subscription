import { memo } from 'react';
import styled from 'styled-components';
//import { updateTaggedTemplate } from 'typescript';

export const Footer = memo(({ top, height = "20vh" }) => {
  console.log("[Rendering] === Footer ==="); 

  const item1 = [
    {
      id: 11,
      title: "FAQ",
      url: "#",
      onClick: () => {},
    },
    {
      id: 12,
      title: "Investor Relations",
      url: "#",
      onClick: () => {},
    },
    {
      id: 13,
      title: "Ways to watch",
      url: "#",
      onClick: () => {},
    },
    {
      id: 14,
      title: "Corporate Information",
      url: "#",
      onClick: () => {},
    }
  ];

  const item2 = [
    {
      id: 21,
      title: "Help Center",
      url: "#",
      onClick: () => {},
    },
    {
      id: 22,
      title: "Jobs",
      url: "#",
      onClick: () => {},
    },
    {
      id: 23,
      title: "Terms of Use",
      url: "#",
      onClick: () => {},
    },
    {
      id: 24,
      title: "Contact us",
      url: "#",
      onClick: () => {},
    }
  ];

  const item3 = [
    {
      id: 31,
      title: "Account",
      url: "#",
      onClick: () => {},
    },
    {
      id: 32,
      title: "Redeem Gift Cards",
      url: "#",
      onClick: () => {},
    },
    {
      id: 33,
      title: "Privacy",
      url: "#",
      onClick: () => {},
    },
    {
      id: 34,
      title: "Transactions",
      url: "#",
      onClick: () => {},
    }
  ];

  const item4 = [
    {
      id: 41,
      title: "Media Center",
      url: "#",
      onClick: () => {},
    },
    {
      id: 42,
      title: "Buy Gift Cards",
      url: "#",
      onClick: () => {},
    },
    {
      id: 43,
      title: "Cookie Preference",
      url: "#",
      onClick: () => { window.utag && window.utag.gdpr && window.utag.gdpr.showExplicitConsent() },
    },
    {
      id: 44,
      title: "Speed Test",
      url: "#",
      onClick: () => {},
    }
  ];

  return (
    <FooterContainer top={top} height={height}>
      <Spacer1 />
      <FooterArea1>
        {item1.map((item) => (
          <p key={item.id}>
            <a href={item.url} onClick={item.onClick}>{item.title}</a>
          </p>
        ))}
      </FooterArea1>
      <FooterArea2>
        {item2.map((item) => (
          <p key={item.id}>
            <a href={item.url} onClick={item.onClick}>{item.title}</a>
          </p>
        ))}
      </FooterArea2>
      <FooterArea3>
        {item3.map((item) => (
          <p key={item.id}>
            <a href={item.url} onClick={item.onClick}>{item.title}</a>
          </p>
        ))}
      </FooterArea3>
      <FooterArea4>
        {item4.map((item) => (
          <p key={item.id}>
            <a href={item.url} onClick={item.onClick}>{item.title}</a>
          </p>
        ))}
      </FooterArea4>
      <Spacer2 />
    </FooterContainer>
  );
});

const FooterContainer = styled.div`
  display: flex;
  position: relative;
  height: ${ props => props.height };
  /* top: -100px; */
  top: ${ props => props.top };
  padding-top: 70px;

  p a {
    text-decoration: none;
    color: #333333;
  }
`;

const Spacer1 = styled.div`
  width: 100%;
`;

const Spacer2 = styled.div`
  width: 100%;
`;

const FooterArea1 = styled.div`
  width: 70%;
`;

const FooterArea2 = styled.div`
  width: 70%;
`;

const FooterArea3 = styled.div`
  width: 70%;
`;

const FooterArea4 = styled.div`
  width: 70%;
`;