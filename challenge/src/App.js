import React from 'react';
import '../src/styles/homestyle.css';
import '../src/styles/responsive.css';
import Header from './components/header';
import swimmer from '../src/assets/swimmer.svg';
import book from '../src/assets/book.svg';
import video from '../src/assets/video.svg';
import Carousel from './components/carousel';
import Content from './components/content';
import Lessons from './components/lessons';
import More from './components/more';
import Comments from './components/comments';
import Footer from './components/footer';
import resOne from '../src/assets/resOne.svg';
import resTwo from '../src/assets/resTwo.svg';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <img src={swimmer} />
        <div className="more">
          <div className="mobileImg">
            <button id="button">Preguntas Frecuentes</button>
          </div>
          <div className="mobileImg">
            <span className='textMob'>
              APRENDE natación con una
              <br /> campeona olímpica
            </span>
          </div>
          <div className="mobileImg">
            <img src={resOne} />
            <img src={resTwo} />
          </div>
          <div className="desktopImg">
            <img src={book} className="resize" />
          </div>
          <div className="desktopImg">
            <img src={video} className="resize" />
          </div>
          <div>
            <button>Mas información</button>
          </div>
        </div>
        <Carousel />
        <Content />
        <Lessons />
        <More />
        <Comments />
        <Footer />
      </main>
    </>
  );
}
