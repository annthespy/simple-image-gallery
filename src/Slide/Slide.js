import React, { useState, useEffect } from 'react'
import { Dots } from '../Dots/Dots.js';
import './Slide.css'

export const Slide = ( { images, params } ) => {

  const {
    animatedTransition,
    arrowsColor,
    autoplay,
    autoplaySpeed,
    customArrowLeft,
    customArrowRight,
    customArrows,
    dots,
    infinite,
    shouldShowArrows,
    // TODO
    // thumbNails,
    // thumbNailsPosition
  } = params

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[currentImageIndex]);
  const [transition, setTransition] = useState('');
  const [shouldHideLeftArrow, setShouldHideLeftArrow] = useState();
  const [shouldHideRightArrow, setShouldHideRightArrow] = useState();

  useEffect(() => {
    autoplaySlides()
    setShouldHideLeftArrow(!infinite && currentImageIndex === 0)
    setShouldHideRightArrow(!infinite && currentImageIndex === maxIndex)
  });

  const maxIndex = images.length-1

  const handleRightArrowClick = () => {
    animatedTransition && transit('right')
    const newIndex = currentImageIndex === maxIndex ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newIndex)
    setCurrentImage(images[newIndex])
  }

  const handleLeftArrowClick = () => {
    animatedTransition && transit("left")
    const newIndex = currentImageIndex === 0 ? maxIndex : currentImageIndex - 1
    setCurrentImageIndex(newIndex)
    setCurrentImage(images[newIndex])
  }

  const transit = (direction) => {
    setTransition("transition-" + direction);
    setTimeout(() => {
      setTransition('');
    }, 500);
  }

  const autoplaySlides = () => {
    autoplay && setTimeout(() => handleRightArrowClick(), autoplaySpeed)
  }

  const handleDotsClick = (index) => {
    setCurrentImageIndex(index)
    setCurrentImage(images[index])
  }

  return (
    <div className='slide-container'>
      <img className={transition} src={currentImage} />
      {shouldShowArrows && (
        <>
          {!shouldHideLeftArrow ? (
            <div className='arrow-left'
              onClick={() => {
                handleLeftArrowClick()
              }}
            >
              <img src={
                customArrows 
                ? customArrowLeft
                : require(`../assests/icon-left-arrow-${arrowsColor}.png`
                )}
              />
            </div>
          ) : null }
          {!shouldHideRightArrow ? (
            <div className='arrow-right'
              onClick={() => {
                handleRightArrowClick()
              }}
            >
              <img src={
                customArrows
                ? customArrowRight
                : require(`../assests/icon-right-arrow-${arrowsColor}.png`)} />
            </div>
          ) : null }
        </>
      )}
      {dots && <Dots
        images={images}
        currentImageIndex={currentImageIndex}
        handleDotsClick={handleDotsClick}
      />}
    </div>
  )
}
