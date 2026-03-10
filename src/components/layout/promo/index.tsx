import type { FC } from "react"
import "../../../index.css"
import "./promo.css"
import TextStyler from "../../../shared/utils/textStyler/textStyler"

type promoImageProp = {
  promoImage: boolean
}

const Promo: FC<promoImageProp> = ({promoImage}) => {

  const promoHeader = 'Your Magic Wand'

    return (

      <section className="promo">
        <div className={`promo__content-container ${promoImage ? "" : "changed-bg"} container`}>
          <div className="promo__content-box">
            <TextStyler text={promoHeader} style={"promo__header"} character={['m', 'w']} color={"#FC90AB"}/>
            <p className="promo__text">Легкая подготовка к урокам английского: все необходимое, чтобы ваш труд приносил радость, а не усталость. Всё для успешной работы учителя теперь в одном месте.</p>
          </div>
        </div>
      </section>

    )
}

export default Promo