import type { FC } from "react"
import "./breadcrumbs.css"
import { Link } from "react-router-dom"

type BreadCrumbsProps = {
  path: string,
  pagesNames: Record<string, string>
}

const categoryTranslation: Record<string, string> = {
  grammar: 'Грамматика',
  vocabulary: 'Лексика',
  visuals: 'Аудио-Видео',
  tests: 'Тесты'
}

const Breadcrumbs: FC<BreadCrumbsProps> = ({path, pagesNames}) => {

  const pathsArr = path.split('/').filter(p => p !== "")

  const getRussianName = (link: string) => {

    if(!isNaN(+link)) {
      return `${link} класс`
    }

    if(pagesNames[link]) {
      return pagesNames[link]
    }

    if(categoryTranslation[link]) {
      return categoryTranslation[link]
    }

    return link

  }

  return (
    <div className="breadcrumbs-container">

      <Link to={"/"}>
        <span className="breadcrumbs__item">Главная</span>
      </Link>

      {pathsArr.map((link, index) => {

        const curretnPath = "/" + pathsArr.slice(0, index + 1).join("/")
        const russianName = getRussianName(link)

        return (
          <span key={curretnPath} className="breadcrumbs__items-box">
            <span className="breadcrumbs__items-separator"></span>
            <Link to={curretnPath} className="breadcrumbs__item-link">
              <span 
                className="breadcrumbs__item"
                style={{color: (index === pathsArr.length - 1) ? "#FF799B" : "#000"}}
              >
                {russianName}
              </span>
            </Link>
          </span>
        )
      
      })}
    </div>
  )
}

export default Breadcrumbs