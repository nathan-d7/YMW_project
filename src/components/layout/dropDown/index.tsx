import { useState, type FC } from "react";
import style from "./dropDown.module.css"

// type DropDownProps = {
//   isOpen: boolean
//   handleMouseEnter: MouseEvent,
//   handleMouseLeave: MouseEvent
// }

const DropDownMenu: FC = () => {

  const [isOpen, setOpen] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0);
  const classesArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer);
    setOpen(true)
  }

  const handleMouseLeave = () => {
    const newTimer = setTimeout(() => {
       setOpen(false)
    }, 500)

    setTimer(newTimer)
  }

  return (
    <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style['drop-down-box']}>
      Классы
      {isOpen && 
        <div className={style['drop-down__open']}>
          {/* <li className={style['drop-down__item']}>1 класс</li>
          <li className={style['drop-down__item']}>2 класс</li>
          <li className={style['drop-down__item']}>3 класс</li>
          <li className={style['drop-down__item']}>4 класс</li>
          <li className={style['drop-down__item']}>5 класс</li>
          <li className={style['drop-down__item']}>6 класс</li>
          <li className={style['drop-down__item']}>7 класс</li>
          <li className={style['drop-down__item']}>8 класс</li>
          <li className={style['drop-down__item']}>9 класс</li>
          <li className={style['drop-down__item']}>10 класс</li>
          <li className={style['drop-down__item']}>11 класс</li> */}
          {classesArr.map((item) => <li key={item} className={style['drop-down__item']}>{item} класс</li>)}
        </div>}
    </ul>
  )

}

export default DropDownMenu