import type { FC } from "react";
import style from "./header.module.css"
// import ymwLogo from "../../../assets/ymw_logo.png"
import "../../../index.css"
import DropDownMenu from "../dropDown";
import { Link } from "react-router-dom";
import YMWLogo from "../../../assets/ymw_logo.svg?react"


const Header: FC = () => {


return (

  <div className={style['header-container']}>
    <header className={`${style['header']} ${'container'}`}>
      <div className={style['header__image-box']}>
        {/* <img draggable={false} src={ymwLogo} className={style['header__image']} />   */}
        <Link className={style['header__image-link']} to={'/'}><YMWLogo className={style['header__image']}/></Link> 
      </div>
      <nav className={style['header__nav-box']}>
        <li className={style['header__nav-item']}>О нас</li>
        <li className={style['header__nav-item']}>
          <DropDownMenu />
        </li>
        <Link to={'articles'}><li className={style['header__nav-item']}>Статьи</li></Link>
        <li className={style['header__nav-item']}>Стоимость</li>
      </nav>
    </header>
  </div>

)

}

export default Header