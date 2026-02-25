import { useEffect, useState, type FC } from "react"
import style from "./slider.module.css"
import card1 from "../../../assets/images/sliderImages/pile_of_books.png"
import card2 from "../../../assets/images/sliderImages/laptop.png"
import card3 from "../../../assets/images/sliderImages/calendar.jpg"
import card4 from "../../../assets/images/sliderImages/bulb_brain.png"
import "../../../index.css"
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'



const Slider: FC = () => {

  const imageURLs: string[] = [card1, card2, card3, card4]
  const imageText: string[] = ['Документация', 'Готовые материалы', 'Календарно - Тематическое Планирование', 'Полезные статьи']
  const [imageIndex, setImageIndex] = useState(0)
  const [imageTextItem, setImageText] = useState('')

  const showNextSlide = () => {
    setImageIndex( index => {
      if(index === imageURLs.length - 1) return 0
      return index + 1
    })
  }

  const showPrevSlide = () => {
    setImageIndex( index => {
      if(index === 0) return imageURLs.length - 1
      return index - 1
    })
  }

  useEffect(() => {
    setImageText(item => (item = imageText[imageIndex]))
  }, [imageIndex])

  return (
    <section className={style["slider"]}>
      <div className={`${style["slider__container"]} ${"container"}`}>
        <h3 className={style["slider__container-heading"]}>Что у нас есть?</h3>
        <div className={style["slider__box"]}>
          <div className={style["slider__img-item-box"]}>
            {imageURLs.map(url => (
              // <img key={url} src={url} className={style["slider__img"]} style={{ transform: `translateX(${-100 * imageIndex}%)` }}/>
              <div key={url} className={style["slider__item"]} style={{ transform: `translateX(${-100 * imageIndex}%)`, backgroundImage: `url(${url})` }}>
                 <span className={style["slider__item-text"]}>{imageTextItem}</span>
              </div>
            ))}
          </div>
          <button onClick={showPrevSlide} className={style["slider__img-btn"]} style={{ left: 0 }}>
            <ArrowBackIosNewSharpIcon fontSize="medium"/>
          </button>
          <button onClick={showNextSlide} className={style["slider__img-btn"]} style={{ right: 0 }}>
            <ArrowForwardIosSharpIcon fontSize="medium"/>
          </button>
          <div className={style["slider__img-picker"]}>
            {imageURLs.map((_, index) => (
              <button key={index} className={style["slider__img-picker-item"]} onClick={() => setImageIndex(index)}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider