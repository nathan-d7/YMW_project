import { useEffect, useState, type FC } from "react"
import "../../../index.css"
import "./promo.css"
import TextStyler from "../../../shared/utils/textStyler/textStyler"
import YMWLogo from "../../../assets/icons/ymw_logo.svg?react"
import Flamey from "../../../assets/images/flameyEmotions/flamey_side_sitting.svg?react"
import Breadcrumbs from "../../../shared/utils/breadcrumbs/breadcrumbs"
import { useLocation } from "react-router-dom"


type promoImageProp = {
  promoImage: boolean,
  promoType: string,
  pathname: string
}

const Promo: FC<promoImageProp> = ({promoImage, promoType, pathname}) => {

  const promoHeader = 'Your Magic Wand'
  
  const pagesNames = {
    articles: "Полезные статьи",
    subscription: "Подписка",
    grades: "Классы"
  }

  const location = useLocation()
 
  const promoTitle = pagesNames[pathname as keyof typeof pagesNames] || "Страница не найдена"

    return (
      (promoType == 'standart') ?
        (<section className="promo">
          <div className={`promo__content-container ${promoImage ? "" : "changed-bg"} container`}>
            <div className="promo__content-box">
              <TextStyler text={promoHeader} style={"promo__header"} character={['m', 'w']} charStyle={{color: "#FC90AB"}}/>
              <p className="promo__text">Легкая подготовка к урокам английского: все необходимое, чтобы ваш труд приносил радость, а не усталость. Всё для успешной работы учителя теперь в одном месте.</p>
            </div>
          </div>
        </section>) :

       (<section className="promo new">
          <div className="promo__content-container container new" style={{backgroundImage: "none"}}>
            <div className="promo__content-box new">
              {/* <div>breadcrumbs</div> */}
              <Breadcrumbs path={location.pathname} pagesNames={pagesNames}/>
              <h3>{promoTitle}</h3>
            </div>
            <div className="promo__logo-box">
              <Flamey className="promo__logo new"/>
            </div>
          </div>
        </section>)

    )
}

export default Promo