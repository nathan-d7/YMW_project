import type { FC } from "react"
import Slider from "../../../components/home/slider/index"
import AboutHomePage from "../../../components/home/about"
import Advanatages from "../../../components/home/advantages"
import ArticlesPreview from "../../../components/home/articles"
import AccordionHomePage from "../../../components/home/accordion/index"

const HomePage: FC = () => {
  return (
      <>
       <Slider />
       <AboutHomePage />
       <Advanatages />
       <ArticlesPreview />
       <AccordionHomePage />
      </>
  )
} 

export default HomePage