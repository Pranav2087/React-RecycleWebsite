import React from 'react';
import './Measures.css';
import {Link} from 'react-router-dom';
function measuresComponent() {
  return (
    <div className="manpingMeasures">
      <h3>What can I do about e-waste?</h3>
      <div className="santu">
        <div className="yii">
        <Link to='/Reduce'style={{color: '#fff', textDecoration:'none'}}>
            <img src="./reduce.jpg" alt="REDUCE" style={{cursor:'pointer'}}/>
          Reduce</Link>
        </div>
        <div class="yii">
        <Link to='/Reuse' style={{color: '#fff', textDecoration: 'none'}}>
            <img src="./reuse.jpg" alt="REUSE"  style={{cursor:'pointer'}}/>
          Reuse</Link>
        </div>
        <div class="yii">
        <Link to='/Recycle'style={{color: '#fff', textDecoration: 'none'}}>
            <img src="./roberto-sorin-ZZ3qxWFZNRg-unsplash.jpg" alt="RECYCLE"  style={{cursor:'pointer'}}/>
          Recycle</Link>
        </div>
        <div class="yii">
        <Link to='/Quiz'style={{color: '#fff', textDecoration: 'none'}}>
        <img src="./quiz.png" alt="Quiz"  style={{cursor:'pointer'}}/>
        Quiz</Link>
        </div>
      </div>
    </div>
  );
}
export default measuresComponent;
