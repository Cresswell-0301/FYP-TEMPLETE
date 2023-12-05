import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import Navigation from "./navigation"
import StarRating from "./rating";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    margin-top: 90px;
    width: 95%;
    height: 1965px;
    background: #F8F9FA;
    padding: 20px 10px;
`;

const LeftCon = styled.div`
    width: 30%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

// Slide Start
const SharedImg  =styled.img`
    border-radius: 7px;
`;

const BigImg = styled(SharedImg)`
    width: 250px;
    height: 300px;
`;

const SlideshowContainer = styled.div`
    position: relative;
    max-width: 800px;
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
`;

const Slides = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
    flex: 0 0 25%; /* 25% width for each slide in a row */
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const NavigationButton = styled.a`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    cursor: pointer;
`;

const PrevButton = styled(NavigationButton)`
    left: 10px;
`;

const NextButton = styled(NavigationButton)`
    right: 10px;
`;
// Slide End

// Right Side Start
const CartTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    margin-left: 10px;
    border-bottom: 1px solid black;
`;

const H1 = styled.h1`
    color: #000;
    font-family: PT Sans;
    font-size: 35px;
    font-weight: 400;
    width: 70%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
`;

const IconCon = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    margin-left: 20%;
`;

const A = styled.a`
    text-decoration: none;
    color: black;
    cursor: default;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    padding: 0 10px;

    filter: grayscale(100%) brightness(0);
`;

const Circle = styled.div`
    border-radius: 100%;
    width: 25px;
    height: 25px;
    position: absolute;
    margin-top: -32px;
    margin-left: 17.5px;
    text-align: center;
    color: red;
    font-weight: bold;
`;

const IconBtn = styled.button`
    border-radius: 10px;
    margin: 0 4px;
    border: 1.5px solid lightgray;

    &:hover{
        background: #F1645B;

        ${Icon} {
            filter: brightness(100%);
        }

        ${Circle} {
            color: black;
        }
    }
`;
// Right Side End
export default function DetailPage(){
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        showSlides();
      }, [slideIndex]);
    
      const changeSlide = (n) => {
        setSlideIndex((prevIndex) => prevIndex + n);
      };
    
      const showSlides = () => {
        const slides = document.querySelector('.slides');
        const totalSlides = slides.children.length;
        const maxIndex = totalSlides - 4; // Displaying 4 slides at a time
    
        if (slideIndex > maxIndex) {
          setSlideIndex(0);
        }
        if (slideIndex < 0) {
          setSlideIndex(maxIndex);
        }
    
        const translateValue = -slideIndex * 25; // 25% width for each slide
        slides.style.transform = `translateX(${translateValue}%)`;
      };

    return (
        <div>
            <Navigation/>

            <Container>
                <LeftCon>
                    <BigImg src="Item/Item_Image.png" alt="Image"/>

                    {/* Scroll Image Start */}
                    <SlideshowContainer>
                        <Slides className="slides">
                            <Slide>
                                <Image src="Item/Item_Image.png" alt="Image 1" />
                            </Slide>

                            <Slide>
                                <Image src="Item/Item_Image.png" alt="Image 1" />
                            </Slide>

                            <Slide>
                                <Image src="Item/Item1.jpg" alt="Image 2" />
                            </Slide>

                            <Slide>
                                <Image src="Item/Item2.png" alt="Image 3" />
                            </Slide>

                            <Slide>
                                <Image src="Item/Item3.jpg" alt="Image 4" />
                            </Slide>

                            <Slide>
                                <Image src="Item/Item4.jpg" alt="Image 5" />
                            </Slide>
                        </Slides>

                        <PrevButton onClick={() => changeSlide(-1)}>&#10094;</PrevButton>
                        <NextButton onClick={() => changeSlide(1)}>&#10095;</NextButton>
                    </SlideshowContainer>
                    {/* Scroll Image End */}
                    
                    <StarRating />
                </LeftCon>

                <CartTop>
                    <H1>Iphone 15 Pro Max</H1>

                    <IconCon>
                        <A href="./setting">
                            <IconBtn>
                                <Icon src="AfterLogin/Like_Icon.png" title="Like"/>
                                <Circle>100</Circle>
                            </IconBtn>
                        </A>
                            
                        <A href="#">
                            <IconBtn>
                                <Icon src="AfterLogin/Shopping_Cart.png" title="Cart"/>
                            </IconBtn>
                        </A>

                        <A href="#">
                            <IconBtn>
                                <Icon src="AfterLogin/Coupon_Icon.png" title="Coupon"/>
                            </IconBtn>
                        </A>

                    </IconCon>

                </CartTop>
            </Container>
        </div>
    )
}