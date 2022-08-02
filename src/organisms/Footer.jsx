export const Footer = () => {
  const item1 = [
    {
      id: 11,
      title: "FAQ",
      url: "#"
    },
    {
      id: 12,
      title: "Investor Relations",
      url: "#"
    },
    {
      id: 13,
      title: "Ways to watch",
      url: "#"
    },
    {
      id: 14,
      title: "Corporate Information",
      url: "#"
    }
  ];

  const item2 = [
    {
      id: 21,
      title: "Help Center",
      url: "#"
    },
    {
      id: 22,
      title: "Jobs",
      url: "#"
    },
    {
      id: 23,
      title: "Terms of Use",
      url: "#"
    },
    {
      id: 24,
      title: "Contact us",
      url: "#"
    }
  ];

  const item3 = [
    {
      id: 31,
      title: "Account",
      url: "#"
    },
    {
      id: 32,
      title: "Redeem Gift Cards",
      url: "#"
    },
    {
      id: 33,
      title: "Privacy",
      url: "#"
    },
    {
      id: 34,
      title: "Act on Specified Commercial Transactions",
      url: "#"
    }
  ];

  const item4 = [
    {
      id: 41,
      title: "Media Center",
      url: "#"
    },
    {
      id: 42,
      title: "Buy Gift Cards",
      url: "#"
    },
    {
      id: 43,
      title: "Cookie Preference",
      url: "#"
    },
    {
      id: 44,
      title: "Speed Test",
      url: "#"
    }
  ];

  return (
    <div className="footer-container">
      <div className="spacer1"></div>
      <div className="footer-area1">
        {item1.map((item) => (
          <p key={item.id}>
            <a href={item.url}>{item.title}</a>
          </p>
        ))}
      </div>
      <div className="footer-area2">
        {item2.map((item) => (
          <p key={item.id}>
            <a href={item.url}>{item.title}</a>
          </p>
        ))}
      </div>
      <div className="footer-area3">
        {item3.map((item) => (
          <p key={item.id}>
            <a href={item.url}>{item.title}</a>
          </p>
        ))}
      </div>
      <div className="footer-area4">
        {item4.map((item) => (
          <p key={item.id}>
            <a href={item.url}>{item.title}</a>
          </p>
        ))}
      </div>
      <div className="spacer2"></div>
    </div>
  );
};
