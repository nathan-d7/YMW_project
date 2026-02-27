import { useState, type FC } from "react"
import "../../../index.css"
import "./aboutPage.css"
import aboutUsImg from "../../../assets/images/about_us.png"

const AboutPage: FC = () => {

  const [isTruncate, setTruncate] = useState<boolean>(false)

  const handleTruncate = () => {
    setTruncate(prev => !prev)
  }

  return (
    <section className="aboutUs-page">
      <div className="aboutUs-page__container container">
        <h2 className="aboutUs-page__title pageTitle">О нас</h2>
        <div className="aboutUs-page__content-box">
          <div className="aboutUs-page__image-box">
            <img className="aboutUs-page__image" src={aboutUsImg} />
            <div className="aboutUs-page__image-bottom-filler"></div>
          </div>

          <div className="aboutUs-page__text-box">
            <p>
              Мы предоставляем учителям английского языка с <span>3</span> по <span>11</span> класс 
              полный набор ресурсов для создания увлекательных и эффективных уроков. 
              Это включает в себя:
            </p>
            <ol className="aboutUs-page__points-box">
              <li>Готовые планы уроков и конспекты</li>
              <li>Распечатываемые материалы: рабочие листы, карточки, игры</li>
              <li>Видеоуроки и интерактивные презентации</li>
              <li>Таблицы и схемы для наглядного объяснения грамматики и лексики</li>
              <li>Подборки учебников и полезных онлайн-ресурсов</li>
              <li>Подробные объяснения грамматических правил</li>
              <li>Разнообразные задания и упражнения для всех уровней сложности</li>
            </ol>
            <div className={`${isTruncate ? 'non-clipped-text' : 'clipped-text'}`}>
              <div className="hide-text-btn hide-text-btn_active" onClick={handleTruncate}>
                {isTruncate ? '' : 'Далее'}
              </div>
              <p>
                <span>Наша цель</span> – облегчить труд учителя английского языка, сэкономить его время и вдохновить на создание креативных и результативных уроков. Мы стремимся стать надежным помощником для каждого учителя, независимо от опыта и используемой программы. Мы хотим повысить качество преподавания английского языка в школах и гимназиях, сделать его интересным и доступным для всех учеников.
              </p>
              <ol className="aboutUs-page__points-box">
                <li>
                  <span>Нехватка времени:</span> Учителя часто перегружены работой и не имеют достаточно времени на поиск и создание качественных материалов. Мы предлагаем готовые решения, которые можно сразу использовать.
                </li>
                <li>
                  <span>Поиск актуальных и интересных материалов:</span> Учебники не всегда успевают за современными тенденциями и интересами учеников. Мы регулярно обновляем нашу базу данных, добавляя свежие и увлекательные ресурсы.
                </li>
                <li> 
                  <span>Разнообразие в обучении:</span> Учителям сложно постоянно придумывать новые активности и форматы уроков. Мы предлагаем широкий выбор материалов для разных стилей обучения и типов уроков.
                </li>
                <li>
                  <span>Персонализация обучения:</span> Наша платформа позволяет адаптировать материалы под конкретные потребности класса и отдельных учеников.
                </li>
                <div 
                  className="hide-text-btn hide-text-btn_active" 
                  onClick={handleTruncate}
                >
                  {isTruncate ? 'Скрыть' : ''}
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage