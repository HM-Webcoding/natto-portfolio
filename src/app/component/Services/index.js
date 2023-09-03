import React from 'react'
import { Montserrat, DM_Sans } from 'next/font/google'
import Image from 'next/image'
import servicsImg from '../../assets/services.jpg'
import Link from 'next/link'
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BiSolidRightArrowAlt, BiUserCheck } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';

const montserrat = Montserrat({
    subsets: ['latin'],
  })
  const dmSans = DM_Sans({
    subsets: ['latin'],
  })

const Services = () => {
  return (
    <>
      <div className='services'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='services_heading'>
                        <h2 className={montserrat.className}>What we provide to <span>our Client</span></h2>
                        <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5'>   
                        <div className='servics_image'>
                            <Image src={servicsImg} />
                            <div className='experiance_box'>
                                <h3>10+</h3>
                                <p>Years of experience</p>
                            </div>
                        </div>
                </div>
                <div className='col-lg-6 offset-xl-1 align-self-xl-end'>
                    <div className='row '>
                        <div className='col-sm-6'>
                            <div className='services_box'>
                                <HiOutlineDesktopComputer/>
                                <h3 className={montserrat.className}>Digital Marketting</h3>
                                <p className={dmSans.className}>Web applications provide a flexible solution thank to their plat independent</p>
                               <Link href="#" className={montserrat.className}>Start Discovery <BiSolidRightArrowAlt/></Link>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='services_box'>
                                <FaLaptopCode/>
                                <h3 className={montserrat.className}>Web Development</h3>
                                <p className={dmSans.className}>Web applications provide a flexible solution thank to their plat independent</p>
                               <Link href="#" className={montserrat.className}>Start Discovery <BiSolidRightArrowAlt/></Link>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='services_box'>
                                <BiUserCheck/>
                                <h3 className={montserrat.className}>UI/UX Design</h3>
                                <p className={dmSans.className}>Web applications provide a flexible solution thank to their plat independent</p>
                               <Link href="#" className={montserrat.className}>Start Discovery <BiSolidRightArrowAlt/></Link>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='services_box'>
                                <HiOutlineDesktopComputer/>
                                <h3 className={montserrat.className}>Graphic Design</h3>
                                <p className={dmSans.className}>Web applications provide a flexible solution thank to their plat independent</p>
                               <Link href="#" className={montserrat.className}>Start Discovery <BiSolidRightArrowAlt/></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Services
