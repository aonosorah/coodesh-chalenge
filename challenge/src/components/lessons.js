import React from 'react';
import '../styles/lesson.css';
import content from '../assets/content';
import arrow from '../assets/arrow.svg';
import star from '../assets/star.svg';

export default function Lessons() {
  const showContent = content.map((item) => {
    return (
      <div key={item.id} className="box">
        <div className="number">
          <p>{item.id}</p>
        </div>
        <div className="resizing">
          <p className="title">{item.title}</p>
          <p className="text">{item.content}</p>
          <img src={arrow} />
        </div>
      </div>
    );
  });
  return (
    <div className="mobileLesson">
      <div className="separation">
        <p className="section">Lesson Plan</p>
      </div>
      <div className="major">{showContent}</div>
      <div className="mobileImg">
        <button id="button">Ver programa completo</button>
      </div>
      <div className="mobileImg hidden">
        <div>
          <img src={star} className="star" />
          <span className="difWeight">
            Los estudiantes le dan a Unycos una calificación promedio de 4.7 de
            5 estrellas.
          </span>
        </div>
        <div>
          <span className="txt">
            100% de garantía de satisfacción. 30 días de garantía de devolución
            de dinero.
          </span>
        </div>
      </div>
    </div>
  );
}
