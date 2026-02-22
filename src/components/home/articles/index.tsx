import { type FC, useEffect, useState } from "react"
import "../../../index.css"
import style from "./articles.module.css"
import { type Article } from "../../../types/Article.ts"
import { getArticles } from "../../../api/articlesApi/articlesApi.ts"


const ArticlesPreview: FC = () => {

  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
      <div className={`${style["articles__container"]} ${"container"}`}>
        <h3 className={style["articles__title"]}>Полезные статьи</h3>
        <div className={style["articles__items-box"]}>
          {articles.map((article, index) => (
            (index <= 3) ?
            <div key={article.id} className={style["articles__item"]}>
              <div className={style["articles__item-img"]} style={{backgroundImage: `url(${article.image})`}}></div>
              <div className={style["articles__item-info"]}>
                <span className={style["articles__item-title"]}>{article.title}</span>
                <p className={style["articles__item-desc"]}>{article.description}</p>
              </div>
              <span className={style["articles__item-link"]}>Перейти</span>
            </div> : null
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticlesPreview