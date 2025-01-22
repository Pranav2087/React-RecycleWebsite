import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import FormComponent from "./requestForm.js";
import MapComponent from "./mapComponent.js";
import MeasuresComponent from "./Measures.js";
import ReduceComponent from "./Reduce.js";
import RecycleComponent from "./Recycle.js";
import ReuseComponent from "./Reuse.js";
import ExploreMoreComponent from "./exploreMore.js";
import AboutComponent from "./About.js";
import QuizComponent from "./quiz.js"

function App() {
  return (
    <Router>
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to='/' className="buttonHeader" >About</Link>
            </li>
            <li>
              <Link to='/Measures' className="buttonHeader">Measures</Link>
              <ul>
                <li>
                  <Link to='/Reduce'className="buttonHeader">Reduce</Link>
                </li>
                <li>
                  <Link to='/Reuse' className="buttonHeader">Reuse</Link>
                </li>
                <li>
                  <Link to='/Recycle' className="buttonHeader">Recycle</Link>
                </li>
                <li>
                  <Link to='/Quiz' className="buttonHeader">Quiz</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/Map' className="buttonHeader">Disposal Sites</Link>
              <ul>
                <li>
                  <Link to='/Form' className="buttonHeader">PickUp Request</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/Explore' className="buttonHeader">Explore more</Link>
            </li>
          </ul>
        </nav>
        <img src="/logo.png" className="h_right" alt="logo" width="100" />
      </header>
      <Routes>
          <Route path="/" element={<AboutComponent />} />
          <Route path="/Map" element={<MapComponent/>}/>
          <Route path="/Measures" element={<MeasuresComponent/>}/>
          <Route path="/Reduce" element={<ReduceComponent/>}/>
          <Route path="/Recycle" element={<RecycleComponent/>}/>
          <Route path="/Reuse" element={<ReuseComponent/>}/>
          <Route path="/Quiz" element={<QuizComponent/>}/>
          <Route path="/Form" element={<FormComponent/>}/>
          <Route path="/Explore" element={<ExploreMoreComponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
