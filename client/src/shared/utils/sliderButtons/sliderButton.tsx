import { type FC } from "react"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import "./sliderButton.css"
import type { CSSProperties } from "@mui/material"

type SliderButtonProps = {
  showPrevSlide: () => void,
  showNextSlide: () => void,
  hidden?: boolean,
  style?: CSSProperties
}

const SliderButton: FC<SliderButtonProps> = ({showPrevSlide, showNextSlide, hidden, style}) => {

  return (
    <div className={hidden ? "slider-buttons-box_hidden " : "slider-buttons-box"} style={style}>
      <button onClick={showPrevSlide} className="slider-btn slider__prev-btn">
        <ArrowBackIosRoundedIcon 
          className="icon_front" 
          sx={{fontSize: 30, stroke: "#000", strokeWidth: 0.5}}
        />
        <ArrowBackIosRoundedIcon 
          className="icon_back"
          sx={{
            fontSize: 30,
            fill: "transparent", 
            stroke: "#ccc", 
            strokeWidth: 2.5
          }}
        />
      </button>

       <button onClick={showNextSlide} className="slider-btn slider__next-btn">
        <ArrowForwardIosRoundedIcon 
          className="icon_front" 
          sx={{fontSize: 30, stroke: "#000", strokeWidth: 0.5}}
        />
        <ArrowForwardIosRoundedIcon 
          className="icon_back" 
          sx={{
            fontSize: 30,
            fill: "transparent",
            stroke: "#ccc",
            strokeWidth: 2.5
          }}
        />
      </button>
    </div>
  )
}

export default SliderButton