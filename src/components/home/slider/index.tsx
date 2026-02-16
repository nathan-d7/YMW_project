import { useState, type FC } from "react"
import style from "./slider.module.css"
import card1 from "../../../assets/images/slider_1.jpg"
import card2 from "../../../assets/images/slider_2.jpg"
import card3 from "../../../assets/images/slider_3.jpg"
import card4 from "../../../assets/images/slider_4.jpg"
import "../../../index.css"
import { Button } from "@mui/material"
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'

const Slider: FC = () => {

  const imageURLs: string[] = [card1, card2, card3, card4]
  const [imageIndex, setImageIndex] = useState<number>(0)

  return (
    <section className={style["slider"]}>
      <div className={`${style["slider__container"]} ${"container"}`}>
        <div className={style["slider__box"]}>
          <img src={imageURLs[imageIndex]} className={style["slider__img"]}/>
          <Button>
            <ArrowBackIosNewSharpIcon />
          </Button>
          <Button>
            <ArrowForwardIosSharpIcon />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Slider