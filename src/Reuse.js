import "./Reuse.css";
import React, { useState } from 'react';
function Reuse(){
  const pages = [
    {
      title: "Buy second-hand and refurbished working e-products from",
      content: [
        "Online marketplaces such as Facebook Marketplace, Gumtree or eBay.",
        "Amazon Renewed which offers quality, refurbished products that have been inspected and tested by qualified suppliers.",
        "Major retailers such as Dick Smith and JB Hi-Fi that offer refurbished, like-new and open-box products.",
        "Australian Computer Traders (ex-government computers and information technology products).",
      ],
    },
    {
      title: "Repair E-products",
      content: [
        "Contact the manufacturer or the purchase store to obtain advice on repair.",
        "Learn to fix e-products at iFixit.",
        "Visit a repair cafe for tools and advice.",
      ],
    }
  ];
  const [index, setIndex] = useState(0);
  const handleLeftArrowClick = () => {
    // Implement logic for moving to the previous page
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(pages.length - 1);
    }
  };

  const changePilotLamp = (i)=>{
   setIndex(i);
  }

  const handleRightArrowClick = () => {
    // Implement logic for moving to the next page
    setIndex((index + 1) % pages.length);
  };
  return (
    <div className="body1">
      <div className="datu">
        <div className="wenzi">
          <h2 style={{textAlign:"left"}}>Reuse</h2>
          <p>
            Prioritizing the reuse of items is a key strategy to combat the
            growing waste challenge. The surge in consumerism, coupled with the
            convenience of disposable products, has led to mounting concerns
            about landfill waste. Take a moment to look around your home. Think
            about how many items could be repurposed, or how much waste could be
            reduced by simply reusing what you already have. Reflect on the
            potential savings, both monetary and environmental, that could be
            gained by embracing a reuse-first mentality.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <button className="left-arrow" id="left-arrow" onClick={handleLeftArrowClick}>{'<'}</button>
          <div className="content">
            <div className="text">
              <h4 style={{textAlign:'-webkit-match-parent',fontSize:'20px',fontFamily:'Roboto',paddingLeft:'5%'}}>{pages[index].title}</h4>
              <ul>
                {pages[index].content.map((item, i) => (
                  <li key={i} style={{fontSize:'14px',padding:'7px'}}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pilotLamp-box">
            {pages.map((item, i) => (
               <span onClick={()=>{changePilotLamp(i)}} className={`pilotLamp-span ${i === index ?'bright':''}`} key={i}>{i+1}</span>
             ))
             }
            </div>
          </div>
          <button className="right-arrow" id="right-arrow" onClick={handleRightArrowClick}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}
export default Reuse;
