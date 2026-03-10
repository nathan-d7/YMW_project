import type { FC } from "react"
import "../../../components/layout/promo/promo.css"

type StyledTextProps = {
  text: string
  style: string,
  character: string[],
  color: string
}

const TextStyler: FC<StyledTextProps> = ({text, style, character, color}) => {

    const characters: Array<string> = text.split('')
    
    return (
    <h1 className={style}>
      {characters.map((char, index) => {
        if (character.length && character.includes(char.toLowerCase())) {
          return (
            <span key={index} style={{color: `${color}`}}>
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