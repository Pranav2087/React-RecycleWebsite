import "./Recycle.css";
function recycleComponent() {
  return (
    <div>
      <div class="datu">
        <div class="wenzi">
          <h2>Recycle</h2>
          <p>
            Emphasizing recycling as a primary practice can significantly
            address our global waste issue. In our fast-paced consumer society,
            the quick disposal of items has resulted in overwhelming amounts of
            waste, causing environmental concerns. Take a moment to evaluate
            your recycling habits in your home. Contemplate how much waste could
            be diverted from landfills if you consistently recycle. Ponder the
            economic and environmental benefits of converting waste into
            reusable materials and the potential positive impact of adopting a
            recycle-centric approach.
          </p>
        </div>
      </div>
      <div class="xiangqingRecycle">
        <div class="wenRec">
          <div class="tuzuo">
            <h5>Mobile phone, Computer and TV</h5>
            <img src="./laptopAndPhone.jpg" alt="" />
          </div>
          <div class="wenyou">
            <p>
              Mobile phones and televisions are significant contributors to
              electronic waste. In Australia, for every five million mobile
              phones bought annually, an astonishing 23 million lie dormant and
              unused.
            </p>
            <p>
              By utilizing our recycling services for mobile phones and TVs,
              we’re promoting a circular economy, ensuring that up to 90% of the
              materials in these devices can be repurposed into new items. This
              diminishes the demand for raw material extraction, conserving
              energy, safeguarding our natural resources, and shielding the
              environment. To put it in perspective, recycling merely 10,000
              mobile phones negates the need to extract 26 tonnes of gold ore.
            </p>
            <a
              href="https://www.dcceew.gov.au/environment/protection/waste/product-stewardship/products-schemes/television-computer-recycling-scheme"
              style={{color: '#7EAA92', marginTop: '100px', fontsize: '14px;'}}
            >
              Learn more about National Television and Computer Recycling Scheme
            </a>
          </div>
          <hr style={{width:'130%',position:"relative",top:'100px'}}></hr>
        </div>
        <div class="wenRec" style={{margintop:'-80px'}}>
          <div class="tuzuo">
            <h5>Batteries</h5>
            <img src="./batteries.jpg" alt="" />
          </div>
          <div class="wenyou">
            <p>
              A staggering 80% of batteries utilized by Australians are
              single-use. Even though they’re recyclable, a whopping
              97%—equivalent to 8,000 tonnes—find their way to landfills
              annually. These batteries pose health risks, as they’re laden with
              hazardous substances like cadmium, mercury, and lead. Given their
              flammable and toxic characteristics, it’s crucial not to discard
              them in regular or recycling bins. The right way to dispose of
              them is at designated battery recycling drop-off locations.
            </p>
            <a
              href="https://bcycle.com.au/"
              style={{color: '#7EAA92', margintop: '85px', fontsize: '14px'}}
            >
              Learn more about Australia’s official battery recycling Scheme
            </a>
          </div>
          <hr style={{width:'130%',position:"relative",top:'100px'}}></hr>
        </div>
        <div class="wenRec" style={{margintop:'-60px'}}>
          <div class="tuzuo">
            <h5>White Goods</h5>
            <img src="./White-goods.jpg" alt="" />
          </div>
          <div class="wenyou">
            <p>
              White goods refer to large household electronics like
              refrigerators, washers, dryers, AC units, water heaters, and
              cooking appliances.
            </p>
            <p>
              In Australia, there are over 45 million such appliances owned by
              households. Annually, about 2.5 million of these items are thrown
              away, often ending up in landfills.{" "}
            </p>
            <p>
              By recycling these white goods, we can reclaim essential materials
              like metals and plastics, and other non-renewable resources. This
              promotes a circular economy, allowing these materials to be
              reused. Furthermore, appropriate recycling prevents harmful
              substances, including flame retardants, from harming our
              environment.
            </p>
            <a href="https://www.cleanaway.com.au/waste/white-goods/#:~:text=Contact%20your%20local%20council%20for,then%20be%20disposed%20of%20sustainably." style={{color: '#7EAA92', fontsize: '14px'}}>
              Click to find out the drop-out points
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default recycleComponent;
