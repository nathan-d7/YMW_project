import type { FC } from "react"
import style from "./subscription.module.css"
import "../../../index.css"

const SubscriptionPage: FC = () => {
  return (
    <section className={style["subscr-page"]}>
      <div className={`${style["subscr__container"]} ${"container"}`}>
        <h2 className={`${style["subscr__title"]} ${"pageTitle"}`}>Подписка</h2>

        <div className={style["subscr__items-box"]}>
          <div className={`${style["subscr__item"]} ${style["free-package"]}`}>
            <span className={`${style["subscr__item-title"]} ${style["free-package-ico"]}`}>Тариф Бесплатный</span>
            <span className={style["subscr__item-price-span"]}>Стоимость: 0 R</span>
            <ul className={style["subscr__item-text-box"]}>
              Что входит:
              <li className={style["subscr__item-text"]}>5 материалов в день (ограниченный доступ)</li>
              <li className={style["subscr__item-text"]}>Базовые генераторы (таймер, колесо фортуны)</li>
              <li className={style["subscr__item-text"]}>1 папка «Избранное» (до 10 файлов)</li>
              <li className={style["subscr__item-text"]}>Доступ к разделу «Демо-уроки» (3 готовых урока)</li>
            </ul>
            <div className={`${style["subscr__image-box"]} ${style["crystal-1-img"]}`}></div>
            <button className={style["subscr__button"]}>Оформить</button>
          </div>
  
          <div className={`${style["subscr__item"]} ${style["main-package"]}`}>
            <span className={`${style["subscr__item-title"]} ${style["main-package-ico"]}`}>Тариф основной</span>
            <span className={style["subscr__item-price-span"]}>Стоимость: 299 R/месяц</span>
            <ul className={style["subscr__item-text-box"]}>
              Что входит:
              <li className={style["subscr__item-text"]}>Все из бесплатного тарифа</li>
              <li className={style["subscr__item-text"]}>Безлимитный доступ ко всем материалам</li>
              <li className={style["subscr__item-text"]}>Генераторы (кубики, имена, числа, бинго, шумомер)</li>
              <li className={style["subscr__item-text"]}>Сохранение в «Вечные папки» (безлимит)</li>
            </ul>
            <div className={`${style["subscr__image-box"]} ${style["crystal-2-img"]}`}></div>
            <button className={style["subscr__button"]}>Оформить</button>
          </div>

          <div className={`${style["subscr__item"]} ${style["premium-package"]}`}>
            <span className={`${style["subscr__item-title"]} ${style["premium-package-ico"]}`}>Тариф Премиум</span>
            <span className={style["subscr__item-price-span"]}>Стоимость: 990 R/месяц</span>
            <ul className={style["subscr__item-text-box"]}>
              Что входит:
              <li className={style["subscr__item-text"]}>Все из базового тарифа</li>
              <li className={style["subscr__item-text"]}>Доступ к VIP-материалам</li>
              <li className={style["subscr__item-text"]}>Функция “Сделать заказ” без дополнительной оплаты</li>
              <li className={style["subscr__item-text"]}>Скачивание без ограничений (архивами)</li>
            </ul>
            <div className={`${style["subscr__image-box"]} ${style["crystal-3-img"]}`}></div>
            <button className={style["subscr__button"]}>Оформить</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SubscriptionPage