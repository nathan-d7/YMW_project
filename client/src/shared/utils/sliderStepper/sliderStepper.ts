import { type RefObject } from "react"

type SliderStepperProps = {
  sliderElem: RefObject<HTMLDivElement | null>,
  windowSize?: number, 
  parentElement: RefObject<HTMLUListElement | null>, 
  slideIndex: number, articlesIndexes: number[], 
  setSlideIndex: Function
}

export function moveCardRight({sliderElem, windowSize, parentElement, slideIndex, articlesIndexes, setSlideIndex}:SliderStepperProps) {
  if(!sliderElem.current || !parentElement.current) return

  let firstCardWidth = sliderElem.current.offsetWidth

  setSlideIndex((slideIndex:number) => {
    if(slideIndex === articlesIndexes.length - 1) return 0
    return slideIndex + 1
  })

  if(slideIndex === articlesIndexes.length - 1) {
    parentElement.current.scrollLeft = 0
  } else {
    parentElement.current.scrollLeft += firstCardWidth
  }
}

export function moveCardLeft({sliderElem, windowSize, parentElement, slideIndex, articlesIndexes, setSlideIndex}:SliderStepperProps) {
  if(!sliderElem.current || !parentElement.current) return

  let firstCardWidth = sliderElem.current.offsetWidth

  setSlideIndex( (slideIndex:number) => {
    if(slideIndex === 0) return articlesIndexes.length - 1
    return slideIndex - 1
  })

  if(slideIndex === 0) {
    parentElement.current.scrollLeft = firstCardWidth * (articlesIndexes.length - 1)
  } else {
    parentElement.current.scrollLeft += -firstCardWidth
  }
}