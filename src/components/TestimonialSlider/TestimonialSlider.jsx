import React from 'react'


// swipper slider 
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'


// swipper slider css
import "swiper/css"
import "swiper/css/pagination"


// images
import testi1 from "../../../src/assets/images/testi-1.jpg"
import testi2 from "../../../src/assets/images/testi-2.jpg"
import testi3 from "../../../src/assets/images/testi-3.jpg"

const testimonials = [
  {
    quote: "The Fossil Flynn Chronograph is a perfect blend of style and function. It feels premium, keeps perfect time, and always gets me compliments.",
    testiImage: testi1,
    name: "Alex Johnson",
  },
  {
    quote: "The Fossil Flynn Chronograph is a perfect blend of style and function. It feels premium, keeps perfect time, and always gets me compliments.",
    testiImage: testi2,
    name: "Priya Mehta",
  },
  {
    quote: "The Fossil Flynn Chronograph is a perfect blend of style and function. It feels premium, keeps perfect time, and always gets me compliments.",
    testiImage: testi3,
    name: "Mark Lee",
  },
];

const TestimonialSlider = () => {
  return (


    <section className='testimonial-slider text-center'>

      <div className="section-title">
        <h2 className="fw-semibold fs-1">Testimonial</h2>
        <p className="text-muted">Get the skin you want</p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="testimonialSwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial pb-5">
              <p className="mb-3">"{item.quote}"</p>
              <img src={item.testiImage} />
              <h5 className="mb-0">— {item.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>




  )
}

export default TestimonialSlider