import styled from "styled-components"
import Navigation from "./navigation";
import CategoryLeft from './category_left';

// Cart Top Start
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

const H1 = styled.h1`
    color: #000;
    font-family: PT Sans;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const IconCon = styled.div`
    display: flex;
    align-items: center;
    margin-left: 72%;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    padding: 0 10px;

    filter: grayscale(100%) brightness(0);
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
    }
`;
// Cart Top End

//  Cart Item Start
const CartItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 99.86%;
    height: 390px;
    margin: 10px 10px -90px 10px;
    justify-content: center;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 280px;
    margin-right: 20px;

    border-radius: 5px;
    border: 0.5px solid #CED4DA;
    background: #DEE2E6;
    box-shadow: -5px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ItemImg = styled.img`
    width: 210px;
    height: 200px;
`;

const ItemTxtCon = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    flex-direction: column;
    justify-content: center;
`;

const H2 = styled.h2`
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
    padding: 0;
`;

const P = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
`;

export default function Category(){

    return(
        <div>
            {/* Navigation Start */}
            <Navigation/>
            {/* Navigation End */}
            
            {/* Left Bar Start */}
            <CategoryLeft/>
            {/* Left Bar End */}

            <CartCon>
                <CartTop>
                    <H1>Phone</H1>

                    <IconCon>
                        <IconBtn>
                            <Icon src="AfterLogin/Like_Icon.png" title="Like"/>
                        </IconBtn>

                        <IconBtn>
                            <Icon src="AfterLogin/Shopping_Cart.png" title="Cart"/>
                        </IconBtn>

                        <IconBtn>
                            <Icon src="AfterLogin/Coupon_Icon.png" title="Coupon"/>
                        </IconBtn>
                    </IconCon>

                </CartTop>

                <CartItem>
                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                </CartItem>

                <CartItem>
                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                    <Item>
                        <ItemImg src="Item/Item_Image.png" alt="Item Image" /> 
                        <ItemTxtCon>
                            <H2>Iphone 15 Pro Max Invisible Casing</H2>
                            
                            <P>RM 1500.90</P>
                        </ItemTxtCon>
                    </Item>

                </CartItem>
            </CartCon>

        </div>
    )
}