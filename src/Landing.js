import "./index.css";
import Logo from "./Media/tet.svg";
import Discord from "./Media/discord.svg";
import App from "./Media/app.svg";
import Athena from "./Media/dogs.svg";
import Pattern from "./Media/bg_pattern.png";

function Landing() {

  function openTwitter() {
    window.open("https://twitter.com/intent/tweet?text=This%20is%20my%20proof%20of%20participation%20for%20%40PaddasFinance%0D%0A%0D%0AThe%20first%20AutoStaking%20protocol%20on%20%23zkSync%F0%9F%94%B1");
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
          <h4>Reserve your $KEIRO Airdrop</h4>
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
