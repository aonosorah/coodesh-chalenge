import React from 'react';
import '../styles/more.css';
import ismael from '../assets/ismael.svg';
import lewis from '../assets/lewis.svg';
import marcus from '../assets/marcus.svg';

export default function More() {
  return (
    <div className="infos">
      <p className="cursos">Más Cursos</p>
      <div className="imgBox">
        <img src={marcus} className="picture" />
        <img src={ismael} className="picture" />
        <img src={lewis} className="picture" />
      </div>
      <p className="infos">OBTÉN MÁS INFORMACiÓN</p>
      <div className="inputs mobileInput">
        <input placeholder="Nombre Completo" className="input" />
        <input placeholder="Correo electrónico" className="input" />
      </div>
      <div className="mobileInput">
        <select>
          <option>País/Código País</option>
          <option>+55</option>
          <option>+1</option>
          <option>+44</option>
          <option>+88</option>
        </select>
        <input placeholder="Teléfono" className="input" />
      </div>
      <div className="fixing">
        <div className="check">
          <label>
            <input type="checkbox" /> Acepto las{' '}
            <strong>condiciones de uso</strong> y <strong>protección</strong>
            de datos.
          </label>
        </div>
        <div className="check">
          <label>
            <input type="checkbox" />
            Me gustaría recibir información sobre nuevos cursos, ofertas y
            promociones
          </label>
        </div>
      </div>
      <div className="buttonBox">
        <button>Enviar</button>
      </div>
    </div>
  );
}
