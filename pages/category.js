import styled from "styled-components"
import Navigation from "./navigation";
import CategoryLeft from './category_left';

const Cart = styled.div`
    display: flex;
    width: 78%;
    height: 90%;
    margin-left: 22%;
    margin-top: 1%;
`;

const CartTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: red;
`;

const H1 = styled.h1`
    color: #000;
    font-family: PT Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

            <Cart>
                <CartTop><H1>Phone</H1></CartTop>
            </Cart>

        </div>
    )
}