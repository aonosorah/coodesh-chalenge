import React from 'react';
import '../styles/comments.css';
import comment from '../assets/comments';
import like from '../assets/like.svg';
import user1 from '../assets/userone.svg';
import user2 from '../assets/usertwo.svg';
import user3 from '../assets/userthree.svg';

export default function Comments() {
  const images = [user1, user2, user3];
  const showComments = comment.map((item, index) => {
    return (
      <div key={item.id} className="commentBox">
        <div className="desktopImg">
          <img src={images[index]} className="user" />
        </div>
        <div className="side">
          <div className="userInfo">
            <p className="nameColor">{item.name}</p>
            <p className="timeColor desktopImg">
              <img src={like} className="likeSize" />
              {item.time}
            </p>
          </div>
          <div className="commentTxt">
            <p className="commentStyle">{item.comment}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="Container">
      <p className="titleSection mobileImg">Comentarios de usuarios</p>
      <p className="titleSection desktopImg">Comentarios de los estudiantes</p>
      <p className="positive desktopImg">
        <strong className="yellow">98.7% de valoraciones positivas</strong> /
        total de 726 valoraciones
      </p>
      <div className="direction">{showComments}</div>

      <div className="buttonBox desktopImg">
        <button className="buttonMas">Ver Más</button>
      </div>

      <h2 className="anotherTitle">ARTÍCULOS RELACIONADOS</h2>
      <div className="moreContent">
        <div>
          <p>Consejos para nadadores principiantes</p>
          <p id="date">22.06.2019</p>
        </div>
        <div>
          <p>¿Nadar es un buen método para adelgazar?</p>
          <p id="date">22.06.2019</p>
        </div>
        <div>
          <p>Recomendaciones para lograr que un niño venza el miedo al agua</p>
          <p id="date">22.06.2019</p>
        </div>
        <div>
          <p>Consejos para mejorar la técnica del estilo crol</p>
          <p id="date">22.06.2019</p>
        </div>
      </div>
      <div className="buttonBox difButton">
        <button id="button">leer más en nuestro blog</button>
      </div>
      <div id="nearlyFooter" className="desktopImg">
        <h2 id="htwo">APRENDE CON LOS MEJORES</h2>
        <h3 id="h3">
          Detrás de cada éxito, hay una história. <br />
          conoce en nuestro blog.
        </h3>
        <button id="button">leer más en nuestro blog</button>
      </div>
    </div>
  );
}
