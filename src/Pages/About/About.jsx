import React from 'react'
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import InnerBannerBg from "../../assets/images/banners/innerBannerBg.png"
import DialSection from '../../components/DialSection/DialSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import Cta from '../../components/Cta/Cta'
import ChooseUs from '../../components/ChooseUs/ChooseUs'


const About = () => {
  return (
    <>
        <InnerBanner title={"About"} subTitle={"Explore our exclusive collections"} backgroundImage={InnerBannerBg}/>

        {/* dial section */}

        <DialSection/>

        {/* about us */}

        <AboutSection/>

        {/* cta */}

        <Cta />

        {/* choos us */}

        <ChooseUs />

    </>
  )
}

export default About