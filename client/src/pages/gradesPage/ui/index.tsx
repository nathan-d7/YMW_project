import type { FC } from "react"
import "./gradesPage.css"
import "../../../index.css"
import ladder_1 from "../../../assets/images/gradesImages/ladder_1.png"
import ladder_2 from "../../../assets/images/gradesImages/ladder_2.png"
import ladder_3 from "../../../assets/images/gradesImages/ladder_3.png"
import { Link } from "react-router-dom"

const GradesPage: FC = () => {

  return (
    <section className="grades-page">
      <div className="grades-page__container container">

        <h3 className="grades-page__title">Классы</h3>

        <div className="grades-page__items-box">

          <div className="grades-page__item item_1">
            <div className="grades-page__item-grades-box">
              <div className="grades-page__item-grades-block"></div>
              <div className="grades-page__item-grades">
                <Link to={'/grades/3'} className="grades-page__grade">3 класс</Link>
                <Link to={'/grades/4'} className="grades-page__grade">4 класс</Link>
              </div>
            </div>

            <div className="grades-page__item-img-box">
              <img className="grades-page__item-img" src={ladder_1}/>
            </div>
          </div>

          <div className="grades-page__item item_2">
            <div className="grades-page__item-grades-box">
              <div className="grades-page__item-grades-block"></div>
              <div className="grades-page__item-grades">
                <Link to={'/grades/5'} className="grades-page__grade">5 класс</Link>
                <Link to={'/grades/6'} className="grades-page__grade">6 класс</Link>
              </div>
            </div>

            <div className="grades-page__item-img-box">
              <img className="grades-page__item-img" src={ladder_2}/>
            </div>

            <div className="grades-page__item-grades-box">
              <div className="grades-page__item-grades-block"></div>
              <div className="grades-page__item-grades">
                <Link to={'/grades/7'} className="grades-page__grade">7 класс</Link>
                <Link to={'/grades/8'} className="grades-page__grade">8 класс</Link>
              </div>
            </div>
          </div>

          <div className="grades-page__item item_3">
            <div className="grades-page__item-grades-box">
              <div className="grades-page__item-grades-block"></div>
              <div className="grades-page__item-grades">
                <Link to={'/grades/9'} className="grades-page__grade">9 класс</Link>
                <Link to={'/grades/10'} className="grades-page__grade">10 класс</Link>
                <Link to={'/grades/11'} className="grades-page__grade">11 класс</Link>
              </div>
            </div>

            <div className="grades-page__item-img-box">
              <img className="grades-page__item-img" src={ladder_3}/>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default GradesPage