import type { FC } from "react"
import style from "./subscription.module.css"
import "../../../index.css"
import { formatPrice } from "../../../shared/utils/formatPrice/formatPrice"
import CoinSvg from "../../../assets/images/pricesImages/coin_icon.svg?react"
import BanknotesSvg from "../../../assets/images/pricesImages/banknotes_icon.svg?react"
import CrownSvg from "../../../assets/images/pricesImages/crown_icon.svg?react"

const SubscriptionPage: FC = () => {
  return (
    <section className={style["subscr-page"]}>
      <div className={`${style["subscr__container"]} ${"container"}`}>

        <h2 className={`${style["subscr__title"]} ${"pageTitle"}`}>Подписка. Тарифы</h2>

        <div className={style["subscr__items-box"]}>

          {/* <div className={`${style["subscr__item"]} ${style["free-package"]}`}>
            <span className={`${style["subscr__item-title"]} ${style["free-package-ico"]}`}>Тариф Бесплатный {formatPrice(0)}</span>
            <span className={style["subscr__item-price-span"]}>Стоимость: {formatPrice(0)}/месяц</span>
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
            <span className={style["subscr__item-price-span"]}>Стоимость: {formatPrice(299)}/месяц</span>
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
            <span className={style["subscr__item-price-span"]}>Стоимость: {formatPrice(990)}/месяц</span>
            <ul className={style["subscr__item-text-box"]}>
              Что входит:
              <li className={style["subscr__item-text"]}>Все из базового тарифа</li>
              <li className={style["subscr__item-text"]}>Доступ к VIP-материалам</li>
              <li className={style["subscr__item-text"]}>Функция “Сделать заказ” без дополнительной оплаты</li>
              <li className={style["subscr__item-text"]}>Скачивание без ограничений (архивами)</li>
            </ul>
            <div className={`${style["subscr__image-box"]} ${style["crystal-3-img"]}`}></div>
            <button className={style["subscr__button"]}>Оформить</button>
          </div> */}

          <div className={`${style["subscr__item"]}`}>
             <span className={`${style["subscr__item-title"]}`}>Тариф <span className={`${style["decorated"]}`}>Бесплатный</span> {formatPrice(0)}</span>
             <div className={`${style["free-package-ico-box"]}`}>
              <CoinSvg className={`${style["free-package-ico"]}`}/>
             </div>

             <div className={`${style["subscr__item-descr"]}`}>
              <span className={`${style["decorated"]}`}>5 материалов</span> в день (ограниченный доступ)
              <span className={`${style["decorated"]}`}> Базовые генераторы</span> (таймер, колесо фортуны)
              <br></br>1 папка «<span className={`${style["decorated"]}`}>Избранное</span>» (до 10 файлов)
              <br></br>Доступ к разделу «<span className={`${style["decorated"]}`}>Демо-уроки</span>» (3 готовых урока)
             </div>

             <div className={`${style["subscr__item-button"]}`}>
               <span className={`${style["subscr__item-button-text"]}`}>оформить</span>
             </div>
          </div>

          <div className={`${style["subscr__item"]}`}>
             <span className={`${style["subscr__item-title"]}`}>Тариф <span className={`${style["decorated"]}`}>Основной</span> {formatPrice(299)}/месяц</span>
             <div className={`${style["free-package-ico-box"]}`}>
              <BanknotesSvg className={`${style["free-package-ico"]}`}/>
             </div>

             <div className={`${style["subscr__item-descr"]}`}>
                <span className={`${style["decorated"]}`}>Все</span> из бесплатного тарифа
                <br></br><span className={`${style["decorated"]}`}> Безлимитный доступ</span> ко всем материалам
                <span className={`${style["decorated"]}`}> Генераторы </span>(кубики, имена, числа, бинго)
                Сохранение в «<span className={`${style["decorated"]}`}>Вечные папки</span>» (безлимит)
             </div>

             <div className={`${style["subscr__item-button"]}`}>
               <span className={`${style["subscr__item-button-text"]}`}>оформить</span>
             </div>
          </div>

          <div className={`${style["subscr__item"]}`}>
             <span className={`${style["subscr__item-title"]}`}>Тариф <span className={`${style["decorated"]}`}>Премиум</span> {formatPrice(999)}/месяц</span>
             <div className={`${style["free-package-ico-box"]}`}>
              <CrownSvg className={`${style["free-package-ico"]}`}/>
             </div>

             <div className={`${style["subscr__item-descr"]}`}>
                <span className={`${style["decorated"]}`}> 5 материалов</span> в день (ограниченный доступ)
                <span className={`${style["decorated"]}`}> Базовые генераторы</span> (таймер, колесо фортуны)
                1 папка «<span className={`${style["decorated"]}`}>Избранное</span>» (до 10 файлов)
                Доступ к разделу « <span className={`${style["decorated"]}`}>Демо-уроки</span>» (3 готовых урока)
             </div>

             <div className={`${style["subscr__item-button"]}`}>
               <span className={`${style["subscr__item-button-text"]}`}>оформить</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SubscriptionPage