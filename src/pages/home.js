import LogoImage from "../images/logo.png";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__left">
          <img src={LogoImage} alt="Logo" />
          <div className="home__text">
            <p>lOREM iPSUM </p>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae nisl elit.{" "}
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas
              quam semper.
            </p>{" "}
            <p>
              Donec tempus cursus magna a feugiat. Morbi scelerisque euismod
              aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan
              cursus.
            </p>
            <p>
              Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac
              convallis. Ut eleifend sit amet justo eu laoreet.
            </p>
          </div>
        </div>
        <div className="home__right"></div>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
