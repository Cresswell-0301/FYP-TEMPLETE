import styled from 'styled-components';
import Login from './login';
import AfterLogin from './afterlogin';
import dynamic from 'next/dynamic';

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
  const SlideShow = dynamic(() => import('./slideshow'), { ssr: false });
  const Navigation = dynamic(() => import('./navigation'), { ssr: false });
  
  return (
    <div>
      {/* Navigation Start */}
      <Navigation/>
      {/* Navigation End */}

      <Container>
        {/* Slide Show Start */}
        <SlideShow/>
        {/* Slide Show End */}

        {/* After Login Start */}
        <AfterLogin/>
        {/* After Login End */}

      </Container>
    </div>
  )
}