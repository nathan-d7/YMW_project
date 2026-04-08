import { type FC, useEffect, useRef, useState } from "react"
import Header from "./header"
import Promo from "./promo"
import Router from "../../router"
import Footer from "./footer"
import { useLocation } from "react-router-dom"

const Layout: FC = () => {

  const [promoHomeImage, setPromoImage] = useState<boolean>(true)
  const [promoType, setPromoType] = useState<string>('standart')
  const [pagePathname, setPagePathname] = useState<string>('')
  const navigationRef = useRef<HTMLElement | null>(null)
  const location = useLocation()

  const name = location.pathname.split('/')
  console.log('name', name[1])

  const handlePromoImage = () => {
    if(location.pathname !== "/") {
      setPromoImage(false)
    } else {
      setPromoImage(true)
    }

    
    if(location.pathname.includes('/articles') || location.pathname.includes('/subscription') || location.pathname.includes('/grades/')) {
      setPromoType("new")
      setPagePathname(prev => {
        const name = location.pathname.split('/')
        return prev = name[1]
      })
    } else {
      setPromoType("standart")
      setPagePathname(location.pathname)
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
      <Promo promoImage={promoHomeImage} promoType={promoType} pathname={pagePathname}/>
      <Router />
      <Footer onScrollToSection={scrollToSection}/>
    </>
  )
}

export default Layout