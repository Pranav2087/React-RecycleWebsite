import React from 'react';
import './About.css';

function AboutComponent() {
  const handleSDHClick = () => {
    const SDH = document.querySelector('.SDH');
    SDH.classList.toggle('FZ');
    console.log("SDH clicked");
  };

  const handleSDHHClick = () => {
    const SDHH = document.querySelector('.SDHH');
    SDHH.classList.toggle('FZ');
    console.log("SDHH clicked");
  };

  const handleSDHHHClick = () => {
    const SDHHH = document.querySelector('.SDHHH');
    SDHHH.classList.toggle('FZ');
    console.log("SDHHH clicked");
  };

  return (
    <div>
      <div className="datuAbout">
        <h1>Brisbane E-Waste</h1>
        <h2>Solutions</h2>
      </div>
      <div className="WHAT">
        <div className="zuotu">
          <img src="./tu.png" alt="" />
        </div>
        <div className="youwen">
          <h3>WHAT?</h3>
          <p>Electronic waste, often referred to as e-waste, encompasses discarded electronic devices and components no longer in use. This category includes a wide range of items, from outdated computers and cell phones to monitors and printers. Improper disposal of e-waste can be detrimental to the environment, making it crucial to handle and recycle them responsibly rather than discarding them carelessly.</p>
          <p>Every year, Australians discard millions of electronic gadgets, including TVs, computers, and smartphones. Notably, e-waste is rapidly becoming the most expansive segment within the municipal waste stream.</p>
          <p>According to the Global E-Waste Monitor 2020, the volume of e-waste, which comprises discarded items powered by batteries or plugs such as computers and smartphones, surged by 21% over the five-year period leading up to 2019. The report further projects that by 2030, the amount of e-waste will nearly double compared to its 2014 levels, driven by increasing consumption, shorter product lifespans, and limited avenues for repair.</p>
        </div>
      </div>
      <div className="WHY">
        <h2>WHY?</h2>
        <div className="FlipBoxes">
          <div className="SDH" onClick={handleSDHClick}>
            <div className="zhengmian">
              <img src="./oldtv.png" alt="" />
              <div className="SDZ">
              <p>In Australia, the recycling rates for electronic devices are alarmingly low. <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>Less than 1%</span> of TVs and approximately <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>10%</span> of PCs and laptops are recycled.</p>
							<p><span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>23,000 tonnes</span> of CO2 emissions would be saved if half of the televisions discarded annually were recycled.</p>
              </div>
            </div>
            <div className="fanmian">
              <img src="./traffic.jpg" alt="" />
              <div className="FSDZ">
              <p>23,000 tonnes is equivalent in weight to about <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>16,429 cars</span>.</p>
							<p>The average car weighs around 1.4 tonnes.</p>
              </div>
            </div>
            <button id="dian"></button>
          </div>
          <div className="SDHH" onClick={handleSDHHClick}>
            <div className="zhengmian">
              <img src="./shouji.png" alt="" />
              <div className="SDZ">
							<p>Roughly <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>23 million Australian</span>s possess idle mobile phones stashed away in their homes. While a few are handed down, a significant number remain untouched, collecting dust. That’s <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>23 million devices</span> ripe for recycling and repurposing.</p>
              </div>
            </div>
            <div className="fanmian">
              <img src="./beizi.png" alt="" />
              <div className="FSDZ">
							<p>Around <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>10 tonnes</span> of copper and <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>300 kilograms</span> of silver are locked away in idle mobile phones throughout the nation. And that figure is from 2017, just think of the potential increase by now.</p>
              </div>
            </div>
            <button id="diann"></button>
          </div>
          <div className="SDHHH" onClick={handleSDHHHClick}>
            <div className="zhengmian">
              <img src="./diannao.png" alt="" />
              <div className="SDZ">
							<p>On average, a single Australian household contributes around <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>73 kilograms</span> of this e-waste. This figure encompasses discarded devices such as computers, televisions, mobile phones, printers, and other electronic gadgets.</p>
              </div>
            </div>
            <div className="fanmian">
              <img src="./ren.png" alt="" />
              <div className="FSDZ">
							<p><span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>A tonne</span> of e-waste recycled can save enough to <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>one household</span>power  for <span className="bold" style={{fontWeight:'bold', fontSize: '18px'}}>one year</span>.</p>
              </div>
            </div>
            <button id="diannn"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
