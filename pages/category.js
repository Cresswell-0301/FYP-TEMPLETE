import styled from "styled-components";
import CategoryLeft from './category_left';
import Navigation from "./navigation";

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
    height: fit-content;
    margin: 12px 10px 25px 10px;
`;

const A = styled.a`
    text-decoration: none;
    color: black;
    cursor: default;
`;

const ItemImg = styled.img`
    width: 210px;
    height: 200px;
`;

const ItemTxtCon = styled.div`
    display: flex;
    width: 100%;
    height: 110px;
    flex-direction: column;
    justify-content: center;
`;

const DetailCon = styled.div`
    margin-top: -38px;
`;

const OtherCon = styled.div`
    display: flex;
    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    width: 100%;
    height: 100%;
    margin-top: -38px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 320px;
    margin-right: 25px;

    border-radius: 5px;
    border: 0.5px solid #CED4DA;
    background: #DEE2E6;
    box-shadow: -5px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Btn = styled.a`
    /* background-color: #CED4DA; */
    background-color: transparent;
    border: none;
    height: 45px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: black;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    cursor: default;

    &:hover {
        background: #F1645B;
        color: white;
    }
`;

const LeftBtn = styled(Btn)`
    width: 70%;
    border-bottom-left-radius: 5px;
    margin-right: 0;
`;

const Img = styled.img`
    margin-right: 8px;
`;

const RightBtn = styled(Btn)`
    width: 30%;
    border-bottom-right-radius: 10px;
    margin-left: 0;
`;

const RBtnIcon = styled.img`
    width: 25px;
    height: 25px;
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
                        <A href="./setting">
                            <IconBtn>
                                <Icon src="AfterLogin/Like_Icon.png" title="Like"/>
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

                {/* Row Item Start */}
                <CartItem>

                    {/* Item 1 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 1 End */}

                    {/* Item 2 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 2 End */}

                    {/* Item 3 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 3 End */}

                    {/* Item 4 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 4 End */}

                    {/* Item 5 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 5 End */}

                </CartItem>
                {/* Row Item End */}

                {/* Row Item Start */}
                <CartItem>

                    {/* Item 1 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 1 End */}

                    {/* Item 2 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 2 End */}

                    {/* Item 3 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 3 End */}

                    {/* Item 4 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 4 End */}

                    {/* Item 5 Start */}
                    <Item>
                        <A href="#">
                            <ItemImg src="./Item/Item_Image.png" alt="Item Image" /> 
                            <ItemTxtCon>

                                {/* Item Detail Start */}
                                <DetailCon>
                                    <H2>Iphone 15 Pro Max Invisible Casing</H2>
                                    <P>RM 1500.90</P>
                                </DetailCon>
                                {/* Item Detail End */}

                            </ItemTxtCon>
                        </A>

                        {/* Cart / Like Icon Start */}
                        <OtherCon>
                            <LeftBtn href="#">
                                <Img src="./Item/Cart_Icon.png" alt="Cart" />
                                <p>Add to Cart</p>
                            </LeftBtn>

                            <RightBtn href="#">
                                <RBtnIcon src="AfterLogin/Like_Icon.png" title="Like"/>
                            </RightBtn>
                        </OtherCon>
                        {/* Cart / Like Icon End */}
                    </Item>
                    {/* Item 5 End */}

                </CartItem>
                {/* Row Item End */}
                
            </CartCon>

        </div>
    )
}