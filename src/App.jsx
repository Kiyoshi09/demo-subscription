import "./App.scss";
import { Header } from "./organisms/Header";
import { BodyTop } from "./organisms/BodyTop";
import { BodyMiddle1 } from "./organisms/BodyMiddle1";
import { BodyMiddle2 } from "./organisms/BodyMiddle2";
import { BodyMiddle3 } from "./organisms/BodyMiddle3";
import { Footer } from "./organisms/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyTop />
      <BodyMiddle1 />
      <BodyMiddle2 />
      <BodyMiddle3 />
      <Footer />
    </div>
  );
}

export default App;
