import React, { useEffect, useState } from 'react';
import { GetInfo } from '../services/api';
import '../styles/carousel.css';

export default function Carousel() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const test = async () => {
      const res = await GetInfo();
      setData(res);
    };
    test();
  }, []);
  const showImages = data
    .filter((item, index) => {
      return current !== index;
    })
    .map((item, index) => {
      return (
        <div onClick={() => setCurrent(index)} key={index}>
          <img src={item.image} atl={item.title} />
          <span>{item.title}</span>
        </div>
      );
    });
  console.log(data);
  return (
    <div className="carousel">
      <div className="desktopImg">
        <img src={data[current]?.image} />
      </div>
      <div className="descBox">
        <div>
          <h2>{data[current]?.title}</h2>
          <span>{data[current]?.description}</span>
        </div>
        <div id="carouselImg">{showImages}</div>
      </div>
    </div>
  );
}
