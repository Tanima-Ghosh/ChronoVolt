import React from 'react'

import CtaImg from "../../assets/images/cta-bg-img.png"

const Cta = () => {
  return (
    <section className='cta-section position-relative pb-80' style={{backgroundColor: "#f7f7f7"}}>
       <div className="container">
        <div className='row'>
          <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-xs-2 col-12 mx-auto">
            <div className="img-box" style={{width: "70%"}}>
              <img src={CtaImg} alt="" />
            </div>
          </div>
        </div>
        <div className="section-title product-title text-center">
          <h2 className="fw-semibold">Elevate Your Style with Every Second</h2>
          <p className="text-muted">Discover timeless designs crafted for the moments that matter.</p>
        </div>
        <div className='text-center'>
          <a href="#" class="btn hero-btn mt-3">Shop Now</a>
        </div>
        
       </div>
    </section>
  )
}

export default Cta