import { useState, type FC } from "react"
import style from "./advantages.module.css"
import "../../../index.css"

const Advanatages: FC = () => {

  type advantagesObjProps = {
    title: string,
    description: string
  }

  const advantagesInfo: Array<advantagesObjProps> = [
    {title: 'Время', description: 'Экономия времени. Урок за 2 клика'},
    {title: 'Все и сразу', description: 'Разнообразие материалов в 1 месте'},
    {title: 'Уровни', description: 'Материал для базового и повышенного уровней'},
    {title: 'Актуальность', description: 'Соответствие актуальной программе и методическим требованиям'},
    {title: 'Живой урок', description: 'Разнообразие интерактива, разминок и онлайн-заданий для активных уроков'},
  ]

  const [isUplifted, setUplifted] = useState(false)

  const upliftCard = () => {

  }

  return (
    <section className={style["advantages"]}>
      <div className={`${style["advantages__container"]} ${'container'}`}>
        <h3 className={style["advantages__title"]}>Преимущества</h3>
        <div className={style["advantages__info-box"]}>
          {advantagesInfo.map( (item, index) => (

            (index === 1 || index === 3) ? 
              (<div key={index} className={`${style["advantages__item"]}`} style={{transform: 'translateY(24px)'}}>
                <span className={style["advantages__item-title"]}>{item.title}</span>
                <p className={style["advantages__item-text"]}>{item.description}</p>
              </div>) :

              (<div key={index} className={style["advantages__item"]}>
                <span className={style["advantages__item-title"]}>{item.title}</span>
                <p className={style["advantages__item-text"]}>{item.description}</p>
              </div>)
          
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advanatages