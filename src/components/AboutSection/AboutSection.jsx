import React from 'react'
import aboutImage from "../../assets/images/about-img.png"



const AboutSection = () => {
    return (
        <div className='aboutSection pt-40 pb-40' style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container">

                <div className='row justify-content-center align-items-center'>

                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12">
                        <div className="section-title product-title">
                            <h2 className="fw-semibold fs-1">About Us</h2>
                            <p className="text-muted">Get the skin you want</p>
                        </div>
                        <div className='text-box'>
                            <p>At [Your Brand Name], we believe a watch is more than a tool to tell time—it’s a statement of style, confidence, and individuality. Our carefully curated collection blends timeless craftsmanship with modern design, offering pieces that complement every occasion. From boardroom meetings to weekend getaways, our watches are built to suit the moments that matter most. Each timepiece reflects precision, durability, and elegance, ensuring that you don’t just wear a watch—you wear your personality. We exist to bring luxury-inspired designs within reach of those who value both function and fashion.

                            <br /><br />
                            Crafted with attention to detail, the Fossil Flynn Chronograph Men’s Watch showcases a sleek, masculine aesthetic that stands out without being overly flashy. The watch features luminous hands, a date display, and sub-dials for tracking seconds, minutes, and hours — all protected under a sturdy mineral crystal. Its adjustable bracelet ensures a comfortable fit, while the water-resistant design adds an extra layer of practicality. Whether you're heading to a meeting or a weekend outing, the Flynn Chronograph adds a confident finishing touch to any look.
                            </p>
                            <a href="#" className="btn hero-btn mt-3">Shop Now</a>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 col-12" style={{zIndex:10}}>
                        <div className='img-box'>
                            <img src={aboutImage} alt="" />
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection