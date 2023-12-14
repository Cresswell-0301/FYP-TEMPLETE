import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Main = styled.div`
    width: 100%;
`;

const Container = styled.div`
    background-color: lightblue;
    border-radius: 100%;
    height: 80px;
    width: 80px;
    position: fixed;
    right: 1vw;
    bottom: 1vw;
    cursor: pointer;
    z-index: 2;

    &:hover {
        background-color: rgb(162, 233, 255);
    }
`;

const Img = styled.img`
    position: absolute;
    top: 14px;
    left: 13px;
    height: 55px;
    width: 55px;
`;

const ContainerBox = styled.div`
    background-color: white;
    height: 300px;
    width: 320px;
    position: fixed;
    right: 1vw;
    bottom: 154px;
    font-family: Arial, Helvetica, sans-serif;
    display: none;
    scroll-behavior: smooth;
    overflow: auto;
`;

const HeadContainer = styled.div`
    background-color: lightblue;
    border-radius: 20px 20px 0px 0px;
    width: 320px;
    height: 60px;
    margin-top: -59px;
    display: grid;
    position: fixed;
`;

const H1 = styled.h1`
    color: black;
    font-size: 16px;
    font-weight: bold;
    padding: 2px 10px;
    position: absolute;
    top: 7px;
`;

const P = styled.p`
    color: black;
    font-size: 13px;
    font-weight: 500;
    padding: 0 10px;
    position: absolute;
    top: 30px;
`;

const CloseBtn = styled.div`
    position: absolute;
    top: 15px;
    right: 18px;
    display: block;
    font-size: 0;
    background-color: red;

    &::before , &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 20px;
        background-color: #acacac;
        transform: rotate(45deg) translate(-50%, -50%);
        transform-origin: top left;
        content: '';
    }

    &::after {
        transform: rotate(-45deg) translate(-50%, -50%);
    }

    &::before , &::after {
        width: 2px;
        height: 20px;
        border-radius: 10px;
    }

    &:hover {
        &::before , &::after {
            background-color: red;
        }
    }
`;

const TimeBox = styled.div`
    text-align: center;
    margin-top: -5px;
    margin-bottom: -15px;
`;

const P1 = styled.p`
    padding-top: 6px;
    padding-bottom: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color: gray;
    font-size: 12px;
`;

const MessageBox = styled.div`
    background-color: lightgray;
    width: 55%;
    height: auto;
    min-height: 55px;
    padding: 1px 8px;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
`;

const P2 = styled.p`
    color: black;
    font-weight: 500;
    font-size: 14px;
`;

const Span = styled.span`
    padding-left: 4px;
    animation-name: hi-animation;  /* Refers to the name of your @keyframes element below */
    animation-duration: 2s;        /* Change to speed up or slow down */
    animation-iteration-count: infinite;  /* Never stop waving :) */
    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
    display: inline-block;      /* Must be inline for the animation work */

    @keyframes hi-animation {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
        100% { transform: rotate( 0.0deg) }
    }
`;

const MessageBoxRight = styled(MessageBox)`
    background-color: transparent;
    width: 60%;
    height: auto;
    min-height: 55px;
    margin-right: 10px;
    margin-left: auto;
    margin-bottom: 0;
`;

const RpyBox = styled(MessageBox)`
    display: none;
`;

const Btn = styled.button`
    border: 0.75px solid lightblue;
    border-radius: 10px;
    width: 100%;
    padding: 5px 10px;
    text-align: left;
    color: black;
    font-size: 14px;
    margin-bottom: 10px;
    display: none;

    cursor: pointer;

    &:hover {
        border: 0.75px solid blue;
        background-color: lightgray;
    }
`;

const BtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 104px;
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-bottom: 10px;
    width: 320px;
    height: 40px;
    position: fixed;
`;

const P3 = styled.p`
    padding: 10px 88.9px;
    font-size: 13px;
    font-weight: bold;
    color: black;
    text-align: center;
    height: fit-content;
`;

const ChatBtn = styled.button`
    background-color: lightblue;    
    border-radius: 15px;
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    &:hover {
        background-color: rgb(136, 187, 205);
        border: 0.5px solid gray;

        ${P3} {
            color: white;
        }
    }
