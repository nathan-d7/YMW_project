import type { CSSProperties, ElementType, FC } from "react"
import style from "./defaultButton.module.css"
import { Box } from "@mui/material"

type DefaultBtnParams = {
  text: string,
  type?: 'button' | 'submit' | 'reset',
  componentType: ElementType,
  style?: CSSProperties
}

const DefaultBtn: FC<DefaultBtnParams> = ({text, type, componentType}) => {
  return (
    <Box component={componentType} className={style["defaultBtn"]} type={type}>{text}</Box>
  )
}

export default DefaultBtn