import GlobeImage from "../images/globe.png";
import LogoImage from "../images/logo.png";
import VolumeBar from "../components/Volumebar";

import GetStarted from "../components/GetStarted";

function App() {
  return (
    <div className="get-started">
      <div className="get-started__container">
        <div className="get-started__left">
          <div className="get-started__text">
            <h1 className="get-started__title">Lorem Ipsum</h1>
            <img src={LogoImage} alt="Logo" />
            <GetStarted />
          </div>
        </div>
        <div className="get-started__right">
          <img className="get-started__globe" src={GlobeImage} alt="Globe" />
        </div>
      </div>
      <VolumeBar />
    </div>
  );
}

export default App;
