import type { FC } from "react"
import style from "./footer.module.css"
import "../../../index.css"
import YMWLogo from "../../../assets/ymw_logo.svg?react"
import { Link } from "react-router-dom"

type FooterProps = {
  onScrollToSection: () => void
}

const Footer: FC<FooterProps> = ({onScrollToSection}) => {

  return (
    <footer className={style["footer"]}>
      <div className={`${style["footer__container"]} ${"container"}`}>
        <div className={style["footer__box"]}>
          <div className={style["footer__logo-box"]}>
            <Link to={"/"}><YMWLogo className={style["footer__logo"]}/></Link>
          </div>
          <div className={style["footer__info-box"]}>
            <ul className={style["footer__info-left-box"]}>
              <li className={style["footer__info-item"]}>
                Your Magic Wand 2026
              </li>
              <li onClick={onScrollToSection} className={style["footer__info-item"]}>
                Навигация
              </li>
              <li className={style["footer__info-item"]}>
                Стоимость
              </li>
              <Link to={"/articles"} className={style["footer__info-link"]}>
                <li className={style["footer__info-item"]}>
                  Полезные статьи
                </li>
              </Link>
            </ul>
          </div>
          <div className={style["footer__info-right-box"]}>
            <ul className={style["footer__info-box"]}>
               <li className={style["footer__info-item"]}>
                О нас
              </li>
              <li className={style["footer__info-item"]}>
                Контакты
              </li>
              <li className={style["footer__info-item"]}>
                Реквизиты
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer