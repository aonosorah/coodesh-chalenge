import React from 'react';
import '../styles/content.css';
import task from '../assets/tasks.svg';
import test from '../assets/tests.svg';
import ebook from '../assets/ebook.svg';
import view from '../assets/view.svg';

export default function Content() {
  return (
    <div className="order">
      <h2>Conteudo Exclusivo</h2>
      <div className="icons">
        <img src={ebook} />
        <img src={view} />
        <img src={test} />
        <img src={task} />
      </div>
      <button>Mas información</button>
    </div>
  );
}
