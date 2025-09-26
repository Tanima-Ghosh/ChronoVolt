import React from "react";
import TestimonialSlider from "./TestimonialSlider";


const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container">


        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">

          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">
            
            <TestimonialSlider /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
