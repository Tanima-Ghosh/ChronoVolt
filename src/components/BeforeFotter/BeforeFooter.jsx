import React from 'react'

import beforefooterimg1 from "../../../src/assets/images/before-footer-img-1.png"
import beforefooterimg2 from "../../../src/assets/images/before-footer-img-2.png"
import beforefooterimg3 from "../../../src/assets/images/before-footer-img-3.png"
import beforefooterimg4 from "../../../src/assets/images/before-footer-img-4.png"
import beforefooterimg5 from "../../../src/assets/images/before-footer-img-5.png"

const BeforeFooter = () => {
    return (
        <section className='beforefooter mt-5'>
            <div className='container-fluid px-0'>
                <div className='beforefotterrow d-flex'>
                    <div className='flex-fill'>
                        <img src={beforefooterimg1} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                    </div>
                    <div className='flex-fill'>
                        <img src={beforefooterimg2} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                    </div>
                    <div className='flex-fill'>
                        <img src={beforefooterimg3} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                    </div>
                    <div className='flex-fill'>
                        <img src={beforefooterimg4} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                    </div>
                    <div className='flex-fill'>
                        <img src={beforefooterimg5} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BeforeFooter