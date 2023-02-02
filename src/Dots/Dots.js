import React, { useState, useEffect } from 'react'
import { Dot } from './Dot.js'
import './Dots.css'

export const Dots = ({ images, handleDotsClick, currentImageIndex }) => {
	return (
		<div className='dots-container'>
			{images.map(image => (
				<Dot 
				  index={images.indexOf(image)}
					key={image}
				  handleDotsClick={handleDotsClick}
					currentImageIndex={currentImageIndex}
				/>
			))}
		</div>
	)
}