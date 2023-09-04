
"use client"
import Image from 'next/image'
import React from 'react'
import partnerImg from '../../assets/partnerlogo.png'
import partnerImg2 from '../../assets/partnerlogo2.png'
import { DM_Sans } from 'next/font/google'
import Slider from 'react-slick'

const dmSans = DM_Sans({
    subsets: ['latin'],
  })
const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='partner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mx-auto text-center'>
                        <div className='partner_heading'>
                             <h2 className={dmSans.className}>Reputed <span>Partners</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='partner_logo'>
                <Slider {...settings}>
                <Image src={partnerImg} alt='partner image'/>
                <Image src={partnerImg2} alt='partner image'/>
                <Image src={partnerImg} alt='partner image'/>
                <Image src={partnerImg2} alt='partner image'/>
                <Image src={partnerImg} alt='partner image'/>
                <Image src={partnerImg2} alt='partner image'/>
                <Image src={partnerImg} alt='partner image'/>
                <Image src={partnerImg2} alt='partner image'/>
                </Slider>

            </div>
            <p className={dmSans.className}>including thousands other brokers and prop firms</p>
      </div>
    </>
  )
}

export default Partner
