"use client"
import Image from 'next/image';
import React from 'react'
import { ImQuotesLeft } from 'react-icons/im';
import clintProfileImg from '../../assets/clint-profile.png'
import { Montserrat } from 'next/font/google';
import Slider from 'react-slick';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const montserrat = Montserrat({
  subsets: ['latin']
})

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: <PrevArrow/>,
  nextArrow: <NextArrow/>,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const AboutUs = () => {
  return (
    <>
      <div className='about_us'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-4 mx-auto text-center'>
                <div className='about_heading'>
                  <h2>What People Say <span>About Us </span></h2>
                </div>
              </div>
            </div>
            <Slider {...settings}>
            <div className='clint_review'>
                  <ImQuotesLeft/>
                  <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                  <div className='clint_profile d-flex '>
                    <Image src={clintProfileImg} alt='clint-profile'/>
                    <div>
                      <span className={montserrat.className}>James Willy</span>
                      <span className={montserrat.className}>CEO GTEX</span>
                    </div>
                  </div>
                </div>
                <div className='clint_review'>
                  <ImQuotesLeft/>
                  <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                  <div className='clint_profile d-flex '>
                    <Image src={clintProfileImg} alt='clint-profile'/>
                    <div>
                      <span className={montserrat.className}>James Willy</span>
                      <span className={montserrat.className}>CEO GTEX</span>
                    </div>
                  </div>
                </div>
                <div className='clint_review'>
                  <ImQuotesLeft/>
                  <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                  <div className='clint_profile d-flex '>
                    <Image src={clintProfileImg} alt='clint-profile'/>
                    <div>
                      <span className={montserrat.className}>James Willy</span>
                      <span className={montserrat.className}>CEO GTEX</span>
                    </div>
                  </div>
                </div>
                <div className='clint_review'>
                  <ImQuotesLeft/>
                  <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                  <div className='clint_profile d-flex '>
                    <Image src={clintProfileImg} alt='clint-profile'/>
                    <div>
                      <span className={montserrat.className}>James Willy</span>
                      <span className={montserrat.className}>CEO GTEX</span>
                    </div>
                  </div>
                </div>
            </Slider>
        </div>
      </div>
    </>
  )
}

export default AboutUs
