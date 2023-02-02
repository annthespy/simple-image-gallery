import './Gallery.css'
import { Slide } from './Slide/Slide.js'

function Gallery( { images, params } ) {

  const { height, width } = params

  return (
    images.length > 0 ? (
      <div className="gallery-container" style={{width: width, height: height}}>
        <Slide images={images} params={params}/>
      </div>
    ) : (
      <div className="no-images">
        <div className='text'>To render this component please pass the required props</div>
        <div className='text'>For more information refer to README</div>
      </div>
    )
  )
}

export default Gallery
