import styled from "styled-components"
import Navigation from "./navigation"
import SettingLeft from "./setting_left";

const Container = styled.div`
    height: 900px;
`;

// Right Details Start
const CartCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 78%;
    margin-left: 22%;
    margin-top: 5.5%;
`;

const CartTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid black;
`;

const Title = styled.h1`
    color: #000;
    font-family: PT Sans;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const ItemCon = styled.div`
    border: 0.5px solid #CED4DA;
    background: #E9ECEF;
    box-shadow: -5px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    margin: 10px;
    width: 96%;
    padding: 15px 15px;
`;

const Img = styled.img`
    border-radius: 7px;
    width: 120px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
`;

const H6 = styled.h3`
    margin-top: 0;
    margin-bottom: 15p;
`;

const Spec = styled.tr`
    font-size: 16px;
    font-weight: 400;
`;

const Span = styled.td`
    font-size: 16px;
    font-weight: bold;
    width: 60px;
`;

// Global Component Start
const A = styled.a`
    text-decoration: none;
    color: black;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin-bottom: 20px;

    width: 38px;
    height: 40px;

`;
// Global Component End

const DeleteBtn = styled(A)`
    margin-bottom: 0px;

    &:hover {
        filter: grayscale(40%) brightness(60%);
    }
`;

const BtnCon = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
`;

const Icn = styled.img` 
    width: 25px;
    margin-top: 8px;
    padding-left: 5px;
`;

const Icn1 = styled.img`
    margin-top: 4px;
    padding-right: 2px;

    filter: brightness(0%);

    &:hover{
        filter: grayscale(30%) brightness(70%);
    }
`;

// Right Details End

export default function Setting(){
    return (
        <Container>
            <Navigation />

            <SettingLeft />

            <CartCon>
                <CartTop>
                    <Title>My Wishlist</Title>
                </CartTop>

                {/* Item Start */}
                <ItemCon>
                    <Img src="Item/Item_Image.png" alt="Item" />

                    <Details>
                        <H6>Apple Iphone 15 Pro Max</H6>

                        <Spec>
                            <table>
                                <Spec>
                                    <Span>Color</Span>
                                    <td>: Black</td>
                                </Spec>

                                <Spec>
                                    <Span>Storage</Span>
                                    <td>: 256 GB</td>
                                </Spec>

                            </table>
                        </Spec>

                    </Details>

                    <BtnCon>
                        {/* Add Cart Btn */}
                        <A href="#" title="Add to Cart">
                            <Icn1 src="AfterLogin/Add_Cart.png" alt="Cart"/>
                        </A>

                        {/* Delete Btn */}
                        <DeleteBtn href="#" title="Delete">
                            <Icn src="AfterLogin/Delete.png" alt="Delete" />
                        </DeleteBtn>

                    </BtnCon>

                </ItemCon>
                {/* Item End */}

                
            </CartCon>



        </Container>
    )
}