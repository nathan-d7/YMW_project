import { type FC, useState, useEffect } from "react"
import style from "./articlesPage.module.css"
import "../../../index.css"
import { type Article } from "../../../types/Article.ts"
import { getArticles } from "../../../api/articlesApi/articlesApi.ts"
import FavoriteIcon from '@mui/icons-material/Favorite'

//  type ArticleByIdProp = {
//     getArticleById: (id: number) => Article
//   }



const ArticlesPage: FC = () => {

  type likedArticleIds = number[]

  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [likedArticlesId, setLikedArticles] = useState<likedArticleIds>([])
  
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
        <h3 className={style["articles-page__title"]}>Полезные статьи</h3>
        <ul className={style["articles-page__articles-box"]}>
          {articles.map(article => (
            <div key={article.id}  className={style["articles-page__item"]}>
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
        </ul>
      </div>
    </section>
  )
}

export default ArticlesPage