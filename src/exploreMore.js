import "./exploreMore.css";
function exploreMoreComponent() {
  return (
    <div class="manping">
      <h3>Explore more</h3>
      <div class="threebox">
        <div class="yi">
          <div class="tu">
            <a href="https://www.sustainablebrisbane.com.au/brisbane-repair-cafes/">
              <img src="./RepairCaféSandgate.png" alt="" />
            </a>
          </div>
          <h5>Repair Café Sandgate</h5>
          <p>
            Repair café is a place where skilled and dedicated volunteers give
            their time to repair broken or defunct items that may require
            rewiring, fixing, mending, tinkering with or any array of repair
            work.
          </p>
        </div>
        <div class="yi">
          <div class="tu">
            <a href="https://www.mobilemuster.com.au/recycle-a-mobile/">
              <img src="./MobileMuster.png" alt="" />
            </a>
          </div>
          <h5>MobileMuster</h5>
          <p>
            MobileMuster is a free, not-for-profit recycling program that is
            voluntarily funded by the Australian telecommunications industry.
            With us, you can recycle your old, broken mobile phones, chargers,
            and accessories easily from home, or at one of the drop-off
            locations near you.
          </p>
        </div>
        <div class="yi">
          <div class="tu">
            <a href="https://recyclingnearyou.com.au/computers/">
              <img src="./EcycleSolutions.png" alt="" />
            </a>
          </div>
          <h5>Ecycle Solutions</h5>
          <p>
            Ecycle Solutions provides the public with free recycling drop-off
            points for TVs, computers, computer accessories, and printers.
          </p>
        </div>
      </div>
    </div>
  );
}
export default exploreMoreComponent;
