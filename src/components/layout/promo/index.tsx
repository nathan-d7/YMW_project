import type { FC } from "react"
import style from "./promo.module.css"
import "../../../index.css"
import promoBgMain from "../../../assets/images/promo_bg_main.png"
import promoBgSup from "../../../assets/images/promo_bg_sup.png"
import TextStyler from "../../textStyler/textStyler"

type promoImageProp = {
  promoImage: boolean
}

const Promo: FC<promoImageProp> = ({promoImage}) => {

  const promoHeader = 'Your Magic Wand'

    return (

      <section className={style['promo']}>
        <div className={`${style['promo__content-container']} ${'container'}`} style={{backgroundImage: `url(${promoImage ? promoBgMain : promoBgSup})`}}>
          <div className={style['promo__content-box']}>
            <TextStyler text={promoHeader} style={style['promo__header']} />
            <p className={style['promo__text']}>Легкая подготовка к урокам английского: все необходимое, чтобы ваш труд приносил радость, а не усталость.</p>
          </div>
          {/* <div className={style['promo__image-box']}>
            <img draggable={false} src={promoBg} className={style['promo__image']}/>
          </div> */}
        </div>
      </section>

    )
}

export default Promo