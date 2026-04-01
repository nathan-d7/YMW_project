import { type RefObject } from "react"

type SliderStepperProps = {
  sliderElem: RefObject<HTMLDivElement | null>,
  windowSize?: number, 
  parentElement: RefObject<HTMLUListElement | HTMLDivElement | null>, 
  slideIndex: number, 
  itemsIndexes: number[], 
  setSlideIndex: Function,
  stepSize: number
}

export function moveCardRight({sliderElem, windowSize, parentElement, slideIndex, itemsIndexes, setSlideIndex, stepSize}:SliderStepperProps) {
  if(!sliderElem.current || !parentElement.current) return

  if(stepSize === 1) {
    let firstCardWidth = sliderElem.current.offsetWidth
    console.log(parentElement.current.scrollLeft)

    setSlideIndex((slideIndex:number) => {
      if(slideIndex === itemsIndexes.length - 1) return 0
      return slideIndex + 1
    })

    if(slideIndex === itemsIndexes.length - 1) {
      parentElement.current.scrollLeft = 0
    } else {
      parentElement.current.scrollLeft += firstCardWidth
    }
  }

  if(stepSize === 3) {
    const visibleAreaWidth = parentElement.current.clientWidth
    const totalScrollWidth = parentElement.current.scrollWidth
    const currentScroll = parentElement.current.scrollLeft
    
    const maxScrollLeft = totalScrollWidth - visibleAreaWidth

    if (currentScroll >= maxScrollLeft - 5) {
      parentElement.current.scrollLeft = 0 
    } else {
      parentElement.current.scrollLeft += visibleAreaWidth 
    }
  }
}

export function moveCardLeft({sliderElem, windowSize, parentElement, slideIndex, itemsIndexes, setSlideIndex, stepSize}:SliderStepperProps) {
  if(!sliderElem.current || !parentElement.current) return

  if(stepSize === 1) {
    let firstCardWidth = sliderElem.current.offsetWidth
    console.log(parentElement.current.scrollLeft)

    setSlideIndex( (slideIndex:number) => {
      if(slideIndex === 0) return itemsIndexes.length - 1
      return slideIndex - 1
    })

    if(slideIndex === 0) {
      parentElement.current.scrollLeft = firstCardWidth * (itemsIndexes.length - 1)
    } else {
      parentElement.current.scrollLeft += -firstCardWidth
    }
  } 

  if(stepSize === 3) {
    const visibleAreaWidth = parentElement.current.clientWidth
    const totalScrollWidth = parentElement.current.scrollWidth
    const currentScroll = parentElement.current.scrollLeft

    const maxScrollLeft = totalScrollWidth - visibleAreaWidth

    if (currentScroll <= 5) {
      parentElement.current.scrollLeft = maxScrollLeft 
    } else {
      parentElement.current.scrollLeft -= visibleAreaWidth 
    }
  }
}
