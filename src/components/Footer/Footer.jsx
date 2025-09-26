import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer pt-80 pb-5'>
        <div className='container'>
            <div className="row">
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <h2>ChronoVolt</h2>
                    <p className='mt-3'>Discover a collection of premium watches designed to complement every occasion. From classic chronographs to sleek modern designs, each piece blends precision craftsmanship with undeniable elegance. Whether for work, leisure, or special moments, our watches don’t just keep time—they elevate it.</p>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                    <h2>Useful Link</h2>
                    <ul className='ps-0 pt-3'>
                        <li><Link to="/" className='nav-link px-0 pt-0 text-white'>Home</Link></li>
                        <li><Link to="/about" className='nav-link px-0 pt-0 text-white'>About</Link></li>
                        <li><Link to="/Shop" className='nav-link px-0 pt-0 text-white'>Shop</Link></li>
                        <li><Link to="#" className='nav-link px-0 pt-0 text-white'>Contact</Link></li>
                    </ul>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                    <h2>Contact Info</h2>
                    <ul className='px-0'>
                        <li className='mt-3'><a href="#" className='text-white'>+1 (213) 555-0198</a></li>
                        <li className='mt-3'><a href="#" className='text-white'>27 Liberty Avenue, Suite 402, Downtown District, Los Angeles, CA 90015, United States</a></li>
                        <li className='mt-3'><a href="#" className='text-white'>support@vexrafootwear.com</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='copyright'>
                <p>Copyright, ChronoVolt 2024</p>
            </div>
        </div>
    </section>
  )
}

export default Footer