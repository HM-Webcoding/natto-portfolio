import React from 'react'
import { Montserrat, DM_Sans } from 'next/font/google'
import Image from 'next/image'
import bannerImg from '../../assets/banner.webp'

const montserrat = Montserrat({
    subsets: ['latin'],
  })
  const dmSans = DM_Sans({
    subsets: ['latin'],
  })

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 mx-auto text-center'>
                    <div className='banner_content'>
                        <h1 className={montserrat.className}> <span>Builds</span> your great portfolio <span>Website</span></h1>
                        <p className={dmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
                        <button className={dmSans.className}>Contact Now</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='banner_img'>
                        <Image src={bannerImg} width={1200} height={1200} alt='banner image'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
