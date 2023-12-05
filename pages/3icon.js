import styled from "styled-components"


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

export default function SideIcon(){
    return(
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
    )
}