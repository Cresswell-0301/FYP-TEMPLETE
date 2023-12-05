import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import Navigation from "./navigation"
import StarRating from "./rating";
import SideIcon from "./3icon.js";

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

const Image = styled(SharedImg)`
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
const RightCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 15px;
`;

const CartTop = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    border-bottom: 1px solid black;
    margin-bottom: 12px;
`;

const Promotion = styled.span`
    width: 20%;
    height: max-content;
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 7px;
    border: none;
    margin-right: 10px;
    padding: 5px 0;
    background: #014BA8;
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

const PriceCon = styled.div`
    display: flex;
    flex-direction: row;
    height: 120px;
    margin: 0 10px;
    padding: 0 15px;
    border-radius: 8px;
    background: #E9ECEF;
`;

const PriceLeftCon = styled.div`
    display: flex;
    width: 75%;
    height: 100%;
    flex-direction: column;
`;

const Up = styled.div`
    display: flex;
    flex-direction: row;
    height: 70%;
    align-items: center;
`;

const H3 = styled.h3`
    color: #FC0D0D;
    font-family: Andika;
    font-size: 48px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
`;

const SharedSpan = styled.span`
    margin-left: 15px;
    font-size: 20px;
`;

const SpanTxt = styled(SharedSpan)`
    color: #938F8F;
    text-decoration: line-through;
`;

const SpanPromo = styled(SharedSpan)`
    width: fit-content;
    padding: 5px 8px;
    color: #F8F9FA;
    text-align: center;
    font-family: Poppins;
    border-radius: 8px;
    background: #014BA8;
`;

const Bottom =styled.div`
    height: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
`;
const H4 = styled.h4`
    color: #FC0D0D;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const ProtecImg = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;
`;

const Chop = styled.div`
    width: 25%;
    text-align: center;
    margin-top: -3px;
`;

const ChopImg = styled.img`
    width: 107.527px;
    height: 126px;
    transform: rotate(-14deg);
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

                <RightCon>
                    <CartTop>
                        <H1><Promotion>Promotion</Promotion>Iphone 15 Pro Max</H1>

                        <SideIcon />
                    </CartTop>

                    <PriceCon>
                        <PriceLeftCon>
                            <Up>
                                <H3>MYR 2340.00</H3>
                                <SpanTxt>MYR 2599.00</SpanTxt>
                                <SpanPromo>10% OFF</SpanPromo>
                            </Up>

                            <Bottom>
                                <ProtecImg src="Item/Protect_Icon.png" alt="Icon"/>
                                <H4>100% Authentic Guarantee</H4>
                            </Bottom>
                        </PriceLeftCon>

                        <Chop>
                            <ChopImg src="Item/Red.png" alt="Chop Icon" />
                        </Chop>

                    </PriceCon>
                </RightCon>
            </Container>
        </div>
    )
}