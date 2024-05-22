import { useEffect, useState } from "react";
import "./App.css";
import {FacebookShareButton,  WhatsappShareButton,  LinkedinShareButton} from "react-share";
import {FacebookIcon,WhatsappIcon,LinkedinIcon } from "react-share";

function App() {
  const [advice, setAdvice] = useState("");
 const shareUrl=window.location.href
  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const response = await data.json();
    const { advice } = response.slip;
    setAdvice(advice);
  };
  return (
    <>
      <div className="app">
        <div className="card">
          <h1 style={{height:"20vh", textAlign:"center"}}>{advice}</h1>
          <button
            onClick={() => {
              fetchAdvice();
            }}
            className="bg-[#451a03] hover:bg-[#431407] text-whitesmoke font-semibold hover:text-white py-2 px-4 border border-[#431407] hover:border-transparent rounded"
          >
            Give me Advice!
          </button>
          <h2>Love Random Advice App? Share it with your friends!"</h2>
          <div className="icons">
              <FacebookShareButton url={shareUrl}  contentToShare={advice}   quotes={advice} >
                <FacebookIcon className="iconsize" size={32} round={true}/>
              </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon className="iconsize" size={32} round={true}/>
              </WhatsappShareButton>
              <LinkedinShareButton url={shareUrl} text={advice} >
                <LinkedinIcon className="iconsize" size={32} round={true}/>
              </LinkedinShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
