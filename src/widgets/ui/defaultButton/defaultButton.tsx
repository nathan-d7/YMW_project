import type { CSSProperties, ElementType, FC } from "react"
import style from "./defaultButton.module.css"
import { Box } from "@mui/material"

type DefaultBtnParams = {
  text: string,
  type?: 'button' | 'submit' | 'reset',
  componentType: ElementType,
  styles?: CSSProperties,
  disabled?: boolean,
}

const DefaultBtn: FC<DefaultBtnParams> = ({text, type, componentType, styles, disabled}) => {
  return (
    <Box 
      component={componentType} 
      className={style["defaultBtn"]} 
      type={type} 
      style={styles}
      disabled={disabled}
    >
      {text}
    </Box>
  )
}

export default DefaultBtn