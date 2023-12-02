import styled from 'styled-components';
import Navigation from './navigation';
import SlideShow from './slideshow';
import Login from './login';

const Container = styled.div`
    margin-top: -7.7px;
    margin-left: -8px;
    width: 101.03%;
    height: 517px;
    background: linear-gradient(285deg, #000 58.94%, rgba(0, 0, 0, 0.00) 113.07%, rgba(0, 0, 0, 0.11) 113.07%);
    display: flex;
    flex-direction: row;
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
        <Login/>
        {/* Login In End */}

      </Container>
    </div>
  )
}