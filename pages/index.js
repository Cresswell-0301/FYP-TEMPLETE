import styled from 'styled-components';
import Navigation from './navigation';
import SlideShow from './slideshow';

const Container = styled.div`
    margin-top: -23px;
    margin-left: -8px;
    width: 101.2%;
    height: 517px;
    background: linear-gradient(285deg, #000 58.94%, rgba(0, 0, 0, 0.00) 113.07%, rgba(0, 0, 0, 0.11) 113.07%);
`;

export default function Home (){
  return (
    <div>
      {/* Navigation Start */}
      <Navigation/>
      {/* Navigation End */}

      <Container>
        {/* Slide Show Start */}
        <SlideShow/>
        {/* Slide Show End */}

        {/* Login In Start */}
        
        {/* Login In End */}

      </Container>
    </div>
  )
}