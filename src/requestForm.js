import React, { useState } from "react";
import "./requestForm.css";

function FormComponent() {
  const [zoneWeight, setZoneWeight] = useState([0, 0, 0]);
  const [zoneProgress, setZoneProgress] = useState([0, 0, 0]);
  const [selectedZone, setSelectedZone] = useState(1);

  const handleZoneButtonClick = (zone) => {
    setSelectedZone(zone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Display the progress bars for the selected zone based on the entered weight
    const weightInput = document.getElementById("weight-input");
    const weight = parseInt(weightInput.value);
  
    if (isNaN(weight) || weight < 1 || weight > 100) {
      alert("Please enter a valid weight between 1 and 100 KG.");
      return;
    }
  
    if (selectedZone !== null) {
      const updatedZoneWeight = [...zoneWeight];
      updatedZoneWeight[selectedZone - 1] += weight;
  
  
      setZoneWeight(updatedZoneWeight);
  
      if (updatedZoneWeight[selectedZone - 1] <= 400) {
        const updatedZoneProgress = [...zoneProgress];
        updatedZoneProgress[selectedZone - 1] =
          (updatedZoneWeight[selectedZone - 1] / 400) * 100;
        setZoneProgress(updatedZoneProgress);
      }
    } else {
      alert("Please select a zone before submitting.");
    }
  };
  
  const getZoneStatus = (zoneIndex) => {
    if (zoneWeight[zoneIndex] >= 400) {
      return `The Zone ${zoneIndex + 1} is now currently full and is awaiting collection`;
    } else {
      return `${zoneProgress[zoneIndex].toFixed(2)}%`;
    }
  };

  return (
    <main>
        <div className="datur">
        <div className="wenzir">
        Make a request to us to pick up your e-waste
        </div>
        <div className="container">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="firstName" >First Name</label>
                </div>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="contactNumber">Contact Number</label>
                </div>
              </div>
              <label for="zones" style={{marginRight:'10px'}}>Choose Your Zone:</label>
              <select
                name="zones"
                id="zones"
                style={{
                  width: '10%',
                  height: '40px',
                  border: 'none',
              }}
                onChange={(e) =>
                  handleZoneButtonClick(parseInt(e.target.value))
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div className="weight">
                Weight of e-waste, please write down a number between 1-100:
              </div>
              <div className="weight-input-container">
                <textarea
                  id="weight-input"
                  className="weight-textarea"
                  rows="1"
                  cols="3"
                ></textarea>
                KG
              </div>
              <div className="form-row">
                <div className="input-data textarea">
                  <textarea rows="8" cols="80"></textarea>
                  <div className="underline"></div>
                  <label htmlFor="message">
                    Anything else we need to know?
                  </label>
                  <div className="submit-btn">
                    <div className="input-data">
                      <div className="inner"></div>
                      <input type="submit" value="Submit" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="progress-container">
        Current Status
        <div className="progress-bars" style={{ color: "black" }}>
          ZONE 1:
          <div className="progress-bar">
            <div className="progress" style={{ width: `${zoneProgress[0]}%` }}>
            <span>{getZoneStatus(0)}</span>
            </div>
          </div>
          ZONE 2:
          <div className="progress-bar">
            <div className="progress" style={{ width: `${zoneProgress[1]}%` }}>
            <span>{getZoneStatus(1)}</span>
            </div>
          </div>
          ZONE 3:
          <div className="progress-bar">
            <div className="progress" style={{ width: `${zoneProgress[2]}%` }}>
            <span>{getZoneStatus(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FormComponent;
