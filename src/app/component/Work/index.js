import React from 'react'

import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { BsPlayCircleFill } from 'react-icons/bs';
import workImg from '../../assets/work.jpg'
import workImg2 from '../../assets/work2.png'
import workImg3 from '../../assets/work3.png'


const montserrat = Montserrat({
    subsets: ['latin'],
  })

const Work = () => {
  return (
    <>
      <div className='work'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 mx-auto' >
                    <div className='work_heading text-center'>
                        <h2 className={montserrat.className}>How it <span>Work</span> </h2>
                        <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className='Work_video'>
                        <Image src={workImg}/>
                        <div className='video_icon'>
                            <BsPlayCircleFill/>
                        </div>
                    </div>
                </div>
            <div className='col-lg-5'>
              <div className='work_content'>
                <div className='work_box'>
                  <h3 className={montserrat.className}>What provide to <span>our clint</span></h3>
                  <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum availabl , but the majority have suffered alteration in some for by.</p>
                </div>
                <div className='row'>
                  <div className='col-sm-8'><Image src={workImg2}/></div>
                  <div className='col-sm-4'><Image src={workImg3}/></div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Work
