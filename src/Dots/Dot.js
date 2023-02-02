import React from 'react'
import './Dot.css'

export const Dot = ({ handleDotsClick, index, currentImageIndex }) => {
	return (
	  <div className={currentImageIndex === index ? 'dot active' : 'dot'}
      onClick={() => handleDotsClick(index)}
    >
    </div>
	)
}