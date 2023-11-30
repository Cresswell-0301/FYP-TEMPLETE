import React, { useEffect } from 'react';
import styled from 'styled-components';

const styles = `
/* Slideshow */
.slideshow {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 80px;
//   margin-right: auto;
  overflow: hidden;
  width: 712px;
  height: auto;
  z-index: 1;
}

.slideshowSlider {
  white-space: nowrap;
  transition: ease 1000ms;
  margin-top: 80px;
}

.slide {
  display: inline-block;
  height: 356px;
  width: 100%;
  border-radius: 40px;
}

/* Buttons */
.slideshowDots {
  margin-top: -45px;
  position: absolute;
  z-index: 3;
  width: 712px;
  text-align: center;
}

.slideshowDot {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 7px;
  margin-bottom: 0px;
  margin-left: 7px;
  background-color: #c4c4c4;
}

.slideshowDot.active {
  background-color: #6a0dad;
}
`;

// Image Array URLs
const imageUrls = ["SlideShow/image1.png", "SlideShow/image2.png", "SlideShow/image3.png", "SlideShow/image4.png", "SlideShow/image5.png"];

// Delay between slides
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const isReversed = React.useRef(false);

  // Change Slide Effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isReversed.current) {     // If reversed, go to previous slide
        setIndex((prevIndex) => (prevIndex - 1 < 0 ? imageUrls.length - 1 : prevIndex - 1));
      } else {     // If not reversed, go to next slide
        setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }
    }, delay);

    // Clear timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  // Change slideshow direction
  useEffect(() => {
    if (index === 4) {  // If the last slide, reverse the direction
      isReversed.current = true;
    } else if (index === 0) {  // If the first slide, set the direction forward
      isReversed.current = false;
    }
  }, [index]);

  return (
    <div>
      <style>{styles}</style>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imageUrls.map((imageUrl, i) => (
            <img className="slide" key={i} src={imageUrl} alt={`Slide ${i + 1}`} />
          ))}
        </div>
        <div className="slideshowDots">
          {imageUrls.map((_, i) => (
            <div
              key={i}
              className={`slideshowDot${index === i ? " active" : ""}`}
              onClick={() => {
                setIndex(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}