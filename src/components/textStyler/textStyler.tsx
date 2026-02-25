import type { FC } from "react"
import "../layout/promo/promo.css"

type StyledTextProps = {
    text: string
    style: string
}

const TextStyler: FC<StyledTextProps> = ({text, style}) => {

    const characters: Array<string> = text.split('')
    
    return (
    <h1 className={style}>
      {characters.map((character, index) => {
        if (character === 'M' || character === 'W') {
          return (
            <span key={index} style={{color: "#FC90AB"}}>
              {character}
            </span>
          );
        }
        return <span key={index}>{character}</span>;
      })}
    </h1>
  );
};


export default TextStyler