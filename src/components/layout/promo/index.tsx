import type { FC } from "react"
import "../../../index.css"
import "./promo.css"
import TextStyler from "../../textStyler/textStyler"

type promoImageProp = {
  promoImage: boolean
}

const Promo: FC<promoImageProp> = ({promoImage}) => {

  const promoHeader = 'Your Magic Wand'

    return (

      <section className="promo">
        {/* <div className={`${style['promo__content-container']} ${'container'}`} style={{backgroundImage: `url(${promoImage ? "promoBgMain" : promoBgSup})`}}> */}
        <div className={`promo__content-container ${promoImage ? "" : "changed-bg"} container`}>
          <div className="promo__content-box">
            <TextStyler text={promoHeader} style={"promo__header"}/>
            <p className="promo__text">Легкая подготовка к урокам английского: все необходимое, чтобы ваш труд приносил радость, а не усталость. Всё для успешной работы учителя теперь в одном месте.</p>
          </div>
        </div>
      </section>

    )
}

export default Promo