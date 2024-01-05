import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  margin-top: 0.5rem;

  width: 98.5%;

  top: -8px;
  left: -8px;
  z-index: 5;
  background: linear-gradient(
    285deg,
    #000 58.94%,
    rgba(0, 0, 0, 0) 113.07%,
    rgba(0, 0, 0, 0.11) 113.07%
  );
  background-color: white;

  @media (min-width: 640px) {
    height: 40px;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  padding-left: 20px;

  @media (min-width: 768px) {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 10px;
  }
`;

const LogoSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 80%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const LogoImg = styled.img`
  width: 120px;
  height: 40px;
`;

const NavBtn = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Btn = styled.button`
  border: none;
  background: none;
  padding: 8px;
  border-radius: 4px;
  color: #ccc;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    color: #555;
    background-color: #f0f0f0;
  }

  &:focus {
    color: #555;
    background-color: #f0f0f0;
    outline: none;
  }
`;

const Svg = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

const List = styled.div`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  margin-right: -5rem;

  @media (min-width: 768px) {
    display: flex;

    > * + * {
      margin-left: 2.5rem;
    }
  }
`;

const A = styled.a`
  font-size: 22px;
  color: lightgray;
  transition: color 0.15s ease-in-out;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  padding-top: 8px;
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SvgArw = styled.svg`
  height: 30px;
  padding-left: 4px;
  padding-top: 4px;

`;

const Path = styled.path`
  fill: white;
`;

const Button = styled.button`
  width: 150px;
  height: 66px;
  border-radius: 6px;
  border-width: 0px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0);

  &:hover {
    background: #dad2d2;
    outline: none;

    A {
      color: #262525;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    Path {
      fill: black;
    }
  }
`;

const DropDisplay = styled.div` // update css
  display: flex;
  /* width: 92%; */
  width: 100%;
  /* height: auto; */
  z-index: 2;
  margin-top: 295px;
  margin-left: -133px;
  flex-direction: row;
`;

const DropBar = styled.div` // updated code
  display: none;
  flex-direction: column;
  width: 104px;
`;

const DropA = styled.a`
  font-family: Poppins;
  font-size: 18px !important;
  font-weight: 500 !important;
  text-decoration: none;
  color: black;

`;

const DropBar2 = styled.div`   // New styled component 
  display: none;
  flex-direction: column;
  position: absolute;
  left: 73%;
  width: 60%;
  height: 100px;
`;

const DropBtn = styled.button`
  text-align: left;
  border: none;
  padding: 8px 10px;
  width: 108%;
  padding-right: 105px;

  &:hover {
    background-color: gray;

    ${DropA} {
      color: white;
      font-weight: 500;
    }
  }
`;

const DropBtn2 = styled.button` // New styled component 
  text-align: left;
  border: none;
  padding: 8px 10px;
  width: 108%;
  font-family: Poppins;
  font-size: 18px !important;
  font-weight: 500 !important;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: gray;

    color: white;
    font-weight: 500;
  }

`;

const SharedBtn = styled.div`
  position: relative;
  width: 150px;
  height: 77px;
  border-radius: 6px;
  border-width: 0px;
  padding: 0;
  margin: 0;
  margin-top: -8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0);

  &:hover {
    background: #dad2d2;
    outline: none;
    border-radius: 6px 6px 0 0;

    A {
      color: #262525;
      text-align: center;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    Path {
      fill: black;
    }

    ${DropBar} {
      display: flex; 
    }
  }
`;

// const DropBar = styled.div` // updated code
//   display: none;
//   flex-direction: column;
//   width: 104px;
// `;

// const DropA = styled.a`
//   font-family: Poppins;
//   font-size: 18px !important;
//   font-weight: 500 !important;
//   text-decoration: none;
//   color: black;

// `;

// const DropBtn = styled.button`
//   text-align: left;
//   border: none;
//   padding: 8px 10px;
//   width: 108%;
//   padding-right: 105px;

//   &:hover {
//     background-color: gray;

//     ${DropA} {
//       color: white;
//       font-weight: 500;
//     }

//     ${DropBar2} {
//       display: flex;
//     }
//   }
// `;

const RightCol = styled.div`
  height: 65px;

  @media (min-width: 768px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0px;
    bottom: 0px;
    right: 0px;
    padding-right: 10px;
    margin-right: 8%;
  }
`;

const Span = styled.span`
  display: inline-flex;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding-right: 12px;
`;

const CartText = styled.span`
  font-family: Poppins;
  color: lightgray;
  font-size: 20px;
  font-weight: 400;
`;

const SearchIcon = styled.img`
  padding: 0 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border-radius: 10px;
  height: 22px;
  width: 120px;
  font-family: Poppins;
  font-size: 18px;
`;

// const DropBar2 = styled.div`   // New styled component 
//   /* display: none; */
//   flex-direction: column;
//   position: absolute;
//   left: 73%;
//   width: 60%;
//   height: 100px;
// `;

// const DropBtn2 = styled.button` // New styled component 
//   text-align: left;
//   border: none;
//   padding: 8px 10px;
//   width: 108%;
//   font-family: Poppins;
//   font-size: 18px !important;
//   font-weight: 500 !important;
//   text-decoration: none;
//   color: black;

//   &:hover {
//     background-color: gray;

//     color: white;
//     font-weight: 500;
//   }

// `;

// const Container = styled.div`
//     position: fixed;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 1.5rem 1rem;
//     margin-top: 0.5rem;

//     width: 98.95%;
//     height: 100%;

//     top: -8px;
//     left: -8px;
//     background: linear-gradient(285deg, #000 58.94%, rgba(0, 0, 0, 0.00) 113.07%, rgba(0, 0, 0, 0.11) 113.07%);
    
//     background-color: white;
//     z-index: 10;

//     @media (min-width: 640px) {
//         height: 40px;
//     }

//     @media (min-width: 768px) {
//         justify-content: center;
//     }
// `;

// const LogoContainer = styled.div`
//     display: flex;
//     flex: 1 1 0%;
//     padding-left: 20px;

//     @media (min-width: 768px) {
//         position: absolute;
//         top: 0px;
//         bottom: 0px;
//         left: 10px;
//     }
// `;

// const LogoSubContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
    
//     @media (min-width: 768px) {
//         width: auto;
//     }
// `;

// const LogoImg = styled.img`
//     width: 120px;
//     height: 40px;
// `;

// const NavBtn = styled.div`
//     margin-left: 0.5rem;
//     display: flex;
//     align-items: center;

//     @media (min-width: 768px) {
//         display: none;
//     }
// `;

// const Btn = styled.button`
//     border: none;
//     background: none;
//     padding: 8px;
//     border-radius: 4px;
//     color: #ccc;
//     transition: background-color 0.15s ease-in-out;

//     &:hover {
//         color: #555;
//         background-color: #f0f0f0;
//     }

//     &:focus {
//         color: #555;
//         background-color: #f0f0f0;
//         outline: none;
//     }
// `;

// const Svg = styled.svg`
//     height: 1.5rem;
//     width: 1.5rem;
// `;

// const List = styled.div`
//     display: ${props => (props.showMenu ? 'flex' : 'none')};
//     margin-right: -5rem;

//     @media (min-width: 768px) {
//         display: flex;

//         > * + * {
//             margin-left: 2.5rem;
//         }
//     }
// `;

// const A = styled.a`
//     font-size: 22px;
//     display: flex;
//     color: lightgray;
//     transition: color 0.15s ease-in-out;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     text-decoration: none;

//     font-family: Poppins;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     width: 100%;
//     height: 100%;

// `;

// const SvgArw = styled.svg`
//     height: 30px;
//     padding-left: 10px;
    
// `;

// const Path = styled.path`
//     fill: white;
// `;

// const Button = styled.button`
//     width: 150px;
//     height: 88px;
//     border-radius: 6px;
//     border-width: 0px;

//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(217, 217, 217, 0.00);
    
//     &:hover {
//         background: #DAD2D2;
//         outline: none;

//         A {
//           color: #262525;
//           text-align: center;
//           font-family: Poppins;
//           font-size: 24px;
//           font-style: normal;
//           font-weight: 400;
//           line-height: normal;
//         }

//         Path {
//             fill: black;
//         }
//     }
// `;

// const DropDisplay = styled.div`
//   display: none;
//   background-color: white;
//   border-radius: 6px;
//   width: 140px;
//   z-index: 2;
//   margin-top: 272px;
//   margin-left: -110px;
// `;

// const SharedBtn = styled.div`
//   position: relative;
//   width: 150px;
//   height: 88px;
//   border-radius: 6px;
//   border-width: 0px;

//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(217, 217, 217, 0.00);
    
//   &:hover {
//     background: #DAD2D2;
//     outline: none;
//     border-radius: 6px 6px 0 0;

//     A {
//       color: #262525;
//       text-align: center;
//       font-family: Poppins;
//       font-size: 24px;
//       font-style: normal;
//       font-weight: 400;
//       line-height: normal;
//     }

//     Path {
//       fill: black;
//     }

//     ${DropDisplay} {
//       display: flex;
//     }
//   }
// `;

// const DropBar = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const DropA = styled.a`
//   font-family: Poppins;
//   font-size: 18px !important;
//   font-weight: 500 !important;
//   text-decoration: none;
//   color: black;
// `;

// const DropBtn = styled.button`
//   text-align: left;
//   border: none;
//   padding: 8px 10px 8px 10px;
//   margin-left: -40px;
//   width: 231%;
//   background-color: white;

//   &:hover {
//     background-color: gray;

//     ${DropA} {
//       color: white;
//       font-weight: 500;
//     }
//   }
// `;

// const RightCol = styled.div`
//   height: 88px;

//   @media (min-width: 768px) {
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     top: 0px;
//     bottom: 0px;
//     right: 0px;
//     padding-right: 10px;
//   }
// `;

// const Span = styled.span`
//     display: inline-flex;
//     border-radius: 6px;
//     box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//     padding-right: 12px;
// `;

// const CartText = styled.span`
//     font-family: Poppins;
//     color: lightgray;
//     font-size: 20px;
//     font-weight: 400;
// `;

// const SearchIcon = styled.img`
//   padding: 0 20px;
//   cursor: pointer;
// `;

// const Input = styled.input`
//   border-radius: 10px;
//   height: 22px;
//   width: 120px;
//   font-family: Poppins;
//   font-size: 18px;
// `;

// const Link = styled.a`
//   text-decoration: none;
//   cursor: pointer;
// `;

export default function Navigation (){

  // Show the DropBar 2 
  const handleMouseOver = (value) => {    // New Code
    const DrpBar2 = document.getElementById('dropbar2');

    switch(value) {
      case 1:
        DrpBar2.style.marginTop = '195px';
        break;

      case 2:
        DrpBar2.style.marginTop = '266px';
        break;
        
      case 3:
        DrpBar2.style.marginTop = '339px';
        break;

      case 4:
        DrpBar2.style.marginTop = '452px';
        break;
      
      case 5:
        DrpBar2.style.marginTop = '525px';
        break;

      default:
        break;
    }
    DrpBar2.style.display = 'flex';
  };

  // Hide DropBar 2
  const handleMouseOut = () => {  // New Code
    const DrpBar2 = document.getElementById('dropbar2');
    DrpBar2.style.display = 'none';
  }

  // Resize Navigation Start
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
      setShowMenu(!showMenu);
  };

  const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
  };
    
  useEffect(() => {
    window.addEventListener('resize', closeMenuOnResize);
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);
  // Resize Navigation End

  return (
    <div>
      <Container>

        {/* Company Logo Start */}
        <LogoContainer>
          <LogoSubContainer>
            {/* <Link href="#"> */}
              <LogoImg src="Navigation/Company_Logo.png"/>  {/* Add the page name behide the / */}
            {/* </Link> */}
          </LogoSubContainer>
        </LogoContainer>
        {/* Company Logo End */}

        {/* Navigation Option Start */}
        <List showMenu={showMenu}>

          {/* Option 1 */}
            <Button><A href="/">Home</A></Button> {/* Add the page name behide the / */}


          {/* Option 2 */}
            <Button><A href="#">Promotion</A></Button>  {/* Add the page name behide the / */}

          {/* Option 3 */}
          <SharedBtn>
            <A>Category</A>

            {/* Arrow Down Icon Start */}
            <SvgArw viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <Path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></Path>
              </g>
            </SvgArw>
            {/* Arrow Down Icon End */}    

            {/* Category Drop Down List Start */}
            <DropDisplay>
              <DropBar> {/* New Code */}

                <DropBtn
                onMouseOver={() => handleMouseOver(1)}
                onMouseLeave={() => handleMouseOut()}
                >
                  <DropA href="./category">Phone</DropA>
                </DropBtn>

                <DropBtn
                onMouseOver={() => handleMouseOver(2)}
                onMouseLeave={() => handleMouseOut()}
                >
                  <DropA href="#">Tablets</DropA>
                </DropBtn>

                <DropBtn
                onMouseOver={() => handleMouseOver(3)}
                onMouseLeave={() => handleMouseOut()}
                >
                  <DropA href="#">Phone Case</DropA>
                </DropBtn>

                <DropBtn
                onMouseOver={() => handleMouseOver(4)}
                onMouseLeave={() => handleMouseOut()}
                >
                  <DropA href="#">Charger</DropA>
                </DropBtn>

                <DropBtn
                onMouseOver={() => handleMouseOver(5)}
                onMouseLeave={() => handleMouseOut()}
                >
                  <DropA href="#">Cable</DropA>
                </DropBtn>

              </DropBar>
            </DropDisplay>
            {/* Category Drop Down List End */}

            {/* New Code Start */}
            <DropBar2 id="dropbar2">
              <DropBtn2 type="button">Iphone</DropBtn2>
              <DropBtn2 type="button">Samsung</DropBtn2>
              <DropBtn2 type="button">XiaoMi</DropBtn2>
              <DropBtn2 type="button">None</DropBtn2>
            </DropBar2>
            {/* New Code End */}

          </SharedBtn>

          {/* Option 4 */}
            <Button><A href="#">About Us</A></Button> {/* Add the page name behide the / */}

        </List>
        {/* Navigation Option End */}

        {/* Screen Width be small then it will function > Start < */}
        <NavBtn>
          <Btn type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" onClick={toggleMenu}>
            <Svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </Svg>
          </Btn>
        </NavBtn>
        {/* Screen Width be small then it will function > End < */}

        <RightCol>

          {/* Search Input Start */}
          <Input></Input>
          {/* Search Input End */}

          <Span>
            {/* Search Cart Icon Start*/}
            <SearchIcon src="Navigation/Search_Icon.png" alt="Search Icon Error" title="Search"></SearchIcon>
            {/* Search Cart Icon End*/}

            {/* Currency Text Start*/}
            <CartText>MYR</CartText>
            {/* Currency Text End*/}
          </Span>

        </RightCol>

      </Container>

    </div>
  )
}