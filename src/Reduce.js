import React, { useState } from 'react';
import "./Reduce.css";

const pages = [
  {
    title: "Extend the life of e-products by",
    content: [
      "Unplugging chargers once devices are charged.",
      "Turning off appliances on the wall when they are not in use.",
      "Storing products in accordance with instructions.",
      "Servicing and cleaning products regularly.",
    ],
  },
  {
    title: "Borrow, hire or share e-products",
    content: [
      "Consider dropping by the Brisbane Tool Library to lend power tools and various equipment rather than purchasing them brand new.",
      "Think about renting or leasing electronic items like televisions, computers, and washing machines instead of investing in new ones.",
      "Before making a new purchase, it might be worthwhile to see if family, friends, or neighbors have the gadgets, tools, or equipment you need and are willing to lend them to you.",
    ],
  },
  {
    title: "Buy less",
    content: [
      "Opt for cloud-based solutions to store your data, diminishing the necessity for physical storage devices.",
      "Embrace the ‘less is more’ approach. If you must buy, prioritize versatile, high-quality items over inexpensive ones that may not be durable.",
      "Support local. Whenever feasible, opt for Australian-made electronic products. This not only reduces carbon emissions from imports but also ensures easier access to local service and repair centers.",
    ],
  },
];

function Reduce() {
  let [index, setIndex] = useState(0);
  const handleLeftArrowClick = () => {
    // Implement logic for moving to the previous page
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(pages.length - 1);
    }
  };

  const handleRightArrowClick = () => {
    // Implement logic for moving to the next page
    setIndex((index + 1) % pages.length);
  };

  const changePilotLamp = (i)=>{
   setIndex(i);
  }

  return (
    <div className='body1'>
      <div className="datu">
        <div className="wenzi">
          <h2 style={{textAlign:"left"}}>Reduce</h2>
          <p>
          Minimizing the technology you buy is the most effective method to curb e-waste. The swift evolution of technology, coupled with increasing disposable incomes and the easy accessibility of electronic goods, has heightened concerns about e-waste. Take a moment to tally the electronic items in your home. Consider the savings you could achieve by limiting the electronics you own.
          </p>
        </div>
      </div>
      <div className="card" >
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

export default Reduce;
