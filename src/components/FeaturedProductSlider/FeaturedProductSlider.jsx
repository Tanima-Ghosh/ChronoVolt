import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import ProductCard from '../ProductCard/ProductCard'




const FeaturedProductsSlider = ({ products }) => {
  return (
    <div className="product-container pt-80 pb-80">
      <div className="container position-relative">
        <div className="row">
          <div className="section-title product-title text-center">
            <h2 className="fw-semibold fs-1">Our Featured Product</h2>
            <p className="text-muted">Get the skin you want</p>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000,pauseOnMouseEnter: true, }}
          loop={true}
          navigation={{
            nextEl: ".product-swiper-next",
            prevEl: ".product-swiper-prev",
          }}
          breakpoints={{
            1399: { slidesPerView: 4 },
            1199: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            767: { slidesPerView: 1.5 },
            0: { slidesPerView: 1 },
          }}
          className="Swiper position-relative"
        >
          {products
            .filter((product) => product.id >= 0 && product.id <= 5)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>

      </div>
    </div>
  )
}

export default FeaturedProductsSlider
