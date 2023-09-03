import Image from 'next/image'
import React from 'react'
import logo from "../../assets/logo.svg"
import { Montserrat, DM_Sans } from 'next/font/google'
import Link from 'next/link'
import { footerServiceData } from '@/data/commondata'
import { footerResourcesData } from '@/data/commondata'
import { BsSend, BsInstagram,BsTwitter, BsPinterest } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';

 
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                  <div className='footer_heading'>
                      <Link href="/" ><Image src={logo} loading='lazy' alt='logo'/></Link>
                      <p className={montserrat.className}>There are many variations of passages of available, but the majority have suffered.</p>
                  </div>
                    
                
                </div>
                <div className='col-lg-3 col-sm-6'>
                  <div className='footer_heading'>
                      <h2 className={montserrat.className}>Services</h2>
                  </div>
                  <div className='footer_content'>
                    {
                      footerServiceData.map((item, i)=>(
                        <Link href={item.link} key={i}>{item.title}</Link>
                      ))
                    }
                  </div>
                </div>
                <div className='col-lg-3 col-sm-6'>
                  <div className='footer_heading'>
                      <h2 className={montserrat.className}>Resources</h2>
                  </div>
                  <div className='footer_content'>
                    {
                      footerResourcesData.map((item, i)=>(
                        <Link href={item.link} key={i}>{item.title}</Link>
                      ))
                    }
                  </div>
                </div>
                <div className='col-lg-3 col-sm-6'>
                  <div className='footer_heading'>
                      <h2 className={montserrat.className}>Newsletter</h2>
                  </div>
                  <div className='footer_content'>
                    <p className={montserrat.className}>Subscribe for our upcoming latest address and resources</p>
                    <div className='input'>
                      <input type='text' placeholder='Email'/>
                      <button className='newsletter_icon'>
                        <BsSend/>
                      </button>
                    </div>
                    
                    <div className='social_media'>
                      <div className='social_icons'><Link href="#"><RiFacebookFill/></Link></div>
                      <div className='social_icons'><Link href="#"><BsInstagram/></Link></div>
                      <div className='social_icons'><Link href="#"><BsTwitter/></Link></div>
                      <div className='social_icons'><Link href="#"><BsPinterest/></Link></div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
