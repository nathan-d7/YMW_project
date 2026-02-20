import { type FC, useRef } from "react"
import Header from "./header"
import Promo from "./promo"
import Router from "../../router"
import Footer from "./footer"


const Layout: FC = () => {

  const navigationRef = useRef<HTMLElement | null>(null)

  const scrollToSection = () => {
    if (navigationRef.current) {
      navigationRef.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',    
      });
    }
  }

  return (
    <>
      <Header headerRef={navigationRef}/>
      <Promo />
      <div
        style={{
          // height: 'calc(100vh - 60px)',
          // height: '100vh',
          // overflow: 'hidden',
          // display: 'flex',
          // justifyContent: 'center'
        }}
      >
        <Router />
        <Footer onScrollToSection={scrollToSection}/>
      </div>
    </>
  )
}

export default Layout