`;

export default function Chatbox(){
    // Show Message Box
    const ShowMessage = () => {
        const box = document.getElementById("ContainerBox");
        
        const b1 = document.getElementById("b1");
        const b2 = document.getElementById("b2");
        const b3 = document.getElementById("b3");
        const b4 = document.getElementById("b4");
        const b5 = document.getElementById("b5");
        const b6 = document.getElementById("b6");        
        const b7 = document.getElementById("b7");
        const b8 = document.getElementById("b8");        

        const RpyBox = document.getElementById("RpyBox");
        const Rpytxt = document.getElementById("LeftRpy");

        if(!box.style.display || box.style.display == "none"){   // Display Chat Box if the Chat Box haven display            
            
            box.style.display = 'block';

            // Dot Dot Show Message
            const mss = document.getElementById("Message");
            const RealMss = document.getElementById("Left");
            const Selection = document.getElementById("Right");

            const messages = ["<P2>。</P2>", "<P2>。。</P2>", "<P2>。。。</P2>"];   // Define the dot messages to be displayed

            RealMss.style.display = 'none';
            Selection.style.display = 'none';

            setTimeout(function () {
                displayMessage(0);
            }, 100);

            function displayMessage(index) {
                if (index < messages.length) {
                    mss.innerHTML = messages[index];
                    mss.style.display = 'block';

                    setTimeout(function () {
                        mss.style.display = 'none';
                        displayMessage(index + 1);
                    }, 500);
                } else {
                    // After displaying all dot messages, set RealMss.style.display to 'block'
                    RealMss.style.display = 'block';

                    setTimeout(function(){
                        Selection.style.display = 'block';
                    },1000);
                }
            }
        } else {
            box.style.display = 'none'; // Close Chat Box if the Chat Box displayed

            b1.style.display = 'block';
            b2.style.display = 'block';
            b3.style.display = 'block';
            b4.style.display = 'block';
            b5.style.display = 'block';
            b6.style.display = 'block';
            b7.style.display = 'block';
            b8.style.display = 'block';

            RpyBox.style.display = 'none';
            Rpytxt.innerHTML = "";
        }
    };

    // To Messenger Chat
    const ChatPage = () => {
        location.href = 'https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0';
    };
    
    // Real Time JS
    const DisplayTime = () => {
        const [currentTime, setCurrentTime] = useState('');

        useEffect(() => {
            const intervalId = setInterval(() => {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');   /* Hour */
                const minutes = now.getMinutes().toString().padStart(2, '0');   /* Minute */
                const currentTimeString = `${hours}:${minutes}`;    /* Combine together */
                setCurrentTime(currentTimeString);
            }, 1000);   /* refresh every second to catch up with the current time */
            
            // Stop the time
            setTimeout(() => {
                clearInterval(intervalId);
            },1000);

            return () => clearInterval(intervalId);
        }, []);
    
        return currentTime;
    };

    // Button function
    const handleButtonClick = (value) => {
        const RpyBox = document.getElementById("RpyBox");
        const Rpytxt = document.getElementById("LeftRpy");

        RpyBox.style.display = 'block';

        if(value == 1){
            b2.style.display = 'none';
            b3.style.display = 'none';
            b4.style.display = 'none';
            b5.style.display = 'none';
            b6.style.display = 'none';
            b7.style.display = 'none';
            b8.style.display = 'none';

            Rpytxt.innerHTML = "Certainly! Click <a href='#' style='color: blue; text-decoration: underline;'>Here</a> to get the newest product information about our latest phone models, features, and pricing.";
        } 
        
        if(value == 2){
            b1.style.display = 'none';
            b3.style.display = 'none';
            b4.style.display = 'none';
            b5.style.display = 'none';
            b6.style.display = 'none';
            b7.style.display = 'none';
            b8.style.display = 'none';

            Rpytxt.innerHTML = "Sure, I can help with that. Click <a href='#' style='color: blue; text-decoration: underline;'>Here</a> to get our customer services help and please provide your order number to the customer services.";
        } 
        
        if(value == 3){
            b1.style.display = 'none';
            b2.style.display = 'none';
            b4.style.display = 'none';
            b5.style.display = 'none';
            b6.style.display = 'none';
            b7.style.display = 'none';
            b8.style.display = 'none';

            Rpytxt.innerHTML = "Of course! To assist you better, could you Click <a href='#' style='color: blue; text-decoration: underline;'>Here</a> and provide the order number or any relevant details regarding your payment? Our teams will look into it for you.";
        } 
        
        if(value == 4){
            b1.style.display = 'none';
            b2.style.display = 'none';
            b3.style.display = 'none';
            b5.style.display = 'none';
            b6.style.display = 'none';
            b7.style.display = 'none';
            b8.style.display = 'none';

            Rpytxt.innerHTML = "Sorry, currently, this function has not been enabled. Please drop a message in our <a href='#' style='color: blue; text-decoration: underline;'>Messenger</a> and describe the problem you're experiencing with your phone. Our team will do their best to assist you.";
        } 
        
        if(value == 5){
            b1.style.display = 'none';
            b2.style.display = 'none';
            b3.style.display = 'none';
            b4.style.display = 'none';
            b6.style.display = 'none';
            b7.style.display = 'none';
            b8.style.display = 'none';

            Rpytxt.innerHTML = "Thank you for reaching out. Currently, our product does not have a return and exchange policy. If you have any other questions or need further assistance, please feel free to contact our customer services through <a href='#' style='color: blue; text-decoration: underline;'>Messenger</a>. We are here to help and will do our best to provide the support you need. We appreciate your understanding!";
        } 
        
        if(value == 6){
            b1.style.display = 'none';
            b2.style.display = 'none';
            b3.style.display = 'none';
            b4.style.display = 'none';
            b5.style.display = 'none';
            b7.style.display = 'none';
            b8.style.display = 'none';

            Rpytxt.innerHTML = "Apologies for any inconvenience. Currently, our customer services function is not available here. Kindly consider reaching out to us through <a href='#' style='color: blue; text-decoration: underline;'>Messenger</a> to get assistance. We appreciate your understanding and look forward to helping you there. Thank you!";
        }

        if(value == 7){
            b1.style.display = 'none';
            b2.style.display = 'none';
            b3.style.display = 'none';
            b4.style.display = 'none';
            b5.style.display = 'none';
            b6.style.display = 'none';
            b8.style.display = 'none';

            Rpytxt.innerHTML = "Our Business Hours are as follows:<br/><br/>Monday - Friday<br/>9 am - 8 pm<br/><br/>Saturday<br/>10 am - 5 pm<br/><br/>Sunday & Public Holidays<br/>Closed<br/><br/>For further assistance, feel free to reach out to us through <a href='#' style='color: blue; text-decoration: underline;'>Messenger</a>. Thank you for choosing us!";
        }

        if(value == 8){
            b1.style.display = 'none';
            b2.style.display = 'none';
            b3.style.display = 'none';
            b4.style.display = 'none';
            b5.style.display = 'none';
            b6.style.display = 'none';
            b7.style.display = 'none';

            Rpytxt.innerHTML = "Our company is located at:<br/><br/>Persiaran Multimedia, 63100 Cyberjaya, Selangor.<br/><br/>For any inquiries or assistance, please don't hesitate to contact us through <a href='#' style='color: blue; text-decoration: underline;'>Messenger</a>. We look forward to serving you!";
        }
    };

    return (
        <div>
            <Main>
                <Container onClick={ShowMessage}>
                    <Img src="cs_icon.png" alt="Icon Error"/>
                    
                </Container>

                <ContainerBox id="ContainerBox">
                    <HeadContainer>
                        <H1>Customer Services</H1>
                        <P>Typically replies within a day</P>
                        <CloseBtn onClick={ShowMessage}></CloseBtn>
                    </HeadContainer>

                    <TimeBox>
                        <P1>{DisplayTime()}</P1>
                    </TimeBox>

                    <MessageBox>
                        <P2 id="Message"></P2>
                            
                        <div id="Left">
                            <P2>Hi there <Span>👋</Span></P2>
                            <P2>How can I assist you ?</P2>
                        </div>
                    </MessageBox>

                    <MessageBoxRight>

                        <div id="Right">
                            <Btn id="b1" onClick={() => handleButtonClick(1)}>Product Information</Btn>
                            <Btn id="b2" onClick={() => handleButtonClick(2)}>Order Status</Btn>
                            <Btn id="b3" onClick={() => handleButtonClick(3)}>Payment Status</Btn>
                            <Btn id="b4" onClick={() => handleButtonClick(4)}>Technical Support</Btn>
                            <Btn id="b5" onClick={() => handleButtonClick(5)}>Returns & Exchanges</Btn>
                            <Btn id="b6" onClick={() => handleButtonClick(6)}>Customer Services</Btn>
                            <Btn id="b7" onClick={() => handleButtonClick(7)}>Business Hours</Btn>
                            <Btn id="b8" onClick={() => handleButtonClick(8)}>Company Location</Btn>
                        </div>

                    </MessageBoxRight>

                    <RpyBox id="RpyBox">                            
                        <P2 id="LeftRpy"></P2>
                    </RpyBox>

                    <BtnBox>
                        <ChatBtn onClick={ChatPage}>
                            <P3>Need Help</P3>
                        </ChatBtn>
                    </BtnBox>
                </ContainerBox>
            </Main>
        
        </div>
    )
}