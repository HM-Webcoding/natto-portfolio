"use client"
import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import blogImg1 from '../../assets/blog1.png'
import Slider from 'react-slick'
import PrevArrow from './prevArrow'
import NextArrow from './NextArrow'

const montserrat = Montserrat({
    subsets: ['latin'],
  })

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
  return (
    <>
      <div className='blog'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 mx-auto'>
                    <div className='blog_heading text-center'>
                        <h2 className={montserrat.className}>Our Popular Project <span>And Blog</span></h2>
                        <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
            <div className='blog_content'>
              <Image src={blogImg1} alt='blog image'/>
              <h3 className={montserrat.className}>Bitcoin and Economic Freedom</h3>
              <div className='d-flex justify-content-between'>
                <Link href="#" className={montserrat.className}>Read more</Link>
                <span className={montserrat.className}>10 January 2023</span>
              </div>
            </div>
            <div className='blog_content'>
              <Image src={blogImg1} alt='blog image'/>
              <h3 className={montserrat.className}>Bitcoin and Economic Freedom</h3>
              <div className='d-flex justify-content-between'>
                <Link href="#" className={montserrat.className}>Read more</Link>
                <span className={montserrat.className}>10 January 2023</span>
              </div>
            </div>
            <div className='blog_content'>
              <Image src={blogImg1} alt='blog image'/>
              <h3 className={montserrat.className}>Bitcoin and Economic Freedom</h3>
              <div className='d-flex justify-content-between'>
                <Link href="#" className={montserrat.className}>Read more</Link>
                <span className={montserrat.className}>10 January 2023</span>
              </div>
            </div>
            <div className='blog_content'>
              <Image src={blogImg1} alt='blog image'/>
              <h3 className={montserrat.className}>Bitcoin and Economic Freedom</h3>
              <div className='d-flex justify-content-between'>
                <Link href="#" className={montserrat.className}>Read more</Link>
                <span className={montserrat.className}>10 January 2023</span>
              </div>
            </div>
            </Slider>
        </div>
      </div>
    </>
  )
}

export default Blog
