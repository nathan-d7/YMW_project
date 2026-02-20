import { type FC, type RefObject } from "react";
import style from "./header.module.css"
import "../../../index.css"
import DropDownMenu from "../dropDown";
import { Link } from "react-router-dom";
import YMWLogo from "../../../assets/ymw_logo.svg?react"

type HeaderProps = {
  headerRef: RefObject<HTMLElement | null>
}

const Header: FC<HeaderProps> = ({headerRef}) => {

return (

  <div className={style['header-container']}>
    <header ref={headerRef} className={`${style['header']} ${'container'}`}>
      <div className={style['header__image-box']}>
        {/* <img draggable={false} src={ymwLogo} className={style['header__image']} />   */}
        <Link className={`${style['header__image-link']} ${"logo-link"}`} to={'/'}><YMWLogo className={`${style['header__image']} ${"logo"}`}/></Link> 
      </div>
      <nav className={style['header__nav-box']}>
        <Link to={'about'}>
          <li className={style['header__nav-item']}>О нас</li>
        </Link>
        <li className={style['header__nav-item']}>
          <DropDownMenu />
        </li>
        <Link to={'articles'}>
          <li className={style['header__nav-item']}>Статьи</li>
        </Link>
        <li className={style['header__nav-item']}>Стоимость</li>
      </nav>
    </header>
  </div>

)

}

export default Header