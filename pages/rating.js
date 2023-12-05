import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


// Rating CSS Start
const StarRatingWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 220px;
    width: 102%;
`;

const StarIcon = styled.span`
    font-size: 30px;
    color: ${({ selected }) => (selected ? 'red' : '#ccc')}; // #ff1493
    cursor: default;
`;

const RatingText = styled.span`
    margin: 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: black; // #ff1493
`;

const Img = styled.img`
    margin-left: auto;
    cursor: pointer;
    filter: ${props => props.clicked ? 'grayscale(0%)' : 'grayscale(100%)'} ;
`;
// Rating CSS End


// Text Rate Css Start
const TextRatingCon = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
    font-family: Poppins;
`;

const TxtNum = styled(RatingText)`
    color: black; // #ff1493
    width: 8%;
    text-align: center;
    margin-left: 2px;
`;

const Txt = styled(TxtNum)`
    width: auto;
`;

// Text Rate Css End
export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [clicked, setClicked] = useState(false);
  
  useEffect(() => {
    // Set initial rating randomly to 3, 4, 5
    const initialRating = [3, 4, 5][Math.floor(Math.random() * 3)];
    setRating(initialRating);
  }, []); // Empty dependency array to run the effect only once on mount

  const [num, setNum] = useState(0);

    useEffect(() => {
        const RdmNum = Math.floor(Math.random() * 11);
        setNum(RdmNum);
    }, []);

  return (
    <div>
        {/* Rating Start */}
        <StarRatingWrapper>
            <RatingText>{rating.toFixed(1)}</RatingText>

            {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon key={index} selected={index <= rating}>
                    ★
                </StarIcon>
            ))}

            <Img src='Item/Love_Icon.png' alt='Love' onClick={() => setClicked(!clicked)} clicked={clicked}/>
        </StarRatingWrapper>
        {/* Rating End */}

        <TextRatingCon>
            <TxtNum>{num}</TxtNum>
            <Txt>Rating</Txt>
        </TextRatingCon>

        <TextRatingCon>
            <TxtNum>{num+(num+1)}</TxtNum>
            <Txt>Sold</Txt>
        </TextRatingCon>

    </div>
  );
};