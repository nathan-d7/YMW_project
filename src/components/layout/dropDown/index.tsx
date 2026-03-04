import { useState, type FC } from "react"
import style from "./dropDown.module.css"
import { useNavigate } from "react-router-dom"


const DropDownMenu: FC = () => {

  const [isOpen, setOpen] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0);
  const classesArr: number[] = [3, 4, 5, 6, 7, 8, 9, 10, 11]
  const navigate = useNavigate()

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

  const handleMainLink = () => {
    navigate('/grades')
  }

  const handleSubLink = (e: React.MouseEvent<HTMLLIElement>, item: number) => {
    e.stopPropagation()
    navigate(`/grades/${item}`)
  }

  return (
      <ul onClick={handleMainLink} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style['drop-down-box']}>
        Классы
        {isOpen && 
          <div className={style['drop-down__open']}>
            {classesArr.map((item) => <li key={item} className={style['drop-down__item']} onClick={(e) => handleSubLink(e, item)}>{item} класс</li>)}
          </div>}
      </ul>
  )

}

export default DropDownMenu