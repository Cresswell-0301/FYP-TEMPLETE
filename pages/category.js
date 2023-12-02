import styled from "styled-components"
import Navigation from "./navigation";

const LeftCon = styled.div`
    position: fixed;
    width: 240px;
    height: 600px;
    margin: 20px 0 30px 15px;
    border-radius: 10px;
    background: #343A40;
    box-shadow: -6px 6px 2px 0px rgba(33, 37, 41, 0.25);
    padding: 0 30px;
`;

const LeftUpCon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #F8F9FA;
`;

const Img = styled.img`
    width: 32px;
    height: 32px;
`;

const Img1 = styled(Img)`

`;

const H1 = styled.h1`
    color: #FFF;
    font-family: Poppins;
    font-size: 28px;
    font-weight: 400;
    width: 300px;
    margin-left: 15px;
`;

// Left Side Bar Middle
const MiddleCon = styled.div`
    border-radius: 10px;
    border: 1px solid #F8F9FA;
    background: rgba(217, 217, 217, 0.00);
    height: 348px;
    flex-shrink: 0;
`;

export default function Category(){
  
    return(
        <div>
            {/* Navigation Start */}
            <Navigation/>
            {/* Navigation End */}
            
            <LeftCon>
                <LeftUpCon>
                    <Img src="Category/Check_List_Icon.png"/>
                    <H1>Filter</H1>
                    <Img1 src="Category/Filter_Icon.png"/>
                </LeftUpCon>

                <MiddleCon>

                </MiddleCon>
            </LeftCon>
        </div>
    )
}