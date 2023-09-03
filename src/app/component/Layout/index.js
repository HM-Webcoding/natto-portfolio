
import Footer from '../Footer'
import Menubar from '../Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Menubar/>
        {children}
      <Footer/>
    </div>
  )
}

export default Layout
