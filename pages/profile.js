import React, { useRef , useState } from 'react';
import styled from "styled-components";
import Navigation from "./navigation"
import SettingLeft from "./setting_left"

const CartCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 78%;
    height: 100%; /* Add this line */

    margin-left: 22%;
    margin-top: 5.5%;
`;

const CartTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    height: auto;
    border-bottom: 1px solid black;
`;

const Title = styled.h1`
    color: #000;
    font-family: PT Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0px;
`;

const MiniTitle = styled.h3`
    margin: 0;
    color: #000;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CartDet = styled.div`
    width: 93%;
    height: 540px;
    display: flex;
    border-radius: 10px;
    background: #E9ECEF;

    box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    padding-top: 2%;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 0px;
    align-items: center;
`;

const Row1 = styled(Row)`
    margin-bottom: 30px;
`;

const Img = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #343A40;
    background-position: center;
    background-size: cover;
    background-image: ${props => props.image ? `url(${props.image})` : 'url("AfterLogin/User_Icon.png")'};
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
    width: 100%;
`;

const Inputfile = styled.input`
    background-color: red;
    width: max-content;
    margin-left: -4.4%;
    display: none;
`;

const LabelBtn = styled.label`
    width: 15%;
    height: 32%;
    border-radius: 8px;
    border: 1px solid #343A40;
    background: #343A40;
    color: #F8F9FA;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 1%;
    z-index: 3;
    cursor: pointer;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
`;

const Span = styled.span`
    color: #6C757D;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
`;

const Span2 = styled(Span)`
    width: 12%;
`;

const MainDet = styled.h3`
    color: #000;
    width: 8%;
    text-align: right;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 2%;
`;

const Input = styled.input`
    height: 25px;
    width: 25%;
    background-color: transparent;
    border: none;
    /* border-bottom: 1px solid gray; */
    padding-left: 10px;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
`;

const Btn = styled.button`
    border-radius: 10px;
    border: 1px solid #343A40;
    background: #343A40;
    color: #F8F9FA;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    width: 10%;
    height: 8%;
    margin: 4% 0 0 10%;
    cursor: pointer;
`;

export default function Profile() {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    // Change Image
    const [image, setImage] = useState(null);

    const loadFile = (event) => {
        if (event.target.files.length > 0) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <div>
            <Navigation/>
            <SettingLeft/>

            <CartCon>
                <CartTop>
                    <Title>My Profile</Title>
                    <MiniTitle>Manage and Protect your account</MiniTitle>
                </CartTop>

                <CartDet>
                    <form method="post">
                        <Row1>
                            <Img image={image}></Img>

                            <Col>
                                <Inputfile type="file" ref={fileInputRef} onChange={loadFile}/>
                                <LabelBtn for="file" onClick={handleClick}>
                                    Select Image
                                </LabelBtn>

                                <Div>
                                    <Span2>File size</Span2>
                                    <Span>: Maximum 1 MB</Span>
                                </Div>

                                <Div>
                                    <Span2>File extension</Span2>
                                    <Span>: . JPEG, . PNG</Span>
                                </Div>
                            </Col>
                        </Row1>

                        <Row>
                            <MainDet>Username</MainDet>
                            <Input type="text" placeholder="Username"/>
                        </Row>

                        <Row>
                            <MainDet>Name</MainDet>
                            <Input type="text" placeholder="Name"/>
                        </Row>

                        <Row>
                            <MainDet>Email</MainDet>
                            <Input type="email" placeholder="xxx@gmail.com"/>
                        </Row>

                        <Row>
                            <MainDet>Phone No</MainDet>
                            <Input id="phone" type="tel" placeholder="01111379833"/>
                        </Row>

                        <Btn>Save</Btn>
                    </form>
                </CartDet>
            </CartCon>
        </div>
    )
}