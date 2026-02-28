import { type FC } from "react"
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import "./sliderButton.css"

type SliderButtonProps = {
  showPrevSlide: () => void,
  showNextSlide: () => void,
  hidden: boolean
}

const SliderButton: FC<SliderButtonProps> = ({showPrevSlide, showNextSlide, hidden}) => {

  return (
    <div className={hidden ? "slider-buttons-box_hidden " : "slider-buttons-box"}>
      <button onClick={showPrevSlide} className="slider-btn slider__prev-btn">
        <ArrowBackIosNewSharpIcon fontSize="medium"/>
      </button>

       <button onClick={showNextSlide} className="slider-btn slider__next-btn">
        <ArrowForwardIosSharpIcon fontSize="medium"/>
      </button>
    </div>
  )
}

export default SliderButton