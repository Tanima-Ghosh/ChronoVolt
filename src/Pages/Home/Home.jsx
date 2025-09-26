import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import "swiper/css"
import "swiper/css/effect-fade"
import BannerSlide from '../../components/BannerSlide/BannerSlide'




// product data

import ProductData from "../../data/products.json"
import FeaturedProductsSlider from '../../components/FeaturedProductSlider/FeaturedProductSlider'
import AboutSection from '../../components/AboutSection/AboutSection'
import DialSection from '../../components/DialSection/DialSection'
import ProductCard from '../../components/ProductCard/ProductCard'
import ChooseUs from '../../components/ChooseUs/ChooseUs'
import Cta from '../../components/Cta/Cta'
import Testimonial from '../../components/TestimonialSlider/Testimonial'
import BeforeFooter from '../../components/BeforeFotter/BeforeFooter'










const Home = () => {


    // banner products data
    const slides = [
        {
            bgClass: 'hero-wrap1',
            heading: '- Timeless. Bold. Yours. -',
            title: 'Watches That<br/>Define Your Style',
            description: 'Discover premium watches that blend timeless design, precision, and style for every occasion.',
        },
        {
            bgClass: 'hero-wrap2',
            heading: '- Crafted. Precise. Enduring. -',
            title: 'Timepieces That<br/>Speak Elegance',
            description: 'Explore watches designed with meticulous craftsmanship, combining modern functionality with timeless sophistication for a look that never fades.',
        },
        {
            bgClass: 'hero-wrap3',
            heading: '- Bold. Refined. Lasting. -',
            title: 'Redefining How<br/>You Wear Time',
            description: 'Discover versatile watches built for every moment, offering the perfect balance of durability, performance, and refined style.',
        },
    ];

    // product slider

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(ProductData)
    }, [])

    // Show first 8 products
    const homeProducts = ProductData.slice(0, 8);

    return (
        <div>



            {/* banner slider */}

            <div className="hero">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    loop={true}
                    autoplay={{ delay: 3000 }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <BannerSlide
                                bgClass={slide.bgClass}
                                heading={slide.heading}
                                title={slide.title}
                                description={slide.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* featured product slider */}

            <FeaturedProductsSlider products={products} />

            {/* about section */}

            <AboutSection />

            {/* dial section */}

            <DialSection />

            {/* choose us */}

            <ChooseUs />

            {/* product */}


            <div className='product-container pt-80 pb-80'>
                <div className="container position-relative">
                    <div className="section-title product-title text-center">
                        <h2 className="fw-semibold fs-1">Our Products</h2>
                        <p className="text-muted">Get the skin you want</p>
                    </div>
                    <div className="row">
                    {homeProducts.map(product => (
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
            

            {/* call to action */}

            <Cta />
            
            {/* testimonial */}

            <Testimonial />

            {/* before foote img */}

            <BeforeFooter/>
           

            
           

        </div>
    )
}

export default Home