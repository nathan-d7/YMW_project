import type { FC } from "react"
import style from "./aboutHomePage.module.css"
import "../../../index.css"
import DefaultBtn from "../../../widgets/ui/defaultButton/defaultButton"
import aboutImage from "../../../assets/images/about_home_page.png"
import { Link } from "react-router-dom"

const AboutHomePage: FC = () => {
  return (
    <section className={style["about"]}>
      <div className={`${style["about__container"]} ${'container'}`}>
        <div className={style["about__img-box"]}>
          <img src={aboutImage} className={style["about__img"]}/>
        </div>
        <div className={style["about__info-box"]}>
          <h3 className={style["about__info-heading"]}>О нас</h3>
          <p className={style["about__info-text"]}>Мы предоставляем учителям английского языка полный набор ресурсов для создания увлекательных и эффективных уроков. Наша цель заключается в том, чтобы облегчить труд учителя, сэкономить его время, вдохновить на создание креативных и результативных уроков. Мы стремимся стать надежным помощником для каждого учителя, независимо от опыта и используемой программы.</p>
          <Link to={'/about'}>
            <DefaultBtn componentType={'span'} text={'Подробнее'} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutHomePage