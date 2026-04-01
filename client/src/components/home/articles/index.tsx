import { type FC, useEffect, useState, useRef } from "react"
import "../../../index.css"
import style from "./articles.module.css"
import { type Article } from "../../../types/Article.ts"
import { getArticles } from "../../../api/articlesApi/articlesApi.ts"
import SliderButton from "../../../shared/utils/sliderButtons/sliderButton.tsx"
import { useWindowSize } from "../../../hooks/windowSizeHook/windowSize.ts"
import {moveCardRight, moveCardLeft} from "../../../shared/utils/sliderStepper/sliderStepper.ts"

const ArticlesPreview: FC = () => {

  const [articles, setArticles] = useState<Article[]>([])
  const limitedArticles = articles.slice(0, 4)
  const articlesIndexes = articles.map((_, index) => index)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sliderHidden, setSliderHidden] = useState<boolean>(true)
  const [slideIndex, setSlideIndex] = useState<number>(0)
  const sliderBoxRef = useRef<HTMLDivElement | null>(null)
  const sliderItemRef = useRef<HTMLDivElement | null>(null)
  const [scrollWidth, setScrollWidth] = useState<string>('0')
  let windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize <= 600) {
      setSliderHidden(false)
      console.log('Кнопки появились!')
    } else {
      setSliderHidden(true)
      console.log('Кнопки спрятаны!')
    }
  }, [windowSize])

  let stepSize = (windowSize <= 426) ? 1 : 3

  const showNextSlide = () => {
    const gap = 16
    let step = 0

    if (!sliderItemRef.current) return

    if(windowSize >= 425 && windowSize <= 600) {
      step = sliderItemRef.current.offsetWidth - gap
    } else {
      step = sliderItemRef.current.offsetWidth + gap
    }

    setSlideIndex(prev => {
      const nextIndex = (prev === (limitedArticles.length - 1)) ? 0 : (prev + 1)
      setScrollWidth(`${-(step * nextIndex)}px`)
      return nextIndex
    })

  }

  // const showPrevSlide = () => {
  //   const gap = 16
  //   let step = 0

  //   if (!sliderItemRef.current) return

  //   if(windowSize >= 425 && windowSize <= 600) {
  //     step = sliderItemRef.current.offsetWidth - gap
  //   } else {
  //     step = sliderItemRef.current.offsetWidth + gap
  //   }

  //   setSlideIndex(prev => {
  //     const nextIndex = (prev === 0) ? (limitedArticles.length - 1) : (prev - 1)
  //     setScrollWidth(`${-(step * nextIndex)}px`)
  //     return nextIndex
  //   })
  // }

  const fetchData = async () => {
    try {
      const data = await getArticles()
      setArticles(data)
    } catch (err) {
      setError("Ошибка загрузки статей из Mock Api")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>

  return (
    <section className={style["articles-preview"]}>
      <div className={`${style["articles-preview__container"]} ${"container"}`}>
        <h3 className={style["articles__title"]}>Полезные статьи</h3>
        <div className={style["articles__items-viewport"]}>
          <div 
            className={style["articles__items-box"]} 
            ref={sliderBoxRef} 
            // style={{
            //   transform: sliderHidden ? 
            //     "translateX(0)" : 
            //     `translateX(${scrollWidth})`, 
            //   transition: "transform 0.4s ease"}}
            >
            {articles.map((article, index) => (
              (index <= 7) ?
              <article 
                key={article.id} 
                className={style["articles__item"]} 
                ref={sliderItemRef}
              >
                <div className={style["articles__item-img"]} style={{backgroundImage: `url(${article.image})`}}></div>

                <div className={style["articles__item-info"]}>
                  <span className={style["articles__item-title"]}>{article.title}</span>
                  <p className={style["articles__item-desc"]}>{article.description}</p>
                </div>
                
              </article> : null
            ))}
            <SliderButton 
              showNextSlide={() => moveCardRight({sliderElem: sliderItemRef, windowSize, parentElement: sliderBoxRef, slideIndex, itemsIndexes: articlesIndexes, setSlideIndex, stepSize})} 
              showPrevSlide={() => moveCardLeft({sliderElem: sliderItemRef, windowSize, parentElement: sliderBoxRef, slideIndex, itemsIndexes: articlesIndexes, setSlideIndex, stepSize})}
              style={{left: "50%", width: "91%"}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticlesPreview