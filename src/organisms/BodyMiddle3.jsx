import { EmailInput } from "../atoms/EmailInput";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
//import "react-accessible-accordion/dist/fancy-example.css";

export const BodyMiddle3 = () => {
  const items = [
    {
      uuid: 1,
      heading: "What is Tealium Prime Video ?",
      content:
        "Tealium Prime Video is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      uuid: 2,
      heading: "How much Tealium Prime Video cost ?",
      content: "Watch Tealium Prime Video on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from JPY990 to JPY1,980 a month. No extra costs, no contracts."
    },
    {
      uuid: 3,
      heading: "Where can I watch ?",
      content:
        "Watch anywhere, anytime. Sign in with your Tealium Prime Video account to watch instantly on the web at tealiumlabs.com from your personal computer or on any internet-connected device that offers the Tealium Prime Video app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Tealium Prime Video with you anywhere."
    },
    {
      uuid: 4,
      heading: "How do I cancel ?",
      content: "Tealium Prime Video is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      uuid: 5,
      heading: "What can I watch on Tealium Prime Video ?",
      content: "Tealium Prime Video has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      uuid: 6,
      heading: "Is Tealium Prime Video good for kids ?",
      content:
        "The Tealium Prime Video Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
  ];

  return (
    <div className="body-middle3-container">
      <div className="title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq">
        <div className="spacer1"></div>
        <div className="accordition">
          <Accordion className="accordition-main" allowZeroExpanded>
            {items.map((item) => (
              <AccordionItem className="accordition-item" key={item.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordition-item-btn">{item.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordition-item-panel">{item.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="spacer2"></div>
      </div>
      <div className="registration">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <EmailInput />
      </div>
    </div>
  );
};
