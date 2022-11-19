import React from 'react'
import { useEffect } from 'react';
import './About.css'
import neymar from '../../images/neymar.webp'
import iniesta from '../../images/iniesta'
import ramos from '../../images/ramos.jpeg'


import AOS from 'aos';
import 'aos/dist/aos.css';


export const About = () => {

  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div className="container-fluid">
      <div data-aos="fade-down">
            <h1 className='text-center'>What our Customers say</h1>
        </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="face front-face">
              <img src={neymar} alt="" className="profile" />
              <div className="pt-3 text-uppercase name">
                Neymar Jr
              </div>
              <div className="designation">Professsional Footballer</div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left" />
              <div className="testimonial">
                I made back the purchase price in just 48 hours! Thank you for making it pain less,
                pleasant.
                The service was execllent. I will refer everyone I know.
              </div>
              <span className="fas fa-quote-right" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="face front-face">
              <img src={iniesta} alt="" className="profile" />
              <div className="pt-3 text-uppercase name">
                Iniesta
              </div>
              <div className="designation">International Footballer</div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left" />
              <div className="testimonial">
                Really good, The delivery was on time and I got my custom made shoes. 
              </div>
              <span className="fas fa-quote-right" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="face front-face">
              <img src={ramos} alt="" className="profile" />
              <div className="pt-3 text-uppercase name">
                Sergio Ramos
              </div>
              <div className="designation">Footballer</div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left" />
              <div className="testimonial">
                I usually not give feedbacks to normal ones. But their product was extraordinary. It feels very good on the field by wearing those shoes. Keep it up!
              </div>
              <span className="fas fa-quote-right" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
