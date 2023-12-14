import styled from 'styled-components';
import Navigation from './navigation';
import SlideShow from './slideshow';
import Login from './login';
import HotDeals from './hotdeal';
import Chatbox from './chatbox'; 

const Container = styled.div`
    margin-top: 88.3px;
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
      {/* Navigation */}
      <Navigation/>

      <Container>
        {/* Slide Show */}
        <SlideShow/>

        {/* Login In */}
        <Login/>
      </Container>

      {/* Hot Deals */}
      <HotDeals />

      {/* ChatBox */}
      <Chatbox />
      
    </div>
  )
}