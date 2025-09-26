import React from "react";
import ChooseUsBox from "./ChooseUsBox";
import ChooseImg from "../../assets/images/choose-us.png"

const ChooseUs = () => {
  return (
    <section className="choose-us pt-80 pb-80" style={{backgroundColor: "#f7f7f7"}}>
      <div className="container">
        <div className="section-title product-title text-center">
          <h2 className="fw-semibold fs-1">Why Choose Us</h2>
          <p className="text-muted">Get the skin you want</p>
        </div>
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-12 col-12">
                <div className="text-box" style={{textAlign: "right"}}>
                    <ChooseUsBox title={"Chronograph Functionality"} description={"Features stopwatch capabilities with sub-dials for measuring seconds, minutes, and hours—ideal for precise time tracking during daily or athletic use."}/>

                    <ChooseUsBox title={"Stainless Steel Case"} description={"Built with a robust stainless steel case that offers long-lasting durability and a sophisticated, masculine finish suitable for all occasions."}/>

                    <ChooseUsBox title={"Quartz Movement"} description={"Equipped with quartz movement technology for highly accurate timekeeping without manual winding—just dependable, everyday precision."}/>

                    
                </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-12 col-12">
                <div className="img-box">
                    <img src={ChooseImg} alt="" />
                </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-12 col-12">
                <div className="text-box">
                    <ChooseUsBox title={"Luminous Hands"} description={"Glow-in-the-dark hands allow easy time reading in low-light environments like night outings or dim indoor spaces."}/>

                    <ChooseUsBox title={"Date Display Window"} description={"A small, clear date window adds convenience by keeping you updated without needing to check your phone or calendar."}/>

                    <ChooseUsBox title={"Water Resistance"} description={"Offers water resistance for splashes, rain, or handwashing—ideal for day-to-day wear without worrying about light moisture."}/>

                    
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
