import React from 'react';
import '../styles/comments.css';
import face from '../assets/face.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';

export default function Footer() {
  return (
    <footer>
      <div id="footerOne">
        <img src={face} id="socials" alt="facebook" />
        <img src={insta} id="socials" alt="instagram" />
        <img src={twitter} id="socials" alt="twitter" />
        <img src={youtube} id="socials" alt="youtube" />
      </div>
      <div className="mobileImg newSpace">
        <span>¿Dudas? Contáctanos por whatsapp</span>
        <div className="buttonBox difButton">
          <button id="button">+34 653 46 73 60</button>
        </div>
      </div>
      <div id="footerTwo">
        <p>Terminos y condiciones</p>
        <p>Política de privacidad</p>
        <p>Aviso legal</p>
      </div>
    </footer>
  );
}
