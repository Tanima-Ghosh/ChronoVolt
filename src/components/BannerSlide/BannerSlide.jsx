import React from 'react'

const BannerSlide = ({ bgClass, heading, title, description }) => {
  return (
    <div className={`hero-wrap ${bgClass}`}>
      <div className="hero-content">
        <h5>{heading}</h5>
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p className="my-3">{description}</p>
        <a href="#" className="btn hero-btn mt-3">Shop Now</a>
      </div>
    </div>
  );
};

export default BannerSlide