import React, { useEffect } from 'react';
import styled from 'styled-components';

const Slideshow = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 30px;
  overflow: hidden;
  width: 712px;
  height: auto;
  z-index: 1;
`;

const SlideshowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  margin-top: 30px;
  transform: translate3d(${props => -props.index * 100}%, 0, 0);
`;

const Slide = styled.img`
  display: inline-block;
  height: 356px;
  width: 100%;
  border-radius: 40px;
`;

const SlideshowDots = styled.div`
  margin-top: -48px;
  position: absolute;
  z-index: 3;
  width: 712px;
  text-align: center;
`;

const SlideshowDot = styled.button`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 7px;
  margin-bottom: 0px;
  margin-left: 7px;
  background-color: ${props => (props.index === props.i ? '#6a0dad' : '#c4c4c4')};
`;

// Image Array URLs
const imageUrls = ["SlideShow/image1.png", "SlideShow/image2.png", "SlideShow/image3.png", "SlideShow/image4.png", "SlideShow/image5.png"];

// Delay between slides
const delay = 2500;

export default function SlideShow() {
  const [index, setIndex] = React.useState(0);
  const isReversed = React.useRef(false);

  // Change Slide Effect
  useEffect(() => {
    let timeoutId = setTimeout(() => {
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
        <Slideshow>
            <SlideshowSlider index={index}>
                {imageUrls.map((imageUrl, i) => (<Slide key={i} src={imageUrl} alt={`Slide ${i + 1}`} />))}
            </SlideshowSlider>
            <SlideshowDots>
                {imageUrls.map((_, i) => (
                    <SlideshowDot key={i} index={index} i={i} onClick={() => {setIndex(i);}}></SlideshowDot>
                ))}
            </SlideshowDots>
        </Slideshow>
    </div>
  );
}