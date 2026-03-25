import type { FC } from "react"
import "../../../components/layout/promo/promo.css"
import type { CSSProperties } from "@mui/material"

type StyledTextProps = {
  text: string
  style: string,
  character: string[],
  charStyle: CSSProperties
}

const TextStyler: FC<StyledTextProps> = ({text, style, character, charStyle}) => {

    const characters: Array<string> = text.split('')
    
    return (
    <h1 className={style}>
      {characters.map((char, index) => {
        if (character.length && character.includes(char.toLowerCase())) {
          return (
            <span key={index} style={charStyle}>
              {char}
            </span>
          )
        } else {
            return <span key={index}>{char}</span>
        }
      })}
    </h1>
  )
}


export default TextStyler