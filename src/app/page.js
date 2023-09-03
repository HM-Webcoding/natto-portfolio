import Image from 'next/image'
import Layout from './component/Layout'
import Banner from './component/Banner'
import Services from './component/Services'
import TeamMember from './component/TeamMember'
import Blog from './component/Blog'
import Work from './component/Work'
import Partner from './component/Partner'
import AboutUs from './component/AboutUs'

export default function Home() {
  return (
    <>
     <Layout>
      <Banner/>
      <Services/>
      <TeamMember/>
      <Blog/>
      <Work/>
      <Partner/>
      <AboutUs/>
     </Layout>
    </>
  )
}
