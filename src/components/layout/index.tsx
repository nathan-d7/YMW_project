import { type FC, useEffect, useRef, useState } from "react"
import Header from "./header"
import Promo from "./promo"
import Router from "../../router"
import Footer from "./footer"
import { useLocation } from "react-router-dom"


const Layout: FC = () => {

  const [promoHomeImage, setPromoImage] = useState<boolean>(true)
  const navigationRef = useRef<HTMLElement | null>(null)
  const location = useLocation()

  const handlePromoImage = () => {
    if(location.pathname !== "/") {
      setPromoImage(false)
    } else {
      setPromoImage(true)
    }
  }

  useEffect(() => {
    handlePromoImage()
  }, [location])

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
      <Promo promoImage={promoHomeImage}/>
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