import Image from 'next/image'
import React from 'react'
import teamImg from '../../assets/teammember.jpg'
import { Montserrat, DM_Sans } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
  })
  const dmSans = DM_Sans({
    subsets: ['latin'],
  })

const TeamMember = () => {
  return (
    <>
      <div className='team_member'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 mx-auto text-center' >
                    <div className='team_heading'>
                        <h2 className={montserrat.className}>Run Agency Smartly with Our <span>Team Member.</span></h2>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5'>
                    <div className='team_img'>
                        <Image src={teamImg}/>
                    </div>
                </div>
                <div className='col-lg-7 col-xl-6 offset-xl-1' >
                    <div className='team_right'>
                        <div className='team_content'>
                            <h3 className={montserrat.className}>What provide to <span>our client</span></h3>
                            <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum availabl , but the majority have suffered alteration in some for by injected humour, or randomised words which don't look.There are many variations of passages.</p>
                        </div>
                        <div className='team_content'>
                            <h3 className={montserrat.className}>Optimize for quickly <span>display</span>.</h3>
                            <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum availabl but the major.There are many variations of passages of.</p>
                        </div>
                        <button className={dmSans.className}>Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default TeamMember
