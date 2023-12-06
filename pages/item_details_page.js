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
    height: fit-content;
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
    flex: 0 0 23%; /* width for each slide in a row */
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

// Right Top Start
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

// Price Start
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
// Price Start

// Right Top End

// Right Ship Start
const DetailCon = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 10px 0;
    padding: 0 15px;
    height: max-content;
`;

const ImgCon = styled.div`
    width: 4%;
`
const SelectionIcon = styled(ProtecImg)`
    width: 30px;
    height: 30px;
`;

const SelectTxt = styled.h3`
    width: 13%;
    height: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #495057;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`;

const ShipDetail = styled.div`
    width: 83%;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`;

const DetRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
`;

const P = styled.p`
    color: #000;

    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin: 0;
    width: 20%;
`;

const P1 = styled(P)`
    width: 80%;
`;

const SubCon = styled(ShipDetail)`
    /* margin-top: 0; */
`;

const BtnRow = styled(DetRow)`
    width: 70%;
`;

const Button = styled.button`
    background: transparent;
    border-radius: 8px;
    border: 1px solid #6C757D;
    min-width: 10%;
    width: max-content;
    height: 35px;
    margin-right: 15px;
    margin-bottom: 15px;

    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background: #343A40;
        color: #F8F9FA;
    }
`;

const BtnCon = styled(BtnRow)`
    justify-content: center;
    align-items: center;
    text-align: center;

    margin: 20px 0 0 0;
    
    /* background-color: red; */
`;

const SharedBtn = styled(Button)`
    
`;

const AddBtn = styled(SharedBtn)`
    margin-right: 15px;

    &:hover{
        border: 1px solid #F73636;
        background: #FFBCBC;
        color: #000;
    }
`;

const BuyBtn = styled(SharedBtn)`
    margin-left: 15px;

    &:hover{
        background: #F73636;
        border: none;
    }
`;

const IDBtn = styled(Button)`
    font-weight: 600;
`;

const Input = styled.input`
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;

    min-width: 10%;
    height: 35px;
    padding: 0;
    margin-right: 10px;
    border: none;
    background-color: transparent;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

// Right Ship End

// Bottom Start
const BtmContainer = styled(Container)`
    margin-top: 0;
    background: #F8F9FA;
    width: 95%;
    justify-content: center;
`;

const DecpCon = styled.div`
    width: 90%;
    height: fit-content;
    border-radius: 8px;
    border: 1px solid #6C757D;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;

    border-radius: 8px 8px 0px 0px;
    background: #E9ECEF;
    height: 80px;
    width: 98%;
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 20px;
    padding-left: 2%;
`;

const TextCon = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 0 20px 0;
    padding: 0 0 0 20px;
`;

const IconCon = styled.div`
    width: 5%;
    padding-top: 5px;
    text-align: center;
`;

const IconImg = styled.img`
`;

const Spec = styled.h2`
    width: 15%;
    color: #6C757D;

    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    padding: 0;

`;

const Text = styled.p`
    width: 50%;

    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
`;

// Bottom End

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
        
    const [value, setValue] = useState(0);
    const min = 0;
    const max = 999;

    const increment = () => {
        if (value < max) {
            setValue(value + 1);
        }
    };

    const decrement = () => {
        if (value > min) {
            setValue(value - 1);
        }
    };

    const handleChange = (e) => {
        let inputValue = e.target.value;

        if (inputValue >= min && inputValue <= max) {
            setValue(inputValue);
        }
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
                        
                        {/* 3 Icon */}
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

                    <DetailCon>
                        <ImgCon><SelectionIcon src="Item/Ship_Icon.png" alt="Ship" /></ImgCon>
                        <SelectTxt>Shipping</SelectTxt>

                        <ShipDetail>
                            <DetRow>
                                <P>Shipping From</P>
                                <P1>: MALAYSIA</P1>
                            </DetRow>

                            <DetRow>
                                <P>Shipping Fee</P>
                                <P1>: MYR 50.00</P1>
                            </DetRow>
                        </ShipDetail>
                    </DetailCon>

                    <DetailCon>
                        <ImgCon><SelectionIcon src="Item/Color_Icon.png" alt="Ship" /></ImgCon>
                        <SelectTxt>Color</SelectTxt>

                        <SubCon>
                            <BtnRow>
                                <Button>Pink</Button>
                                <Button>Blue</Button>
                                <Button>Purple</Button>
                                <Button>Violet</Button>
                                <Button>Black Titanium</Button>
                            </BtnRow>
                        </SubCon>
                    </DetailCon>

                    <DetailCon>
                        <ImgCon><SelectionIcon src="Item/Capacity_Icon.png" alt="Ship" /></ImgCon>
                        <SelectTxt>Capacity</SelectTxt>

                        <SubCon>
                            <BtnRow>
                                <Button>64 GB</Button>
                                <Button>128 GB</Button>
                                <Button>256 GB</Button>
                                <Button>512 GB</Button>
                                <Button>1 TB</Button>
                            </BtnRow>
                        </SubCon>
                    </DetailCon>

                    <DetailCon>
                        <ImgCon><SelectionIcon src="Item/Qty_Icon.png" alt="Ship" /></ImgCon>
                        <SelectTxt>Quantity</SelectTxt>

                        <SubCon>
                            <BtnRow>
                                <IDBtn onClick={increment}>+</IDBtn>
                                <Input type="number" min={0} max={999} value={value} onChange={handleChange} />
                                <IDBtn onClick={decrement}>-</IDBtn>
                            </BtnRow>
                        </SubCon>
                    </DetailCon>

                    <BtnCon>
                        <AddBtn>Add to Cart</AddBtn>
                        <BuyBtn>Buy Now</BuyBtn>
                    </BtnCon>

                </RightCon>
            </Container>

            <BtmContainer>
                <DecpCon>
                    <Title>Product Specification</Title>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>Processor</Spec>
                        <Text>A15 Bionic</Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>OS</Spec>
                        <Text>IOS</Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>Weight</Spec>
                        <Text>179g</Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>Dimension</Spec>
                        <Text>Abcdefg</Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>Display</Spec>
                        <Text>OLED</Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>Memory</Spec>
                        <Text>64GB / 128GB / 256GB / 512GB</Text>
                    </TextCon>
                    
                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>NFC</Spec>
                        <Text>YES</Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>Camera</Spec>
                        <Text>
                            48 MP, f/1.6, 26mm (wide), 1/1.56", 1.0µm, dual pixel PDAF, sensor-shift OIS
                            12 MP, f/2.4, 13mm, 120˚ (ultrawide)
                        </Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>Color</Spec>
                        <Text>Pink / Blue / Violet</Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>Loud Speaker</Spec>
                        <Text>Yes, with stereo speakers</Text>
                    </TextCon>

                    <TextCon>
                        <IconCon><IconImg src="Item/Moon.png" alt="Icon"/></IconCon>
                        <Spec>3.5mm jack</Spec>
                        <Text>No</Text>
                    </TextCon>

                </DecpCon>
            </BtmContainer>
        </div>
    )
}