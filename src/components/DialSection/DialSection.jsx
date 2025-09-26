import React from 'react'
import DialCard from './DialCard'
import dial1 from "../../assets/dial-1.avif"
import dial2 from "../../assets/dial-2.avif"
import dial3 from "../../assets/dial-3.png"
import dial4 from "../../assets/dial-4.avif"

const DialSection = () => {
  const cards = [
    {
      image: dial1,
      title: "Analogue Dial",
      description: "Beautiful analogue watch",
    },
    {
      image: dial2,
      title: "Classic Dial",
      description: "Elegant classic design",
    },

     {
      image: dial3,
      title: "Classic Dial",
      description: "Elegant classic design",
    },

     {
      image: dial4,
      title: "Classic Dial",
      description: "Elegant classic design",
    },
  ];

  return (
    <section className='dialSection pt-80 pb-80'>
      <div className="container">
        <div className="section-title product-title text-center">
          <h2 className="fw-semibold fs-1">Collection of dials</h2>
          <p className="text-muted">Get the skin you want</p>
        </div>
        <div className='row'>
           {cards.map((cards, index) => (
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12' key={index}>
                    <DialCard {...cards}/>
                </div>
           ))}
        </div>
      </div>
    </section>
  );
}

export default DialSection;
