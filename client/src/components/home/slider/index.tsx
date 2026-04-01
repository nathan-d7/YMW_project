import { useEffect, useState, type FC } from "react"
import style from "./slider.module.css"
import card1 from "../../../assets/images/sliderImages/pile_of_books.png"
import card2 from "../../../assets/images/sliderImages/laptop.png"
import card3 from "../../../assets/images/sliderImages/calendar.jpg"
import card4 from "../../../assets/images/sliderImages/bulb_brain.png"
import "../../../index.css"
import SliderButton from "../../../shared/utils/sliderButtons/sliderButton.tsx"



const Slider: FC = () => {

  const imageURLs: string[] = [card1, card2, card3, card4]
  const imageText: string[] = ['Документация', 'Готовые материалы', 'Календарно - Тематическое Планирование', 'Полезные статьи']
  const [imageIndex, setImageIndex] = useState(0)
  const [imageTextItem, setImageText] = useState('')
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const activeText = imageText[activeIndex]
  

  const showNextSlide = () => {
    // setImageIndex( index => {
    //   if(index === imageURLs.length - 1) return 0
    //   return index + 1
    // })
    setActiveIndex(prev => (prev + 1) % imageURLs.length)
  }

  const showPrevSlide = () => {
    // setImageIndex( index => {
    //   if(index === 0) return imageURLs.length - 1
    //   return index - 1
    // })
    setActiveIndex(prev => (prev - 1 + imageURLs.length) % imageURLs.length)
  }

  useEffect(() => {
    setImageText( item => (item = imageText[imageIndex]))
  }, [imageIndex])

  const getCardStyles = (index: number) => {
    let offset = index - activeIndex

    if(offset < -1) offset += imageURLs.length
    if(offset > 1) offset -= imageURLs.length

    if(offset === 0) {
      return {
        transform: "translateX(-50%) scale(1)",
        zIndex: 3,
        opacity: 1,
        left: "50%",
        width: "600px",
        boxShadow: "inset 0 0 10px 1px #FC90AB",
        border: "1px solid #FC90AB"
      }
    } else if(offset === 1) {
      return {
        transform: "translateX(-50%) scale(0.8)",
        zIndex: 2,
        left: "75%",
        width: "50%",
        border: "1px solid #000"
      }
    } else if(offset === -1) {
      return {
        transform: "translateX(-50%) scale(0.8)",
        zIndex: 2,
        left: "25%",
        width: "50%",
        border: "1px solid #000"
      }
    } else {
      return {
        transform: "translateX(-50%) scale(0.5)",
        zIndex: 1,
        opacity: 0,
        left: "50%",
      }
    }
  }

  return (
    <section className={style["slider"]}>
      <div className={`${style["slider__container"]} ${"container"}`}>
        <h3 className={style["slider__container-heading"]}>Что у нас есть?</h3>
        <div className={style["slider__box"]}>
          <div className={style["slider__img-item-box"]}>
            {imageURLs.map((url, i) => (
                <div 
                  key={url} 
                  className={style["slider__item"]} 
                  style={{ 
                    backgroundImage: `url(${url})`,
                    ...getCardStyles(i)
                  }}>
                  {(i === activeIndex) && (<span className={style["slider__item-text"]}>{activeText}</span>)}
                </div>
            ))}
          </div>
          {/* <button onClick={showPrevSlide} className={style["slider__img-btn"]} style={{ left: 0 }}>
            <ArrowBackIosNewSharpIcon fontSize="medium"/>
          </button>
          <button onClick={showNextSlide} className={style["slider__img-btn"]} style={{ right: 0 }}>
            <ArrowForwardIosSharpIcon fontSize="medium"/>
          </button> */}
          <SliderButton 
            showNextSlide={showNextSlide}
            showPrevSlide={showPrevSlide}
            style={{left: "50%"}}
          />
          <div className={style["slider__img-picker"]}>
            {imageURLs.map((_, index) => (
              <button 
                key={index} 
                className={style["slider__img-picker-item"]} 
                onClick={() => setActiveIndex(index)}
                style={{backgroundColor: `${(index === activeIndex) ? "#FC90AB" : "rgba(108, 104, 106, 0.28)"}`}}
              >
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider


