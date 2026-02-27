import { useState, type FC, type RefObject } from "react"
import "./header.css"
import "../../../index.css"
import DropDownMenu from "../dropDown"
import { Link } from "react-router-dom"
import YMWLogo from "../../../assets/ymw_logo.svg?react"


type HeaderProps = {
  headerRef: RefObject<HTMLElement | null>
}

const Header: FC<HeaderProps> = ({headerRef}) => {

  const [menuIsOpen, setMenuOpen] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setMenuOpen(prev => !prev)
  }


  return (

    <div className="header-container">
      <header ref={headerRef} className={`header container`}>

        <div 
          onClick={handleOpenMenu} 
          className={`burger-menu-box ${(menuIsOpen) ? "burger-menu__effect" : ""}`}
        >

          <span 
            className={`burger-menu__item ${(menuIsOpen) ? "burger-menu__item-efffect" : ""}`} 
            style={{backgroundColor: `${menuIsOpen ? '#fff' : ''}`}}></span>
          <span 
            className={`burger-menu__item ${(menuIsOpen) ? "burger-menu__item-efffect" : ""}`} 
            style={{backgroundColor: `${menuIsOpen ? '#fff' : ''}`}}></span>
          <span 
            className={`burger-menu__item ${(menuIsOpen) ? "burger-menu__item-efffect" : ""}`} 
            style={{backgroundColor: `${menuIsOpen ? '#fff' : ''}`}}></span>

        </div>

        <div className="header__image-box">
          <Link className={`header__image-link logo-link`} to={'/'}><YMWLogo className={`header__image logo`}/></Link> 
        </div>

        <nav className={`header__nav-box ${menuIsOpen ? "header__nav-box_open" : ""}`}>
          <Link to={'about'}>
            <li className="header__nav-item">О нас</li>
          </Link>
          <li className="header__nav-item">
            <Link to={'grades'}>
              <DropDownMenu />
            </Link>
          </li>
          <Link to={'articles'}>
            <li className="header__nav-item">Статьи</li>
          </Link>
          <Link to={'subscription'}>
            <li className="header__nav-item">Стоимость</li>
          </Link>
        </nav>
      </header>
    </div>

  )

}

export default Header