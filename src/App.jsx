import "./App.scss";
import { Header } from "./components/block/Header";
import { BodyTop } from "./components/block/BodyTop";
import { BodyMiddle1 } from "./components/block/BodyMiddle1";
import { BodyMiddle2 } from "./components/block/BodyMiddle2";
import { BodyMiddle3 } from "./components/block/BodyMiddle3";
import { Footer } from "./components/block/Footer";

const App = () => {
  // Tealium Data Layer (Sample)
  // let components = window.utag_data?.components || [];
  // components = [...components, "App"];
  // window.utag_data = {...window.utag_data, components}

  return (
    <div className="App">
      <Header />
      <BodyTop />
      <BodyMiddle1 />
      <BodyMiddle2 />
      <BodyMiddle3 />
      <Footer top="-100px" />
    </div>
  );
}

export default App;
