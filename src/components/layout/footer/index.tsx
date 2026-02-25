import type { FC } from "react"
import style from "./footer.module.css"
import "../../../index.css"
import YMWLogo from "../../../assets/ymw_logo.svg?react"
import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import ViberIcon from "../../../assets/viber_icon.svg?react"

type FooterProps = {
  onScrollToSection: () => void
}

const Footer: FC<FooterProps> = ({onScrollToSection}) => {

  return (
    <footer className={style["footer"]}>
      <div className={`${style["footer__container"]} ${"container"}`}>
        <div className={style["footer__box"]}>
          <div className={style["footer__logo-box"]}>
            <Link className={style["footer__logo-link"]} to={"/"}>
              <YMWLogo className={style["footer__logo"]}/>
            </Link>
          </div>
          <div className={style["footer__info-left-box"]}>
            {/* <ul className={style["footer__info-left-box"]}> */}
            <ul>
              <li className={style["footer__info-item"]}>
                Your Magic Wand 2026
              </li>
              <li onClick={onScrollToSection} className={style["footer__info-item"]}>
                Навигация
              </li>
              <Link to={'/subscription'} className={`${style["footer__info-link"]} ${style["footer__info-item"]}`}>
                <li className={style["footer__info-item"]}>
                  Стоимость
                </li>
              </Link>
              <Link to={"/articles"} className={style["footer__info-link"]}>
                <li className={style["footer__info-item"]}>
                  Полезные статьи
                </li>
              </Link>
            </ul>
          </div>
          <div className={style["footer__info-right-box"]}>
            {/* <ul className={style["footer__info-box"]}> */}
            <ul>
              <Link to={"/about"} className={`${style["footer__info-link"]} ${style["footer__info-item"]}`}>
                <li className={style["footer__info-item"]}>
                  О нас
                </li>
              </Link>
              <li className={style["footer__info-item"]}>
                Контакты: 
              </li>
              <li className={style["footer__info-item"]}>
                +375331234567
              </li>
              <li className={style["footer__socials-box"]}>
                <Link to={"/"}><InstagramIcon className={style["footer__socials-item"]}/></Link>
                <Link to={"/"}><TelegramIcon className={style["footer__socials-item"]}/></Link>
                <Link to={"/"}><ViberIcon className={style["footer__socials-item"]}/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer