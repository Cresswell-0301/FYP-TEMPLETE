import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    margin-top: 0.5rem;

    width: 98.8%;
    height: 100%;

    top: -8px;
    left: -8px;
    background: linear-gradient(285deg, #000 58.94%, rgba(0, 0, 0, 0.00) 113.07%, rgba(0, 0, 0, 0.11) 113.07%);

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
    display: ${props => (props.showMenu ? 'flex' : 'none')};
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

    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SvgArw = styled.svg`
    height: 30px;
    padding-left: 10px;
    
`;

const Path = styled.path`
    fill: white;
`;

const Button = styled.button`
    width: 150px;
    height: 88px;
    border-radius: 6px;
    border-width: 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(217, 217, 217, 0.00);
    
    &:hover {
        background: #DAD2D2;
        outline: none;

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
    }

`;

const RightCol = styled.div`
  height: 88px;
  
  @media (min-width: 768px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0px;
    bottom: 0px;
    right: 0px;
    padding-right: 10px;
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
    /* margin-left: -24px; */
    /* margin-top: 6px; */
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

export default function Navigation (){
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
     
  return (
    <div>
      <Container>
        <LogoContainer>
          <LogoSubContainer>
            <a href="#" aria-label="Home">
              <LogoImg src="Company_Logo.png" />
            </a>
          </LogoSubContainer>
        </LogoContainer>

        <List showMenu={showMenu}>
            <Button><A href="#">Home</A></Button>
            <Button><A href="#">Promotion</A></Button>
            <Button>
                <A href="#">Category</A>
                <SvgArw viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <Path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></Path>
                    </g>
                </SvgArw>
            </Button>
            <Button><A href="#">About Us</A></Button>
        </List>

        <NavBtn>
          <Btn type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" onClick={toggleMenu}>
            <Svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </Svg>
          </Btn>
        </NavBtn>

        <RightCol>
          <Input></Input>

          {/* Search Cart Icon */}
          <Span>
            <SearchIcon src="Search_Icon.png" alt="Search Icon Error"></SearchIcon>
            <CartText>MYR</CartText>
          </Span>  
        </RightCol>
      </Container>
    </div>
  )
}