import "./index.css";
import Logo from "./Media/ANK.svg";
import Discord from "./Media/discord.svg";
import App from "./Media/app.svg";
import Athena from "./Media/dogs.svg";
import Pattern from "./Media/bg_pattern.png";

function Landing() {

  function openTwitter() {
    window.open("https://twitter.com/intent/tweet?text=I%20have%20reserved%20my%20%24ANK%20airdrop%20from%20%40AnkryptXYZ%20%F0%9F%90%8D&");
  }
  
  return (
    <div className="wrap">
      <header>
        <div className="header-wrap">
          <img src={Logo}></img>

          <div className="social-header">
            <img src={Discord}></img>
            <img src={App}></img>
          </div>
        </div>
      </header>

      <main>
        <div className="landing">
          <h1><span>Airdrop Registration</span> <br/> is Open. </h1>
          <h4>Reserve your $ANK Airdrop</h4>
          <button onClick={openTwitter}>RESERVE</button>
        </div>
        <div className="hidden">
          <img src={Athena}></img>
        
        </div>
        <div className="image">
          <div className="interior">
            <img src={Athena}></img>
          </div>
          <div class="borders">
          s
          </div>
        </div>

      </main>
    </div>
  );
}

export default Landing;
