import styled from "styled-components"
  
const Container = styled.div`
    margin-left: 180px;
    margin-top: 45px;
    padding-top: 20px;
    padding-left: 30px;
    width: 515px;
    height: 333px;
`;

const UpCon = styled.div`
    height: 142px;
    border: 1px solid #FFF;
    border-radius: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;

`;

const Img = styled.img`
    border-radius: 17px;
    border: 1px solid #E4D9D9;
    background: rgba(217, 217, 217, 0.00);
    width: 80px;
    height: 80px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    margin-left: 30px;
`;

// Share Component to H1 , P
const SharedTxt = styled.h1`
    width: max-content;
    font-family: Poppins;
    color: #ccc;
    cursor:  default;

    &:hover {
        color: #fff;
    }
`;

const H1 = styled(SharedTxt)`
    font-size: 20px;
    font-weight: 600;
`;

const P = styled(SharedTxt)`
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    max-width: 340px;
`;

// User Setting Icon
const UserSettng = styled.img`
    align-self: flex-start;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-top: 10px;

    cursor: pointer;
    filter: brightness(50%);

    &:hover {
        filter: brightness(100%);
    }
`;

const Hr = styled.hr`
    margin: 45px 0;
    border: none;
    height: 1px;
    background: #373737; 
`;

const DownCon = styled(UpCon)`
    height: 68px;
    padding: 0;
`;

const Icon = styled.img`
    width: 60px;
    height: 60px;
    padding: 4px 34.2px;
    cursor: pointer;
    filter: brightness(50%);

    &:hover {
        border-radius: 17px;
        background: rgba(241, 100, 91, 0.85);
        filter: brightness(100%);
    }  
`;

const Icon1 = styled(Icon)`
    border-radius: 17px 0 0 17px;
`;

const Icon2 = styled(Icon)`
    border-radius: 0;
`;

const Icon3 = styled(Icon)`
    border-radius: 0;
`;

const Icon4 = styled(Icon)`
    border-radius: 0 17px 17px 0;
`;

export default function AfterLogin() {

    return(
        <Container>
            <UpCon>
                <Img src="AfterLogin/User_Icon.png"/>

                <Details>
                    <H1>Cresswell Lew</H1>
                    <P>1211206094@student.mmu.edu.my</P>
                </Details>

                <UserSettng src="AfterLogin/User_Setting_Icon.png" title="Setting"/>
            </UpCon>

            <Hr/>

            <DownCon>
                <Icon1 src="AfterLogin/Like_Icon.png" title="Like"/>
                <Icon2 src="AfterLogin/Shopping_Cart.png" title="Cart"/>
                <Icon3 src="AfterLogin/Delivery_Icon.png" title="Delivery"/>
                <Icon4 src="AfterLogin/Coupon_Icon.png" title="Coupon"/>
            </DownCon>

        </Container>
    )
}