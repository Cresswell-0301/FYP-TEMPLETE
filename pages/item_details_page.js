import styled from "styled-components"
import Navigation from "./navigation"

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

const SharedImg  =styled.img`
    border-radius: 7px;
`;

const BigImg = styled(SharedImg)`
    width: 250px;
    height: 300px;
`;

const ImgCon = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 70px;
    margin-top: 50px;
    justify-content: space-between;
`;

const Img = styled(SharedImg)`
    width: 60px;
    background-color: blue;
`;

export default function DetailPage(){
    return (
        <div>
            <Navigation/>

            <Container>
                <LeftCon>
                    <BigImg src="Item/Item_Image.png" alt="Image"/>

                    <ImgCon>
                        <Img src="Item/Item_Image.png" alt="Image"/>
                        <Img src="Item/Item_Image.png" alt="Image"/>
                        <Img src="Item/Item_Image.png" alt="Image"/>
                        <Img src="Item/Item_Image.png" alt="Image"/>
                        <Img src="Item/Item_Image.png" alt="Image"/>
                    </ImgCon>
                </LeftCon>
            </Container>
        </div>
    )
}