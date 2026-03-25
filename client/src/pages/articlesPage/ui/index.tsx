import { type FC, useState, useEffect, useRef } from "react"
import style from "./articlesPage.module.css"
import "../../../index.css"
import { type Article } from "../../../types/Article.ts"
import { getArticles } from "../../../api/articlesApi/articlesApi.ts"
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArticleForm from "./components/articleForm/index.tsx"
import SliderButton from "../../../shared/utils/sliderButtons/sliderButton.tsx"
import { useWindowSize } from "../../../hooks/windowSizeHook/windowSize.ts"
import {moveCardRight, moveCardLeft} from "../../../shared/utils/sliderStepper/sliderStepper.ts"


const ArticlesPage: FC = () => {

  type likedArticleIds = number[]

  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [likedArticlesId, setLikedArticles] = useState<likedArticleIds>([])

  const [sliderHidden, setSliderHidden] = useState<boolean>(true)
  const articlesIndexes = articles.map((_, index) => index)
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const slider = useRef<HTMLUListElement | null>(null)
  const sliderElem = useRef<HTMLDivElement | null>(null)

  const columnGap = 20
  let windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize <= 600) {
      setSliderHidden(false)
      console.log('Кнопки появились!');
    } else {
      setSliderHidden(true)
      console.log('Кнопки спрятаны!');
    }
  }, [windowSize]);

  
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
    const stored = localStorage.getItem('articlesLikesIds')
    if(stored) {
      setLikedArticles(JSON.parse(stored))
    }
  }, [])

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null) 
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (sliderHidden) return
    if (!touchStartX || !touchEndX) return

    const distance = touchStartX - touchEndX
    const minSwipeDistance = 50 

    if (distance > minSwipeDistance) {
      moveCardRight({sliderElem, windowSize, parentElement: slider, slideIndex, articlesIndexes, setSlideIndex})
    } else if (distance < -minSwipeDistance) {
      moveCardLeft({sliderElem, windowSize, parentElement: slider, slideIndex, articlesIndexes, setSlideIndex})
    }
  }

  // const showNextSlide = () => {
  // setSlideIndex( prev => {
  //   if(prev === articlesIndexes.length - 1) return 0
  //   return prev + 1
  // })
  // }

  // const showPrevSlide = () => {
  //   setSlideIndex( prev => {
  //     if(prev === 0) return articlesIndexes.length - 1
  //     return prev - 1
  //   })
  // }

  // const calcSlideStep = () => {
  //   if(sliderHidden) {
  //     return "translateX(0)"
  //   } else {

  //     if(windowSize <= 480) {
  //       return `translateX(${-100 * slideIndex}%)`
  //     }

  //     if(windowSize <= 600) {
  //       return !(slideIndex == (articlesIndexes.length - 1)) ?
  //         `translateX(calc(${-100 * slideIndex}% + ${-columnGap * slideIndex}px)` : 
  //         `translateX(calc(${-100 * slideIndex}% + ${columnGap * slideIndex}px)`
  //     }
  //   }
  // }
// 

 const handleLikes = (articleId: number) => {
    const isLiked = likedArticlesId.includes(articleId)
    
    setArticles(prevArticles => {
      return prevArticles.map(article => {
        if (article.id === articleId) {
          return (!isLiked && !(likedArticlesId.includes(articleId))) ?
            {...article, likes: article.likes + 1} :
            {...article, likes: article.likes - 1}
        } else {
          return article
        }
      })
    })

    let updatedLikesIds: number[]

    if(isLiked) {
      updatedLikesIds = likedArticlesId.filter(id => id !== articleId)
    } else {
      updatedLikesIds = [...likedArticlesId, articleId]
    }

    setLikedArticles(updatedLikesIds)
    localStorage.setItem('articlesLikesIds', JSON.stringify(updatedLikesIds))

 }

  return (
    <section className={style["articles-page"]}>
      <div className={`${style["articles-page__container"]} ${"container"}`}>
        {/* <h3 className={style["articles-page__title"]}>Полезные статьи</h3> */}
        <div className={style["articles-page__articles-container"]}>
          <ul 
            ref={slider}
            className={style["articles-page__articles-box"]}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          > 
            {articles.map(article => (
              <div 
                ref={sliderElem}
                key={article.id} 
                className={style["articles-page__item"]} 
                style={{transition: "transform 0.4s ease", 
                  // transform: sliderHidden ? 
                  // "translateX(0)" : 
                  // `translateX(${-100 * slideIndex}%)`, transition: "transform 0.4s ease"}}
                  // !(slideIndex == (articlesIndexes.length - 1)) ?
                  //   `translateX(calc(${-100 * slideIndex}% + ${-columnGap * slideIndex}px)` : 
                  //   `translateX(calc(${-100 * slideIndex}% + ${columnGap * slideIndex}px)`
                  // }}`
                  // transform: `${calcSlideStep()}`
                }}
              >
                <div className={style["articles-page__item-img-box"]}>
                  <img className={style["articles-page__item-img"]} src={article.image} alt={article.title} />
                </div>
                <div className={style["articles-page__item-info-box"]}>
                  <span className={style["articles-page__item-title"]}>{article.title}</span>
                  <p className={style["articles-page__item-descr"]}>{article.extendedContent}</p>
                </div>
                <div className={style["articles-page__item-likes-box"]}>
                  <FavoriteIcon 
                  onClick={() => handleLikes(article.id)} 
                  className={style["articles-page__item-like"]}
                  style={{fill: `${(likedArticlesId.includes(article.id)) ? '#F44336' : '#000'}`}}/>
                  <span className={style["articles-page__item-like-number"]}>{article.likes}</span>
                </div>
              </div>
            ))}
            {/* <SliderButton showNextSlide={showNextSlide} showPrevSlide={showPrevSlide} hidden={sliderHidden}/> */}
            <SliderButton 
              showNextSlide={() => moveCardRight({sliderElem, windowSize, parentElement: slider, slideIndex, articlesIndexes, setSlideIndex})} 
              showPrevSlide={() => moveCardLeft({sliderElem, windowSize, parentElement: slider, slideIndex, articlesIndexes, setSlideIndex})} 
              hidden={sliderHidden}
            />
          </ul>
        </div>
        <ArticleForm />
      </div>
    </section>
  )
}

export default ArticlesPage