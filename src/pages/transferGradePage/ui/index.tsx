import type { FC } from "react"
import "../../../index.css"
import "./gradePage.css"
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded'
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined'
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import { useParams } from "react-router-dom"

const GradePage: FC = () => {

  const { grade } = useParams()

  return (
    <section className="grade-page">
      <div className="grade-page__container container">
        <h3 className="grade__title">{grade} класс</h3>

        <div className="grade-categs__box">

          <div className="grade-categs__item lesson-plans">
            <div className="grade-categs__item-content">
              <div className="grade-categs__item-icon-box">
                <InventoryRoundedIcon />
              </div>
              <span className="grade-categs__item-name">Планы уроков</span>
            </div>
          </div>

          <div className="grade-categs__item materials">
            <div className="grade-categs__item-content">
              <div className="grade-categs__item-icon-box">
                <AudioFileOutlinedIcon />
              </div>
              <span className="grade-categs__item-name">Материалы ВРД</span>
            </div>
          </div>

          <div className="grade-categs__item manuals">
            <div className="grade-categs__item-content">
              <div className="grade-categs__item-icon-box">
                <CollectionsBookmarkOutlinedIcon />
              </div>
              <span className="grade-categs__item-name">Учебные пособия</span>
            </div>
          </div>

          <div className="grade-categs__item tests">
            <div className="grade-categs__item-content">
              <div className="grade-categs__item-icon-box">
                <LightbulbOutlinedIcon />
              </div>
              <span className="grade-categs__item-name">Тестовые работы</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default GradePage